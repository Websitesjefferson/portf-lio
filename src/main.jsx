import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from './routes'
import GlobalStyles  from "./styles/Global"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <Router />
    </React.StrictMode>
)
