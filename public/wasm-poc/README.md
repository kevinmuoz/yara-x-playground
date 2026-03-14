Build the WASM package from the repo root:

```sh
wasm-pack build lib --target nodejs --dev --out-dir ../examples/wasm-poc/pkg
```

Run the example:

```sh
node examples/wasm-poc/run.cjs
```

The example includes a tiny Node shim for the `env.wasmtime_tls_get` import
required by the generated WASM package.
