/* tslint:disable */
/* eslint-disable */

export function checkRule(rule: string): any;

export function runServer(url: string): Promise<void>;

export function runWorkerServer(): void;

export function scanBytes(rule: string, data: Uint8Array): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly runServer: (a: number, b: number) => any;
    readonly runWorkerServer: () => [number, number];
    readonly checkRule: (a: number, b: number) => any;
    readonly scanBytes: (a: number, b: number, c: any) => any;
    readonly wasm_bindgen__closure__destroy__ha7e8db3887d42df0: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h2a96d2370812ff4f: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h53f5e6edcaee0b19: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h8d9b771f8aaf8b43: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h125689c32de92c93: (a: number, b: number, c: any, d: any, e: any, f: any) => any;
    readonly wasm_bindgen__convert__closures_____invoke__hb0ee7eca1f0c8a3c: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h25bdadf263b4ed23: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h6535168d011a2a23: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h73b0a2f6d230dd9f: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h8eea1753f3e49123: (a: number, b: number) => void;
    readonly __wbindgen_malloc_command_export: (a: number, b: number) => number;
    readonly __wbindgen_realloc_command_export: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store_command_export: (a: number) => void;
    readonly __externref_table_alloc_command_export: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free_command_export: (a: number, b: number, c: number) => void;
    readonly __externref_table_dealloc_command_export: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
