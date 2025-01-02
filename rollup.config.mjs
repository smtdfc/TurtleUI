import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

export default {
  input: "./src/turtleui.js",
  output: [
    {
      file: './dist/turtleui.min.cjs',
      format: 'cjs',
    },
    {
      file: './dist/turtleui.min.js',
      format: 'umd',
      name: "TurtleUI",
    },
    {
      file: './dist/turtleui.min.mjs',
      format: 'esm',
    },
    {
      file: './dist/turtleui.min.ejs',
      format: 'es',
    },
  ],
  plugins: [
    postcss({
      extensions: ['.css', '.less'],
      plugins: [postcssImport()],
      extract: 'turtleui.min.css',
      minimize: true, 
    }),
    terser(),
  ],
};