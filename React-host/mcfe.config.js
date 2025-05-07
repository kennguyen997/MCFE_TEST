const { IMcfeConfig } = require('mcfe-provider/dist/mcfe.type')
/** @type {()=>IMcfeConfig} */
module.exports = () => {
  return {
    remotes: {
      remote: 'http://localhost:3001',
      remoteConfigUrl: 'http://van.local:8001/api/projects/generate-remote-config/5'
      // repositories: [{ name: 'LayoutReact', path: 'remoteEntry.js' }]
    }
  }
}
