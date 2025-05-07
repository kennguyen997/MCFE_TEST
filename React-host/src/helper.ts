import { init } from '@module-federation/enhanced/runtime'
import { IMcfeRemoteConfig } from 'mcfe-provider/dist/mcfe.type'
//SET UP MCE
const getConfigFromEnv = (): Parameters<typeof init>[0]['remotes'] => {
  const data = process.env.MCFE_REPO_LIST as IMcfeRemoteConfig | undefined
  if (!data) {
    throw Error('Missing ' + 'MCFE_REPO_LIST')
  }
  return (
    data.repositories?.map((x) => {
      return {
        entry: `${x.remote ?? data.remote}${x.path}`,
        name: x.name
      }
    }) ?? []
  )
}

export const initMcfe = (name?: string) => {
  const instanse = init({
    name: name ?? 'app-main2',
    remotes: getConfigFromEnv()
  })
}
