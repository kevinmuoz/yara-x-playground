/* tslint:disable */
/* eslint-disable */

export function checkRule(rule: string): any;

export function scanBytes(rule: string, data: Uint8Array): any;

export type InitInput =
  | RequestInfo
  | URL
  | Response
  | BufferSource
  | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly checkRule: (a: number, b: number) => any;
  readonly scanBytes: (a: number, b: number, c: any) => any;
  readonly wasm_bindgen__closure__destroy__he3c1c74c353674ac: (
    a: number,
    b: number,
  ) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h0b60edcc2fe58601: (
    a: number,
    b: number,
    c: any,
    d: any,
    e: any,
    f: any,
  ) => any;
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
