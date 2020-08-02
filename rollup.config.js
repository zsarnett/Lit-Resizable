import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

export default [
  {
    input: "src/lit-resizable.ts",
    output: {
      file: "dist/lit-resizable.js",
      format: "esm",
      sourcemap: "inline",
    },
    plugins: [
      nodeResolve({
        extensions: [".js", ".ts"],
      }),
      typescript(),
      terser({
        warnings: true,
        ecma: 2017,
        compress: {
          unsafe: true,
        },
        output: {
          comments: false,
        },
      }),
      filesize({
        showBrotliSize: true,
      }),
    ],
  },
  {
    input: "src/lit-resizable-wrapper.ts",
    output: {
      file: "dist/lit-resizable-wrapper.js",
      format: "esm",
    },
    plugins: [
      nodeResolve({
        extensions: [".js", ".ts"],
      }),
      typescript(),
      terser({
        warnings: true,
        ecma: 2017,
        compress: {
          unsafe: true,
        },
        output: {
          comments: false,
        },
      }),
      filesize({
        showBrotliSize: true,
      }),
    ],
  },
];
