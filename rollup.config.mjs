// rollup.config.mjs
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'components/index.ts',
  output: {
    file: 'dist/umd/pay-sdk-react.umd.js',
    format: 'umd',
    name: 'PaySDK',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs(),
    typescript({ tsconfig: './build-config/tsconfig.umd.json' }),
    // 不加任何 css/less 处理插件
  ],
  external: (id) => /\.less$/.test(id) || ['react', 'react-dom'].includes(id),
};
