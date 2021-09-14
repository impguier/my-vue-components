import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import postcssImport from 'postcss-import'

import less from '@yinxulai/rollup-plugin-less';
import lessParse from 'postcss-less'
import style from 'rollup-plugin-styles'

export default {
    input: './src/index.js',
    output: [{
            file: './dist/easy-beautiful-umd.js',
            format: 'umd',
            name: 'easyBeautiful'
        }, {
            file: './dist/easy-beautiful-es.js',
            format: 'es',
            name: 'easyBeautiful'
        }, {
            file: './dist/easy-beautiful-cjs.js',
            format: 'cjs',
            name: 'easyBeautiful'
        }

    ],
    plugins: [
        resolve(),
        // less(),
        babel({
            exclude: 'node_modules/**'
        }),
        vue(),
        commonjs(),
        postcss({
            extract: true,
            // parser: lessParse,
            extensions: ['.css', '.less'],
            plugins: [
                postcssImport(),
                autoprefixer(),
                // cssnano()
            ]
        })
    ]
}