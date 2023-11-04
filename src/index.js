import { ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ruRU } from '@mui/x-date-pickers/locales'
import 'dayjs/locale/ru'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { injectStore } from './config/axiosInstance'
import './index.css'
import { globalTheme } from './theme/globalTheme'
import { StyledToastContainer } from './utils/helpers/toast'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={injectStore()}>
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
      </Provider>
   </React.StrictMode>
)
