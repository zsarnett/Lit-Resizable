import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/lit-resizable.ts",
    output: {
      file: "dist/lit-resizable.js",
      format: "es",
      sourcemap: "inline",
    },
    plugins: [
      typescript(),
      nodeResolve({
        extensions: [".js", ".ts"],
        preferBuiltins: false,
        browser: true,
      }),
      terser(),
    ],
  },
  {
    input: "src/lit-resizable-wrapper.ts",
    output: {
      file: "dist/lit-resizable-wrapper.js",
      format: "es",
    },
    plugins: [
      typescript(),
      nodeResolve({
        extensions: [".js", ".ts"],
        preferBuiltins: false,
        browser: true,
      }),
      terser(),
    ],
  },
];
