import React, { FC, useState } from 'react'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import { AppM1, AppM2 } from './js-modules/mfe-component'

const App: FC = () => {
  const [fullname] = useState('DinoCollab')
  console.log(fullname)
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <AppM1 />
      <AppM2 />
    </div>
  )
}

export default App
