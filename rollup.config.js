import uglify from 'rollup-plugin-uglify'; /* https://github.com/TrySound/rollup-plugin-uglify */
import { minify } from 'uglify-es';
import scss from 'rollup-plugin-scss'; /* https://github.com/thgh/rollup-plugin-scss */

export default { 
    entry: './src/core/App.js', 
    dest: './dist/js/customElement.js', 
    format: 'umd',
    moduleName: 'U4bi',
    sourceMap: 'inline',
    plugins: [
        uglify({}, minify),
        scss({ output: './dist/css/customElement.css' })
    ]
};