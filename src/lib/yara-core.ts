import initYara, {
  checkRule as wasmCheckRule,
  scanBytes as wasmScanBytes,
} from "../wasm/wasm-poc/pkg-web/yara_x.js";

let initPromise: Promise<unknown> | undefined;

async function ensureReady() {
  initPromise ??= initYara();
  await initPromise;
}

export async function checkRule(rule: string) {
  await ensureReady();
  return wasmCheckRule(rule);
}

export async function scanBytes(rule: string, input: Uint8Array) {
  await ensureReady();
  return wasmScanBytes(rule, input);
}
