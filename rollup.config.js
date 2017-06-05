import uglify from 'rollup-plugin-uglify'; /* https://github.com/TrySound/rollup-plugin-uglify */
import { minify } from 'uglify-es';

export default { 
    entry: './src/core/App.js', 
    dest: './dist/js/lw-v2.js', 
    format: 'umd',
    moduleName: 'LW',
    sourceMap: 'inline',
    plugins: [
        uglify({}, minify)
    ]
};