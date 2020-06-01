module.exports = {
  exclude: [
    '**/node_modules/**/*',
    '**/__tests__/*',
    '**/*.@(spec|test).@(js|mjs)',
    '**/server/**/*',
  ],
  plugins: [['@snowpack/plugin-webpack']],
}
