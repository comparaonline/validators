import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/validators.js',
  format: 'umd',
  moduleName: 'Validators',
  dest: 'dist/validators.min.js',
  sourceMap: true,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    uglify()
  ]
};
