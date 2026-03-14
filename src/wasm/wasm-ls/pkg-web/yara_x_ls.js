/* @ts-self-types="./yara_x_ls.d.ts" */

//#region exports

/**
 * @param {string} rule
 * @returns {any}
 */
export function checkRule(rule) {
  const ptr0 = passStringToWasm0(
    rule,
    wasm.__wbindgen_malloc_command_export,
    wasm.__wbindgen_realloc_command_export,
  );
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.checkRule(ptr0, len0);
  return ret;
}

/**
 * @param {string} url
 * @returns {Promise<void>}
 */
export function runServer(url) {
  const ptr0 = passStringToWasm0(
    url,
    wasm.__wbindgen_malloc_command_export,
    wasm.__wbindgen_realloc_command_export,
  );
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.runServer(ptr0, len0);
  return ret;
}

export function runWorkerServer() {
  const ret = wasm.runWorkerServer();
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}

/**
 * @param {string} rule
 * @param {Uint8Array} data
 * @returns {any}
 */
export function scanBytes(rule, data) {
  const ptr0 = passStringToWasm0(
    rule,
    wasm.__wbindgen_malloc_command_export,
    wasm.__wbindgen_realloc_command_export,
  );
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.scanBytes(ptr0, len0, data);
  return ret;
}

//#endregion

//#region wasm imports

function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg___wbindgen_debug_string_5398f5bb970e0daa: function (arg0, arg1) {
      const ret = debugString(arg1);
      const ptr1 = passStringToWasm0(
        ret,
        wasm.__wbindgen_malloc_command_export,
        wasm.__wbindgen_realloc_command_export,
      );
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_3c846841762788c1: function (arg0) {
      const ret = typeof arg0 === "function";
      _assertBoolean(ret);
      return ret;
    },
    __wbg___wbindgen_is_object_781bc9f159099513: function (arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      _assertBoolean(ret);
      return ret;
    },
    __wbg___wbindgen_is_string_7ef6b97b02428fae: function (arg0) {
      const ret = typeof arg0 === "string";
      _assertBoolean(ret);
      return ret;
    },
    __wbg___wbindgen_is_undefined_52709e72fb9f179c: function (arg0) {
      const ret = arg0 === undefined;
      _assertBoolean(ret);
      return ret;
    },
    __wbg___wbindgen_number_get_34bb9d9dcfa21373: function (arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : undefined;
      if (!isLikeNone(ret)) {
        _assertNum(ret);
      }
      getDataViewMemory0().setFloat64(
        arg0 + 8 * 1,
        isLikeNone(ret) ? 0 : ret,
        true,
      );
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_string_get_395e606bd0ee4427: function (arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : undefined;
      var ptr1 = isLikeNone(ret)
        ? 0
        : passStringToWasm0(
            ret,
            wasm.__wbindgen_malloc_command_export,
            wasm.__wbindgen_realloc_command_export,
          );
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_6ddd609b62940d55: function (arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function () {
      return logError(function (arg0) {
        arg0._wbg_cb_unref();
      }, arguments);
    },
    __wbg_buffer_eb2779983eb67380: function () {
      return logError(function (arg0) {
        const ret = arg0.buffer;
        return ret;
      }, arguments);
    },
    __wbg_call_2d781c1f4d5c0ef8: function () {
      return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.call(arg1, arg2);
        return ret;
      }, arguments);
    },
    __wbg_call_e133b57c9155d22c: function () {
      return handleError(function (arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_close_af26905c832a88cb: function () {
      return handleError(function (arg0) {
        arg0.close();
      }, arguments);
    },
    __wbg_code_aea376e2d265a64f: function () {
      return logError(function (arg0) {
        const ret = arg0.code;
        _assertNum(ret);
        return ret;
      }, arguments);
    },
    __wbg_code_bc4dde4d67926010: function () {
      return logError(function (arg0) {
        const ret = arg0.code;
        _assertNum(ret);
        return ret;
      }, arguments);
    },
    __wbg_createTask_6eb3a8b6dd2f87c9: function () {
      return handleError(function (arg0, arg1) {
        const ret = console.createTask(getStringFromWasm0(arg0, arg1));
        return ret;
      }, arguments);
    },
    __wbg_data_a3d9ff9cdd801002: function () {
      return logError(function (arg0) {
        const ret = arg0.data;
        return ret;
      }, arguments);
    },
    __wbg_error_8d9a8e04cd1d3588: function () {
      return logError(function (arg0) {
        console.error(arg0);
      }, arguments);
    },
    __wbg_error_a6fa202b58aa1cd3: function () {
      return logError(function (arg0, arg1) {
        let deferred0_0;
        let deferred0_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          console.error(getStringFromWasm0(arg0, arg1));
        } finally {
          wasm.__wbindgen_free_command_export(deferred0_0, deferred0_1, 1);
        }
      }, arguments);
    },
    __wbg_exports_166644897be74f9d: function () {
      return logError(function (arg0) {
        const ret = arg0.exports;
        return ret;
      }, arguments);
    },
    __wbg_get_3ef1eba1850ade27: function () {
      return handleError(function (arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6: function () {
      return logError(function (arg0) {
        let result;
        try {
          result = arg0 instanceof ArrayBuffer;
        } catch (_) {
          result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
      }, arguments);
    },
    __wbg_instanceof_Blob_c91af000f11c2d0b: function () {
      return logError(function (arg0) {
        let result;
        try {
          result = arg0 instanceof Blob;
        } catch (_) {
          result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
      }, arguments);
    },
    __wbg_instanceof_DedicatedWorkerGlobalScope_c50082d7f5e65939: function () {
      return logError(function (arg0) {
        let result;
        try {
          result = arg0 instanceof DedicatedWorkerGlobalScope;
        } catch (_) {
          result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
      }, arguments);
    },
    __wbg_length_ea16607d7b61445b: function () {
      return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
      }, arguments);
    },
    __wbg_log_524eedafa26daa59: function () {
      return logError(function (arg0) {
        console.log(arg0);
      }, arguments);
    },
    __wbg_message_e959edc81e4b6cb7: function () {
      return logError(function (arg0, arg1) {
        const ret = arg1.message;
        const ptr1 = passStringToWasm0(
          ret,
          wasm.__wbindgen_malloc_command_export,
          wasm.__wbindgen_realloc_command_export,
        );
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
      }, arguments);
    },
    __wbg_new_227d7c05414eb861: function () {
      return logError(function () {
        const ret = new Error();
        return ret;
      }, arguments);
    },
    __wbg_new_3037462ecfc6d374: function () {
      return handleError(function (arg0) {
        const ret = new WebAssembly.Memory(arg0);
        return ret;
      }, arguments);
    },
    __wbg_new_592b75079b91788e: function () {
      return handleError(function (arg0, arg1) {
        const ret = new WebAssembly.Instance(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_new_5f486cdf45a04d78: function () {
      return logError(function (arg0) {
        const ret = new Uint8Array(arg0);
        return ret;
      }, arguments);
    },
    __wbg_new_a70fbab9066b301f: function () {
      return logError(function () {
        const ret = new Array();
        return ret;
      }, arguments);
    },
    __wbg_new_a9fd9e2ed6d139ae: function () {
      return handleError(function (arg0) {
        const ret = new WebAssembly.Module(arg0);
        return ret;
      }, arguments);
    },
    __wbg_new_ab79df5bd7c26067: function () {
      return logError(function () {
        const ret = new Object();
        return ret;
      }, arguments);
    },
    __wbg_new_dd50bcc3f60ba434: function () {
      return handleError(function (arg0, arg1) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return ret;
      }, arguments);
    },
    __wbg_new_ef839761349d3511: function () {
      return handleError(function (arg0, arg1) {
        const ret = new WebAssembly.Global(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_new_from_slice_22da9388ac046e50: function () {
      return logError(function (arg0, arg1) {
        const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
        return ret;
      }, arguments);
    },
    __wbg_new_typed_aaaeaf29cf802876: function () {
      return logError(function (arg0, arg1) {
        try {
          var state0 = { a: arg0, b: arg1 };
          var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
              return wasm_bindgen__convert__closures_____invoke__h3d61d62c94915419(
                a,
                state0.b,
                arg0,
                arg1,
              );
            } finally {
              state0.a = a;
            }
          };
          const ret = new Promise(cb0);
          return ret;
        } finally {
          state0.a = state0.b = 0;
        }
      }, arguments);
    },
    __wbg_new_with_str_sequence_82c04ad794ead10e: function () {
      return handleError(function (arg0, arg1, arg2) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1), arg2);
        return ret;
      }, arguments);
    },
    __wbg_parse_e9eddd2a82c706eb: function () {
      return handleError(function (arg0, arg1) {
        const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
        return ret;
      }, arguments);
    },
    __wbg_postMessage_564f0071531c08c3: function () {
      return handleError(function (arg0, arg1) {
        arg0.postMessage(arg1);
      }, arguments);
    },
    __wbg_prototypesetcall_d62e5099504357e6: function () {
      return logError(function (arg0, arg1, arg2) {
        Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
      }, arguments);
    },
    __wbg_push_e87b0e732085a946: function () {
      return logError(function (arg0, arg1) {
        const ret = arg0.push(arg1);
        _assertNum(ret);
        return ret;
      }, arguments);
    },
    __wbg_queueMicrotask_0c399741342fb10f: function () {
      return logError(function (arg0) {
        const ret = arg0.queueMicrotask;
        return ret;
      }, arguments);
    },
    __wbg_queueMicrotask_a082d78ce798393e: function () {
      return logError(function (arg0) {
        queueMicrotask(arg0);
      }, arguments);
    },
    __wbg_readyState_1f1e7f1bdf9f4d42: function () {
      return logError(function (arg0) {
        const ret = arg0.readyState;
        _assertNum(ret);
        return ret;
      }, arguments);
    },
    __wbg_reason_cbcb9911796c4714: function () {
      return logError(function (arg0, arg1) {
        const ret = arg1.reason;
        const ptr1 = passStringToWasm0(
          ret,
          wasm.__wbindgen_malloc_command_export,
          wasm.__wbindgen_realloc_command_export,
        );
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
      }, arguments);
    },
    __wbg_resolve_ae8d83246e5bcc12: function () {
      return logError(function (arg0) {
        const ret = Promise.resolve(arg0);
        return ret;
      }, arguments);
    },
    __wbg_run_78b7b601add6ed6b: function () {
      return logError(function (arg0, arg1, arg2) {
        try {
          var state0 = { a: arg1, b: arg2 };
          var cb0 = () => {
            const a = state0.a;
            state0.a = 0;
            try {
              return wasm_bindgen__convert__closures_____invoke__h06502b1615a59994(
                a,
                state0.b,
              );
            } finally {
              state0.a = a;
            }
          };
          const ret = arg0.run(cb0);
          _assertBoolean(ret);
          return ret;
        } finally {
          state0.a = state0.b = 0;
        }
      }, arguments);
    },
    __wbg_send_4a1dc66e8653e5ed: function () {
      return handleError(function (arg0, arg1, arg2) {
        arg0.send(getStringFromWasm0(arg1, arg2));
      }, arguments);
    },
    __wbg_send_d31a693c975dea74: function () {
      return handleError(function (arg0, arg1, arg2) {
        arg0.send(getArrayU8FromWasm0(arg1, arg2));
      }, arguments);
    },
    __wbg_set_7eaa4f96924fd6b3: function () {
      return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(arg0, arg1, arg2);
        _assertBoolean(ret);
        return ret;
      }, arguments);
    },
    __wbg_set_8c0b3ffcf05d61c2: function () {
      return logError(function (arg0, arg1, arg2) {
        arg0.set(getArrayU8FromWasm0(arg1, arg2));
      }, arguments);
    },
    __wbg_set_binaryType_3dcf8281ec100a8f: function () {
      return logError(function (arg0, arg1) {
        arg0.binaryType = __wbindgen_enum_BinaryType[arg1];
      }, arguments);
    },
    __wbg_set_onclose_8da801226bdd7a7b: function () {
      return logError(function (arg0, arg1) {
        arg0.onclose = arg1;
      }, arguments);
    },
    __wbg_set_onerror_901ca711f94a5bbb: function () {
      return logError(function (arg0, arg1) {
        arg0.onerror = arg1;
      }, arguments);
    },
    __wbg_set_onmessage_6f80ab771bf151aa: function () {
      return logError(function (arg0, arg1) {
        arg0.onmessage = arg1;
      }, arguments);
    },
    __wbg_set_onmessage_c6a8f2ed351cae71: function () {
      return logError(function (arg0, arg1) {
        arg0.onmessage = arg1;
      }, arguments);
    },
    __wbg_set_onopen_34e3e24cf9337ddd: function () {
      return logError(function (arg0, arg1) {
        arg0.onopen = arg1;
      }, arguments);
    },
    __wbg_set_value_fabda3a3824b28a2: function () {
      return logError(function (arg0, arg1) {
        arg0.value = arg1;
      }, arguments);
    },
    __wbg_stack_3b0d974bbf31e44f: function () {
      return logError(function (arg0, arg1) {
        const ret = arg1.stack;
        const ptr1 = passStringToWasm0(
          ret,
          wasm.__wbindgen_malloc_command_export,
          wasm.__wbindgen_realloc_command_export,
        );
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
      }, arguments);
    },
    __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function () {
      return logError(function () {
        const ret = typeof global === "undefined" ? null : global;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function () {
      return logError(function () {
        const ret = typeof globalThis === "undefined" ? null : globalThis;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_static_accessor_SELF_f207c857566db248: function () {
      return logError(function () {
        const ret = typeof self === "undefined" ? null : self;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function () {
      return logError(function () {
        const ret = typeof window === "undefined" ? null : window;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_stringify_5ae93966a84901ac: function () {
      return handleError(function (arg0) {
        const ret = JSON.stringify(arg0);
        return ret;
      }, arguments);
    },
    __wbg_then_098abe61755d12f6: function () {
      return logError(function (arg0, arg1) {
        const ret = arg0.then(arg1);
        return ret;
      }, arguments);
    },
    __wbg_toString_68d455d069f7169a: function () {
      return handleError(function (arg0, arg1) {
        const ret = arg0.toString(arg1);
        return ret;
      }, arguments);
    },
    __wbg_url_778f9516ea867e17: function () {
      return logError(function (arg0, arg1) {
        const ret = arg1.url;
        const ptr1 = passStringToWasm0(
          ret,
          wasm.__wbindgen_malloc_command_export,
          wasm.__wbindgen_realloc_command_export,
        );
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
      }, arguments);
    },
    __wbg_value_7c92df4e7e321006: function () {
      return logError(function (arg0) {
        const ret = arg0.value;
        return ret;
      }, arguments);
    },
    __wbg_wasClean_69f68dc4ed2d2cc7: function () {
      return logError(function (arg0) {
        const ret = arg0.wasClean;
        _assertBoolean(ret);
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000001: function () {
      return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 1014, function: Function { arguments: [Externref], shim_idx: 11869, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(
          arg0,
          arg1,
          wasm.wasm_bindgen__closure__destroy__ha454c353198b8054,
          wasm_bindgen__convert__closures_____invoke__h29722c052e82f826,
        );
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000002: function () {
      return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 5048, function: Function { arguments: [Externref, Externref, Externref, Externref], shim_idx: 5049, ret: Externref, inner_ret: Some(Externref) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(
          arg0,
          arg1,
          wasm.wasm_bindgen__closure__destroy__h8adb3af7ff435f6c,
          wasm_bindgen__convert__closures_____invoke__hb76a20d55fe78f24,
        );
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000003: function () {
      return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 897, function: Function { arguments: [], shim_idx: 419, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(
          arg0,
          arg1,
          wasm.wasm_bindgen__closure__destroy__h36b6c9a300d0486e,
          wasm_bindgen__convert__closures_____invoke__hb5d687d37c98ca36,
        );
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000004: function () {
      return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 898, function: Function { arguments: [NamedExternref("CloseEvent")], shim_idx: 420, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(
          arg0,
          arg1,
          wasm.wasm_bindgen__closure__destroy__h878cb9c37cd44473,
          wasm_bindgen__convert__closures_____invoke__hb8708b899c41cfdc,
        );
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000005: function () {
      return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 972, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 973, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(
          arg0,
          arg1,
          wasm.wasm_bindgen__closure__destroy__h65de18f2a4d9e407,
          wasm_bindgen__convert__closures_____invoke__h98561927e34d4f5e,
        );
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000006: function () {
      return logError(function (arg0) {
        // Cast intrinsic for `F64 -> Externref`.
        const ret = arg0;
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000007: function () {
      return logError(function (arg0) {
        // Cast intrinsic for `I64 -> Externref`.
        const ret = arg0;
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000008: function () {
      return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(String) -> Externref`.
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbindgen_init_externref_table: function () {
      const table = wasm.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, undefined);
      table.set(offset + 0, undefined);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    },
  };
  return {
    __proto__: null,
    "./yara_x_ls_bg.js": import0,
  };
}

//#endregion
function wasm_bindgen__convert__closures_____invoke__hb5d687d37c98ca36(
  arg0,
  arg1,
) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.wasm_bindgen__convert__closures_____invoke__hb5d687d37c98ca36(
    arg0,
    arg1,
  );
}

function wasm_bindgen__convert__closures_____invoke__h06502b1615a59994(
  arg0,
  arg1,
) {
  _assertNum(arg0);
  _assertNum(arg1);
  const ret =
    wasm.wasm_bindgen__convert__closures_____invoke__h06502b1615a59994(
      arg0,
      arg1,
    );
  return ret !== 0;
}

function wasm_bindgen__convert__closures_____invoke__hb8708b899c41cfdc(
  arg0,
  arg1,
  arg2,
) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.wasm_bindgen__convert__closures_____invoke__hb8708b899c41cfdc(
    arg0,
    arg1,
    arg2,
  );
}

function wasm_bindgen__convert__closures_____invoke__h98561927e34d4f5e(
  arg0,
  arg1,
  arg2,
) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.wasm_bindgen__convert__closures_____invoke__h98561927e34d4f5e(
    arg0,
    arg1,
    arg2,
  );
}

function wasm_bindgen__convert__closures_____invoke__h29722c052e82f826(
  arg0,
  arg1,
  arg2,
) {
  _assertNum(arg0);
  _assertNum(arg1);
  const ret =
    wasm.wasm_bindgen__convert__closures_____invoke__h29722c052e82f826(
      arg0,
      arg1,
      arg2,
    );
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}

function wasm_bindgen__convert__closures_____invoke__h3d61d62c94915419(
  arg0,
  arg1,
  arg2,
  arg3,
) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.wasm_bindgen__convert__closures_____invoke__h3d61d62c94915419(
    arg0,
    arg1,
    arg2,
    arg3,
  );
}

function wasm_bindgen__convert__closures_____invoke__hb76a20d55fe78f24(
  arg0,
  arg1,
  arg2,
  arg3,
  arg4,
  arg5,
) {
  _assertNum(arg0);
  _assertNum(arg1);
  const ret =
    wasm.wasm_bindgen__convert__closures_____invoke__hb76a20d55fe78f24(
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
    );
  return ret;
}

const __wbindgen_enum_BinaryType = ["blob", "arraybuffer"];

//#region intrinsics
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc_command_export();
  wasm.__wbindgen_externrefs.set(idx, obj);
  return idx;
}

function _assertBoolean(n) {
  if (typeof n !== "boolean") {
    throw new Error(`expected a boolean argument, found ${typeof n}`);
  }
}

function _assertNum(n) {
  if (typeof n !== "number")
    throw new Error(`expected a number argument, found ${typeof n}`);
}

const CLOSURE_DTORS =
  typeof FinalizationRegistry === "undefined"
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((state) => state.dtor(state.a, state.b));

function debugString(val) {
  // primitive types
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  // objects
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  // Test for built-in
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }
  if (className == "Object") {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  // errors
  if (val instanceof Error) {
    return `${val.name}: ${val.message}\n${val.stack}`;
  }
  // TODO we could test for more things here, like `Set`s and `Map`s.
  return className;
}

function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (
    cachedDataViewMemory0 === null ||
    cachedDataViewMemory0.buffer.detached === true ||
    (cachedDataViewMemory0.buffer.detached === undefined &&
      cachedDataViewMemory0.buffer !== wasm.memory.buffer)
  ) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (
    cachedUint8ArrayMemory0 === null ||
    cachedUint8ArrayMemory0.byteLength === 0
  ) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store_command_export(idx);
  }
}

function isLikeNone(x) {
  return x === undefined || x === null;
}

function logError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    let error = (function () {
      try {
        return e instanceof Error
          ? `${e.message}\n\nStack:\n${e.stack}`
          : e.toString();
      } catch (_) {
        return "<failed to stringify thrown value>";
      }
    })();
    console.error(
      "wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",
      error,
    );
    throw e;
  }
}

function makeMutClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      state.a = a;
      real._wbg_cb_unref();
    }
  };
  real._wbg_cb_unref = () => {
    if (--state.cnt === 0) {
      state.dtor(state.a, state.b);
      state.a = 0;
      CLOSURE_DTORS.unregister(state);
    }
  };
  CLOSURE_DTORS.register(real, state, state);
  return real;
}

function passStringToWasm0(arg, malloc, realloc) {
  if (typeof arg !== "string")
    throw new Error(`expected a string argument, found ${typeof arg}`);
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0()
      .subarray(ptr, ptr + buf.length)
      .set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;

  const mem = getUint8ArrayMemory0();

  let offset = 0;

  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7f) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, (len = offset + arg.length * 3), 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder.encodeInto(arg, view);
    if (ret.read !== arg.length) throw new Error("failed to pass whole string");
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_externrefs.get(idx);
  wasm.__externref_table_dealloc_command_export(idx);
  return value;
}

let cachedTextDecoder = new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true,
});
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true,
    });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(
    getUint8ArrayMemory0().subarray(ptr, ptr + len),
  );
}

const cachedTextEncoder = new TextEncoder();

if (!("encodeInto" in cachedTextEncoder)) {
  cachedTextEncoder.encodeInto = function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length,
    };
  };
}

let WASM_VECTOR_LEN = 0;

//#endregion

//#region wasm loading
let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  wasmModule = module;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}

async function __wbg_load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = module.ok && expectedResponseType(module.type);

        if (
          validResponse &&
          module.headers.get("Content-Type") !== "application/wasm"
        ) {
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e,
          );
        } else {
          throw e;
        }
      }
    }

    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);

    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }

  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}

function initSync(module) {
  if (wasm !== undefined) return wasm;

  if (module !== undefined) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({ module } = module);
    } else {
      console.warn(
        "using deprecated parameters for `initSync()`; pass a single object instead",
      );
    }
  }

  const imports = __wbg_get_imports();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
  if (wasm !== undefined) return wasm;

  if (module_or_path !== undefined) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn(
        "using deprecated parameters for the initialization function; pass a single object instead",
      );
    }
  }

  if (module_or_path === undefined) {
    module_or_path = new URL("yara_x_ls_bg.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports();

  if (
    typeof module_or_path === "string" ||
    (typeof Request === "function" && module_or_path instanceof Request) ||
    (typeof URL === "function" && module_or_path instanceof URL)
  ) {
    module_or_path = fetch(module_or_path);
  }

  const { instance, module } = await __wbg_load(await module_or_path, imports);

  return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
//#endregion
export { wasm as __wasm };
