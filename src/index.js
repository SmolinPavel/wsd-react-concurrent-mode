import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from './styled'
import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <>
    <GlobalStyle />
    <App />
  </>
)
