import React, { FC, useState } from 'react'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import { CreateInitialAutoReact } from 'mcfe-react-lib'
export const App: FC = () => {
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
      <img src={'./assets/images/react.svg'} alt='React Logo' width={100} height={100} />
      <h1>{fullname}</h1>
      <h2>Webpage - 123 {process.env.HOST}</h2>
    </div>
  )
}
//SET UP MCE
// export default App
//bọc lại tránh lỗi version react
export default CreateInitialAutoReact(App)
