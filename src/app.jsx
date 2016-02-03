import React from 'react'
import ReactDom from 'react-dom'

import {registerHttpProvider} from './HttpProviders/HttpProvider'
import clientProvider from './HttpProviders/client'

registerHttpProvider(clientProvider)

import App from './Components/App.jsx'

ReactDom.render((
  <App />
),
  document.getElementById('todo-app')
)
