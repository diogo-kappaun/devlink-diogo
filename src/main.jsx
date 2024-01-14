import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex h-screen items-center justify-center bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <App />
    </div>
  </React.StrictMode>,
)
