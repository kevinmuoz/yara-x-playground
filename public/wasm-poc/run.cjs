const { checkRule, scanBytes } = require("./pkg/yara_x.js");

const rule = `
rule contains_foo {
  strings:
    $a = "foo"
  condition:
    $a
}
`;

function main() {
  const check = checkRule(rule);
  console.log("checkRule:");
  console.log(JSON.stringify(check, null, 2));

  const hit = scanBytes(rule, new Uint8Array(Buffer.from("xxfooyy")));
  console.log("scanBytes hit:");
  console.log(JSON.stringify(hit, null, 2));

  const miss = scanBytes(rule, new Uint8Array(Buffer.from("bar")));
  console.log("scanBytes miss:");
  console.log(JSON.stringify(miss, null, 2));
}

main();
