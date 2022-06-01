const autoprefixer = require('autoprefixer');
const postcssPxtorem = require('postcss-pxtorem');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssNesting = require('postcss-nested');
const partialImport = require('postcss-import')
const apply = require('postcss-apply');
const colorFunction = require('postcss-color-function')
const inlineSVG = require('postcss-inline-svg');

module.exports = (ctx) => ({
  context: 'dist',
  map: process.env.NODE_ENV === 'production' ? false : 'inline',
  plugins: [
    partialImport(),
    autoprefixer({
      grid: true
    }),
    postcssPxtorem({
      propList: ['*', '!border*'],
      mediaQuery: false
    }),
    require('postcss-media-variables')({
      
    }),
    postcssCustomProperties({
      preserve: true,
      importFrom: './src/theme.css'
    }),    
    require('postcss-media-variables')({
      
    }),
    apply(),
    postcssNesting({

    }),
    colorFunction(),
    inlineSVG()
  ]
});