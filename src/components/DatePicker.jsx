import { FormControl, FormLabel, styled } from '@mui/material'
import { DatePicker as MUIDatePicker, PickersLayout } from '@mui/x-date-pickers'
import React from 'react'
import { useController } from 'react-hook-form'
import { DatePickerIcon } from '../assets'

const StyledPickersLayout = styled(PickersLayout)({
   '.MuiPickersCalendarHeader-root': {
      margin: '0',
      padding: '25px 20px',
      color: 'rgba(0, 0, 0, 0.60)',
   },
   '.MuiPickersCalendarHeader-labelContainer': {
      order: '1',
      margin: '0',
      position: 'absolute',
      right: '100px',
   },
   '.MuiPickersCalendarHeader-switchViewButton': {
      display: 'none',
   },
   '.css-xb7uwb-MuiPickersArrowSwitcher-spacer': {
      width: '220px',
   },
   textTransform: 'capitalize',
})

const StyledDatePicker = styled(MUIDatePicker)({
   input: {
      padding: '9.3px',
      borderRadius: '0.375rem',
   },
   '.css-7sakbj-MuiFormHelperText-root.Mui-error': {
      textAlign: 'right',
      marginRight: '5px',
   },
})

export const DatePicker = ({
   label,
   placeholder,
   onError,
   errorMessage,
   isBirthdate = false,
   name,
   control,
   ref,
}) => {
   const { field } = useController({ control, name, defaultValue: null })
   return (
      <FormControl>
         <FormLabel error={Boolean(errorMessage)}>{label}</FormLabel>
         <StyledDatePicker
            ref={ref}
            onChange={field.onChange}
            value={field.value}
            slots={{
               openPickerIcon: DatePickerIcon,
               layout: StyledPickersLayout,
            }}
            onError={onError}
            slotProps={{
               textField: {
                  placeholder,
                  helperText: errorMessage,
               },
            }}
            disableFuture={isBirthdate}
            dayOfWeekFormatter={(_day, date) => date.format('dd')}
         />
      </FormControl>
   )
}
