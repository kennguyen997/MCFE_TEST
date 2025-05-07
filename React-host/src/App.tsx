import React, { FC, useState } from 'react'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import { LoadingComponent } from '../react-mount'
import { initMcfe } from './helper'
initMcfe()
const App: FC = () => {
  const [fullname] = useState('DinoCollab')
  console.log(fullname)
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {/* <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>{fullname}</h1>
      <h2>Webpage {process.env.HOST}</h2> */}
      <LoadingComponent module='LayoutReact@./AppM1' />
    </div>
  )
}

export default App
