import { LitElement, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { DEFAULT_SAMPLE_INPUT, DEFAULT_SAMPLE_RULE } from "../data/sample";
import { summarizeResult, type ResultSummary } from "../lib/result-summary";
import type { EditorHandle } from "../lib/yara-monaco";

type ResultMode = "summary" | "raw";
type SampleMode = "text" | "file";
type ServiceStatus = "idle" | "loading" | "ready" | "error";

type ExecutionState = {
  raw: unknown;
  durationMs: number | null;
  summary: ResultSummary;
};

type LoadedSampleFile = {
  name: string;
  size: number;
  bytes: Uint8Array;
};

const INITIAL_EXECUTION: ExecutionState = {
  raw: {
    message: "Local YARA-X playground ready",
    hint: "Edit the rule, tweak the sample text, then run the scanner.",
  },
  durationMs: null,
  summary: summarizeResult({}, "scan"),
};

@customElement("yara-playground-app")
export class YaraPlaygroundApp extends LitElement {
  @query(".rule-editor")
  private ruleEditorHost!: HTMLDivElement;

  @query(".sample-editor")
  private sampleEditorHost!: HTMLDivElement;

  @query("#sample-file-input")
  private sampleFileInput!: HTMLInputElement;

  @query(".editor-region")
  private editorRegion!: HTMLDivElement;

  @query(".workspace")
  private workspace!: HTMLDivElement;

  @state()
  private resultMode: ResultMode = "summary";

  @state()
  private sampleMode: SampleMode = "text";

  @state()
  private isBusy = false;

  @state()
  private lspStatus: ServiceStatus = "loading";

  @state()
  private coreStatus: ServiceStatus = "idle";

  @state()
  private editorSplit = 52;

  @state()
  private workspaceSplit = 68;

  @state()
  private execution = INITIAL_EXECUTION;

  @state()
  private loadedSampleFile: LoadedSampleFile | null = null;

  private ruleEditor?: EditorHandle;
  private sampleEditor?: EditorHandle;
  private coreModulePromise?: Promise<typeof import("../lib/yara-core")>;
  private stopEditorResize?: () => void;
  private stopWorkspaceResize?: () => void;

  protected createRenderRoot() {
    return this;
  }

  private readonly handleKeydown = (event: KeyboardEvent) => {
    if (
      (event.metaKey || event.ctrlKey) &&
      !event.shiftKey &&
      event.key.toLowerCase() === "s"
    ) {
      event.preventDefault();
      void this.formatRule();
      return;
    }

    if (
      (event.metaKey || event.ctrlKey) &&
      event.shiftKey &&
      event.key.toLowerCase() === "f"
    ) {
      event.preventDefault();
      void this.formatRule();
      return;
    }

    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      void this.runScan();
    }
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this.handleKeydown);
  }

  protected async firstUpdated() {
    try {
      const { createPlainTextEditor, createYaraEditor } =
        await import("../lib/yara-monaco");
      const [ruleEditor, sampleEditor] = await Promise.all([
        createYaraEditor(this.ruleEditorHost, DEFAULT_SAMPLE_RULE),
        createPlainTextEditor(this.sampleEditorHost, DEFAULT_SAMPLE_INPUT),
      ]);

      this.ruleEditor = ruleEditor;
      this.sampleEditor = sampleEditor;
      this.lspStatus = "ready";
    } catch (error) {
      console.error("failed to initialize editors", error);
      this.lspStatus = "error";
      this.execution = {
        raw: {
          errors: [error instanceof Error ? error.message : String(error)],
          warnings: [],
          matching_rules: [],
          non_matching_rules: [],
        },
        durationMs: null,
        summary: summarizeResult(
          {
            errors: [error instanceof Error ? error.message : String(error)],
          },
          "scan",
        ),
      };
    }
  }

  disconnectedCallback() {
    window.removeEventListener("keydown", this.handleKeydown);
    this.stopEditorResize?.();
    this.stopWorkspaceResize?.();
    this.ruleEditor?.dispose();
    this.sampleEditor?.dispose();
    super.disconnectedCallback();
  }

  private get editorsReady() {
    return Boolean(
      this.ruleEditor && this.sampleEditor && this.lspStatus === "ready",
    );
  }

  private get canRun() {
    return (
      this.editorsReady &&
      !this.isBusy &&
      (this.sampleMode === "text" || this.loadedSampleFile !== null)
    );
  }

  private get isCompactLayout() {
    return window.innerWidth <= 900;
  }

  private get resultTone() {
    return this.execution.summary.tone;
  }

  private get resultLabel() {
    switch (this.resultTone) {
      case "match":
        return "Match";
      case "clean":
        return "Clean";
      case "issues":
        return "Issues";
      default:
        return "Ready";
    }
  }

  private get serviceCoreLabel() {
    switch (this.coreStatus) {
      case "loading":
        return "Core loading";
      case "ready":
        return "Core ready";
      case "error":
        return "Core error";
      default:
        return "Core idle";
    }
  }

  private get serviceLspLabel() {
    switch (this.lspStatus) {
      case "loading":
        return "LSP starting";
      case "ready":
        return "LSP ready";
      case "error":
        return "LSP error";
      default:
        return "LSP idle";
    }
  }

  private async ensureCoreModule() {
    this.coreStatus = "loading";

    try {
      this.coreModulePromise ??= import("../lib/yara-core");
      const module = await this.coreModulePromise;
      this.coreStatus = "ready";
      return module;
    } catch (error) {
      this.coreStatus = "error";
      throw error;
    }
  }

  private async runScan() {
    if (!this.canRun) return;

    this.isBusy = true;
    const startedAt = performance.now();

    try {
      const { scanBytes } = await this.ensureCoreModule();
      const sampleBytes =
        this.sampleMode === "file"
          ? (this.loadedSampleFile?.bytes ?? new Uint8Array())
          : new TextEncoder().encode(this.sampleEditor?.getValue() ?? "");
      const raw = await scanBytes(
        this.ruleEditor?.getValue() ?? "",
        sampleBytes,
      );
      this.execution = {
        raw,
        durationMs: Math.round(performance.now() - startedAt),
        summary: summarizeResult(raw, "scan"),
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const raw = {
        errors: [message],
        warnings: [],
        matching_rules: [],
        non_matching_rules: [],
      };

      this.execution = {
        raw,
        durationMs: Math.round(performance.now() - startedAt),
        summary: summarizeResult(raw, "scan"),
      };
    } finally {
      this.isBusy = false;
    }
  }

  private async formatRule() {
    if (!this.ruleEditor || this.lspStatus !== "ready") return;

    const formatted = await this.ruleEditor.format();
    if (!formatted) {
      console.warn("format action is not available for the YARA editor");
    }
  }

  private setSampleMode(mode: SampleMode) {
    this.sampleMode = mode;
  }

  private openSampleFilePicker() {
    this.sampleFileInput?.click();
  }

  private async handleSampleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    const bytes = new Uint8Array(await file.arrayBuffer());
    this.loadedSampleFile = {
      name: file.name,
      size: file.size,
      bytes,
    };
    this.sampleMode = "file";
    input.value = "";
  }

  private clearLoadedFile() {
    this.loadedSampleFile = null;
    this.sampleMode = "text";
  }

  private formatBytes(size: number) {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  private setEditorSplitFromPointer(clientX: number, clientY: number) {
    const rect = this.editorRegion.getBoundingClientRect();

    if (this.isCompactLayout) {
      const next = ((clientY - rect.top) / rect.height) * 100;
      this.editorSplit = Math.min(72, Math.max(28, next));
      return;
    }

    const next = ((clientX - rect.left) / rect.width) * 100;
    this.editorSplit = Math.min(72, Math.max(28, next));
  }

  private setWorkspaceSplitFromPointer(clientY: number) {
    const rect = this.workspace.getBoundingClientRect();
    const next = ((clientY - rect.top) / rect.height) * 100;
    this.workspaceSplit = Math.min(78, Math.max(32, next));
  }

  private startEditorResize(event: PointerEvent) {
    event.preventDefault();
    this.setEditorSplitFromPointer(event.clientX, event.clientY);
    document.body.style.userSelect = "none";
    document.body.style.cursor = this.isCompactLayout
      ? "row-resize"
      : "col-resize";

    const onMove = (moveEvent: PointerEvent) => {
      this.setEditorSplitFromPointer(moveEvent.clientX, moveEvent.clientY);
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      this.stopEditorResize = undefined;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    this.stopEditorResize = onUp;
  }

  private startWorkspaceResize(event: PointerEvent) {
    event.preventDefault();
    this.setWorkspaceSplitFromPointer(event.clientY);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";

    const onMove = (moveEvent: PointerEvent) => {
      this.setWorkspaceSplitFromPointer(moveEvent.clientY);
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      this.stopWorkspaceResize = undefined;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    this.stopWorkspaceResize = onUp;
  }

  private renderServiceChip(label: string, status: ServiceStatus) {
    return html`<span class="service-chip ${status}">${label}</span>`;
  }

  private renderStat(label: string, value: number) {
    return html`
      <div class="stat">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `;
  }

  private renderIssues(title: string, issues: string[]) {
    if (issues.length === 0) return null;

    return html`
      <section class="result-section">
        <div class="section-heading">${title}</div>
        <ul class="issue-list">
          ${issues.map((issue) => html`<li>${issue}</li>`)}
        </ul>
      </section>
    `;
  }

  private renderMatches() {
    const { matchingRules } = this.execution.summary;

    return html`
      <section class="result-section">
        <div class="result-row">
          <div class="section-heading">Matching rules</div>
          <span class="muted">${matchingRules.length}</span>
        </div>

        ${matchingRules.length === 0
        ? html`<p class="empty-copy">
              No matching rules for the current sample.
            </p>`
        : html`
              <div class="match-list">
                ${matchingRules.map(
          (rule) => html`
                    <article class="match-item">
                      <div class="result-row">
                        <div>
                          <h3>${rule.identifier}</h3>
                          <p class="muted">${rule.namespace}</p>
                        </div>
                        <span class="hit-pill">${rule.hits} hits</span>
                      </div>
                      <div class="pattern-list">
                        ${rule.patterns.map(
            (pattern) => html`
                            <div class="pattern-row">
                              <span>${pattern.identifier}</span>
                              <code
                                >${pattern.ranges.join(", ") ||
              "No ranges"}</code
                              >
                            </div>
                          `,
          )}
                      </div>
                    </article>
                  `,
        )}
              </div>
            `}
      </section>
    `;
  }

  private renderNonMatches() {
    const { nonMatchingRules } = this.execution.summary;

    if (nonMatchingRules.length === 0) return null;

    return html`
      <section class="result-section">
        <div class="section-heading">Non-matching rules</div>
        <div class="token-row">
          ${nonMatchingRules.map(
      (rule) => html`<span class="token">${rule}</span>`,
    )}
        </div>
      </section>
    `;
  }

  private renderSummaryResults() {
    const { summary } = this.execution;

    return html`
      <section class="metrics-grid">
        ${this.renderStat("Matches", summary.matches)}
        ${this.renderStat("Non-matches", summary.nonMatches)}
        ${this.renderStat("Warnings", summary.warnings)}
        ${this.renderStat("Errors", summary.errors)}
      </section>

      <section class="headline-strip ${summary.tone}">
        <div class="result-row">
          <p>${summary.headline}</p>
          <span class="hit-pill ${summary.tone}">${this.resultLabel}</span>
        </div>
      </section>

      ${this.renderIssues("Warnings", summary.warningsList)}
      ${this.renderIssues("Errors", summary.errorsList)} ${this.renderMatches()}
      ${this.renderNonMatches()}
    `;
  }

  private renderRawResults() {
    return html`<pre class="raw-output">
${JSON.stringify(this.execution.raw, null, 2)}</pre
    >`;
  }

  private renderSampleSourceControls() {
    return html`
      <div class="sample-head-actions">
        <div class="mode-switch" role="tablist" aria-label="Sample source">
          <label
            class="mode-chip ${this.sampleMode === "text" ? "active" : ""}"
          >
            <input
              type="radio"
              name="sample-mode"
              .checked=${this.sampleMode === "text"}
              @change=${() => {
        this.setSampleMode("text");
      }}
            />
            <span>Text</span>
          </label>
          <label
            class="mode-chip ${this.sampleMode === "file" ? "active" : ""}"
          >
            <input
              type="radio"
              name="sample-mode"
              .checked=${this.sampleMode === "file"}
              @change=${() => {
        this.setSampleMode("file");
      }}
            />
            <span>File</span>
          </label>
        </div>

        <input
          id="sample-file-input"
          type="file"
          hidden
          @change=${this.handleSampleFileChange}
        />
      </div>
    `;
  }

  private renderSampleFileState() {
    if (!this.loadedSampleFile) {
      return html`
        <div class="file-state empty">
          <div class="file-state-copy">
            <span class="eyebrow">File mode</span>
            <h3>No file selected yet</h3>
            <p>
              Choose a file to keep everything local in your browser. Nothing
              leaves your device.
            </p>
          </div>
          <button class="secondary-button" @click=${this.openSampleFilePicker}>
            Choose file
          </button>
        </div>
      `;
    }

    return html`
      <div class="file-state loaded">
        <div class="file-state-copy">
          <span class="eyebrow">File ready</span>
          <h3>${this.loadedSampleFile.name}</h3>
          <p>
            ${this.formatBytes(this.loadedSampleFile.size)} loaded locally in
            memory for this session.
          </p>
        </div>
        <div class="file-state-actions">
          <button class="secondary-button" @click=${this.openSampleFilePicker}>
            Replace
          </button>
          <button class="ghost-button" @click=${this.clearLoadedFile}>
            Cancel
          </button>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <main class="studio">
        <header class="topbar">
          <div class="brand">
            <div class="brand-mark">YX</div>
            <div class="brand-copy">
              <strong>YARA-X Playground</strong>
              <span>Local-first playground</span>
            </div>
          </div>

          <div class="topbar-actions">
            <div class="status-row">
              ${this.renderServiceChip(this.serviceCoreLabel, this.coreStatus)}
              ${this.renderServiceChip(this.serviceLspLabel, this.lspStatus)}
            </div>

            <button
              class="run-button"
              @click=${this.runScan}
              ?disabled=${!this.canRun}
            >
              <span class="run-icon" aria-hidden="true">
                ${this.isBusy
        ? html`
                      <svg viewBox="0 0 24 24" class="spinner">
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.4"
                          stroke-linecap="round"
                          stroke-dasharray="42 18"
                        ></circle>
                      </svg>
                    `
        : html`
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M8 6.5v11l9-5.5-9-5.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    `}
              </span>
              <span>${this.isBusy ? "Running…" : "Run"}</span>
              <span class="run-tooltip" role="tooltip">Cmd/Ctrl + Enter</span>
            </button>
          </div>
        </header>

        <section
          class="workspace"
          style=${`--workspace-split: ${this.workspaceSplit.toFixed(2)}%;`}
        >
          <section
            class="editor-region"
            style=${`--editor-split: ${this.editorSplit.toFixed(2)}%;`}
          >
            <article class="pane">
              <header class="pane-head">
                <div class="pane-head-copy">
                  <h2>Rule editor</h2>
                </div>
                <span class="pane-meta">main.yar</span>
              </header>
              <div class="editor-shell rule-editor"></div>
            </article>

            <div
              class="editor-divider"
              role="separator"
              aria-label="Resize editors"
              aria-orientation=${this.isCompactLayout
        ? "horizontal"
        : "vertical"}
              @pointerdown=${this.startEditorResize}
            >
              <div class="divider-handle"></div>
            </div>

            <article class="pane sample-pane">
              <header class="pane-head">
                <div class="pane-head-copy">
                  <h2>Sample editor</h2>
                </div>
              </header>
              <div class="sample-pane-controls">
                ${this.renderSampleSourceControls()}
              </div>
              <div
                class="sample-pane-shell ${this.sampleMode === "file"
        ? "is-file-mode"
        : ""}"
              >
                <div class="editor-shell sample-editor"></div>
                <div class="file-state-shell">
                  ${this.renderSampleFileState()}
                </div>
              </div>
            </article>
          </section>

          <div
            class="workspace-divider"
            role="separator"
            aria-label="Resize results"
            aria-orientation="horizontal"
            @pointerdown=${this.startWorkspaceResize}
          >
            <div class="divider-handle horizontal"></div>
          </div>

          <section class="results-region">
            <header class="results-head">
              <div>
                <h2>Scan results</h2>
              </div>

              <div class="results-controls">
                <div
                  class="mode-switch"
                  role="tablist"
                  aria-label="Result mode"
                >
                  <label
                    class="mode-chip ${this.resultMode === "summary"
        ? "active"
        : ""}"
                  >
                    <input
                      type="radio"
                      name="result-mode"
                      .checked=${this.resultMode === "summary"}
                      @change=${() => {
        this.resultMode = "summary";
      }}
                    />
                    <span>Summary</span>
                  </label>
                  <label
                    class="mode-chip ${this.resultMode === "raw"
        ? "active"
        : ""}"
                  >
                    <input
                      type="radio"
                      name="result-mode"
                      .checked=${this.resultMode === "raw"}
                      @change=${() => {
        this.resultMode = "raw";
      }}
                    />
                    <span>Raw</span>
                  </label>
                </div>
                <span class="duration-chip">
                  ${this.execution.durationMs === null
        ? "--"
        : `${this.execution.durationMs} ms`}
                </span>
              </div>
            </header>

            <div class="results-body">
              ${this.resultMode === "summary"
        ? this.renderSummaryResults()
        : this.renderRawResults()}
            </div>
          </section>
        </section>
      </main>
    `;
  }
}
