module.exports = function SvgSpriteInject() {
  this.nuxt.hook('render:route', (url, result, context) => {
    if (context.res) {
      result.html = result.html.replace(
        '<!-- svg-sprite -->',
        context.res.__SVG_SPRITE__
      )
    }
  })
}
