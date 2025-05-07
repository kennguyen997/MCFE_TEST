/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom/client'

export interface ICreateInitial<IRoot = any> {
    _root: IRoot | null;
    mount: (selector: string) => void;
    unmount: () => void;
}

export const CreateInitial = (Component: React.ElementType): ICreateInitial<ReactDOM.Root> => {
    return {
        _root: null,
        mount: function (selector: string) {
            const elementRoot = document.querySelector(selector)
            if (!elementRoot) {
                throw new Error('Root element not found')
            }
            const root = ReactDOM.createRoot(elementRoot)
            root.render(<Component />)
            this._root = root
        },
        unmount: function () {
            this._root?.unmount()
            this._root = null
        }
    }
}
