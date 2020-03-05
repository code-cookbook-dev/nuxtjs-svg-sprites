const svgSprite = require('@/assets/svg-sprites.svg')

export default (context) => {
  if (process.server) {
    context.res.__SVG_SPRITE__ = svgSprite
  }
}
