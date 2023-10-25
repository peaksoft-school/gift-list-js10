import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FormControl, FormLabel } from '@mui/material'

export const DateInput = ({ label, onChange, value, placeholder }) => {
   return (
      <FormControl>
         <FormLabel>{label}</FormLabel>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               onChange={onChange}
               value={value}
               placeholder={placeholder}
            />
         </LocalizationProvider>
      </FormControl>
   )
}
