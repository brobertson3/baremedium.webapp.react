import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../app/App.tsx'
import '../../index.css'
// import * as Styled from './main-style.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Styled.MainDiv> */}
      <App />
    {/* </Styled.MainDiv> */}
  </React.StrictMode>,
)
