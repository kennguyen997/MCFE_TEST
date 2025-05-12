const { IMcfeConfig } = require('mcfe-provider/dist/mcfe.type')
/** @type {()=>IMcfeConfig} */
module.exports = () => {
  return {
    expose: {
      name: 'LayoutReact',
      exposes: {
        './AppM1': './src/App',
        './AppM2': './src/App2'
      }
    }
  }
}
