import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import style from 'rollup-plugin-styles'
import autoprefixer from 'autoprefixer'
import lessParse from 'postcss-less'
import vue from 'rollup-plugin-vue'
export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/easy-beautiful-umd.js',
            format: 'umd',
            name: 'easyBeautiful'
        },{
            file: './dist/easy-beautiful-es.js',
            format: 'es',
            name: 'easyBeautiful'
        },{
            file: './dist/easy-beautiful-cjs.js',
            format: 'cjs',
            name: 'easyBeautiful'
        }

    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        vue(),
        commonjs(),
        postcss({
            extract: true,
            // parser: lessParse,
            extensions:['.css','.less'],
            plugins: [                
                autoprefixer(),
                // cssnano()
            ]
        })
    ]
}