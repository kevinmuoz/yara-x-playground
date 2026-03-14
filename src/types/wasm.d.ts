declare module "../../public/wasm-poc/pkg-web/yara_x.js" {
    const init: (...args: any[]) => Promise<any>;
    export default init;
    export const checkRule: (rule: string) => any;
    export const scanBytes: (rule: string, data: Uint8Array) => any;
}

declare module "../../public/wasm-ls/pkg-web/yara_x_ls.js" {
    const init: (...args: any[]) => Promise<any>;
    export default init;
    export const runWorkerServer: () => any;
}