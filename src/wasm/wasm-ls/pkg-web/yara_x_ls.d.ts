/* tslint:disable */
/* eslint-disable */

export function checkRule(rule: string): any;

export function runServer(url: string): Promise<void>;

export function runWorkerServer(): void;

export function scanBytes(rule: string, data: Uint8Array): any;

export type InitInput =
  | RequestInfo
  | URL
  | Response
  | BufferSource
  | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly runServer: (a: number, b: number) => any;
  readonly runWorkerServer: () => [number, number];
  readonly checkRule: (a: number, b: number) => any;
  readonly scanBytes: (a: number, b: number, c: any) => any;
  readonly wasm_bindgen__closure__destroy__ha454c353198b8054: (
    a: number,
    b: number,
  ) => void;
  readonly wasm_bindgen__closure__destroy__h8adb3af7ff435f6c: (
    a: number,
    b: number,
  ) => void;
  readonly wasm_bindgen__closure__destroy__h36b6c9a300d0486e: (
    a: number,
    b: number,
  ) => void;
  readonly wasm_bindgen__closure__destroy__h878cb9c37cd44473: (
    a: number,
    b: number,
  ) => void;
  readonly wasm_bindgen__closure__destroy__h65de18f2a4d9e407: (
    a: number,
    b: number,
  ) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hb76a20d55fe78f24: (
    a: number,
    b: number,
    c: any,
    d: any,
    e: any,
    f: any,
  ) => any;
  readonly wasm_bindgen__convert__closures_____invoke__h29722c052e82f826: (
    a: number,
    b: number,
    c: any,
  ) => [number, number];
  readonly wasm_bindgen__convert__closures_____invoke__h3d61d62c94915419: (
    a: number,
    b: number,
    c: any,
    d: any,
  ) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hb8708b899c41cfdc: (
    a: number,
    b: number,
    c: any,
  ) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h98561927e34d4f5e: (
    a: number,
    b: number,
    c: any,
  ) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h06502b1615a59994: (
    a: number,
    b: number,
  ) => number;
  readonly wasm_bindgen__convert__closures_____invoke__hb5d687d37c98ca36: (
    a: number,
    b: number,
  ) => void;
  readonly __wbindgen_malloc_command_export: (a: number, b: number) => number;
  readonly __wbindgen_realloc_command_export: (
    a: number,
    b: number,
    c: number,
    d: number,
  ) => number;
  readonly __wbindgen_exn_store_command_export: (a: number) => void;
  readonly __externref_table_alloc_command_export: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free_command_export: (
    a: number,
    b: number,
    c: number,
  ) => void;
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
export function initSync(
  module: { module: SyncInitInput } | SyncInitInput,
): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init(
  module_or_path?:
    | { module_or_path: InitInput | Promise<InitInput> }
    | InitInput
    | Promise<InitInput>,
): Promise<InitOutput>;
