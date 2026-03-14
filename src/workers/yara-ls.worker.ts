import initYaraLs, {
  runWorkerServer,
} from "../wasm/wasm-ls/pkg-web/yara_x_ls.js";

async function main() {
  await initYaraLs();
  runWorkerServer();
  self.postMessage({ type: "yara-x-ls-ready" });
}

void main().catch((error) => {
  console.error("failed to start yara-x-ls worker", error);
});
