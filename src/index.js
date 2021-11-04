import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapTest } from './BootstrapTest'

ReactDOM.render(
  <StrictMode>
    <App />
    <BootstrapTest />
  </StrictMode>,
  document.getElementById('root')
)
