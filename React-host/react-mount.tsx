import { loadRemote } from '@module-federation/enhanced/runtime'
import React, { FC, Suspense, useEffect, useRef } from 'react'
export interface ICreateInitial<IRoot = any> {
  _root: IRoot | null
  mount: (Selectot: string) => void
  unmount: () => void
}
function generateUID() {
  return 'uid-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 5)
}
export const MountComponent = (props: { initial: ICreateInitial }) => {
  const { initial } = props
  const id = useRef(generateUID())
  useEffect(() => {
    initial.mount('#' + id.current)
    return () => {
      initial.unmount()
    }
  }, [initial])
  return <div id={id.current} />
}
export const CreateMountComponent = (initial: ICreateInitial) => {
  const Component = (props: any) => {
    return <MountComponent {...props} initial={initial} />
  }
  return Component
}
interface ILoadingComponentProps {
  module: string
}

const getModule = function <TModule = any>(module: string): Promise<TModule | undefined> {
  console.log(module)

  return new Promise((res, rej) =>
    loadRemote(module)
      .then((m: any) => {
        res(m)
      })
      .catch(rej)
  )
}
export const LoadingComponent: FC<ILoadingComponentProps> = (props) => {
  const temps = props.module.split('@')
  const Comp =
    React.lazy(() =>
      getModule(temps[1].replace('.', temps[0])).then((x) => {
        return { default: CreateMountComponent(x.default) }
      })
    ) ?? (() => <></>)

  return (
    <Suspense fallback={<>Loading...</>}>
      <Comp key={props.module} />
    </Suspense>
  )
}
