import { ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ruRU } from '@mui/x-date-pickers/locales'
// import 'moment/locale/ru'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { globalTheme } from './theme/globalTheme'
import { StyledToastContainer } from './utils/helpers/toast'
import 'dayjs/locale/ru'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={globalTheme}>
            <LocalizationProvider
               dateAdapter={AdapterDayjs}
               localeText={
                  ruRU.components.MuiLocalizationProvider.defaultProps
                     .localeText
               }
               adapterLocale="ru"
            >
               <App />
               <StyledToastContainer />
            </LocalizationProvider>
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>
)
