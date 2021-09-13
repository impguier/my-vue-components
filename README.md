# es6编译
npm i rollup-plugin-babel @babel/core @babel/preset-env --D
# 解决cjs包引用
npm i rollup-plugin-commonjs --D.
# 解决post-css
npm i rollup-plugin-postcss postcss --D
# 解决postcss autoprefixer
npm i autoprefixer@8.0.0 --D

# vue2 编译
npm i rollup-plugin-vue@5.1.9 vue-template-compiler --D

# vue3 编译
rollup-plugin-vue^6.0.0 + @vue/compiler-sfc