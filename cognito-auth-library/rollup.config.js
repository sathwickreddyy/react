import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
        }
    ],
    plugins: [typescript()],
    external: ['react', 'react-dom', '@aws-amplify/auth']
};
