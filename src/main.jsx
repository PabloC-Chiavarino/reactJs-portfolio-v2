import React from 'react'
import ReactDOM from 'react-dom/client'
import { LangProvider } from './context/LangContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
    <App />
  </LangProvider>
)
