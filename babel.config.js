const { workspaces = [] } = require('./package.json')

module.exports = function (api) {
  api.cache(false)

  const presets = [
    ['@babel/preset-env', {
      // useBuiltIns: 'usage',
      targets: {
        node: 'current',
      },
    }],
  ]

  return {
    presets,
  }
}
