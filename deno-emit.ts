import { bundle } from "jsr:@deno/emit@0.44.0";
import { encodeBase64 } from "jsr:@std/encoding@1.0.3";

const mod = "jsr:@std/assert";

const result = await bundle(mod, { minify: true });

const base64 = encodeBase64(result.code);

await Deno.writeTextFile(
	"./bundle.js",
	"" +
		`// @deno-types="${mod}";` +
		`export * from "data:application/javascript;base64,${base64}";"`,
);
