import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen bg-zinc-800 text-zinc-300 border-0 py-5 px-10">
      <App />
    </div>
  </React.StrictMode>
)
