import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { globalTheme } from './theme/globalTheme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ThemeProvider theme={globalTheme}>
         <App />
      </ThemeProvider>
   </React.StrictMode>
)
