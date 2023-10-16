import {
   Select,
   styled,
   FormControl,
   InputLabel,
   MenuItem,
} from '@mui/material'

import { React, useState } from 'react'

const selectItems = [
   {
      text: 'Электроника',
      id: '1',
   },
   {
      text: 'Одежда',
      id: '2',
   },
   {
      text: 'Школа',
      id: '3',
   },
   {
      text: 'Дом и сад',
      id: '4',
   },
   {
      text: 'Обувь',
      id: '5',
   },
   {
      text: 'Транспорт',
      id: '6',
   },
]

export const SelectComponent = ({ label = 'Категория' }) => {
   const [state, setState] = useState('iausydtgf')

   const handleChange = (e) => {
      setState(e.target.value)
   }

   return (
      <StyledFormControl fullWidth>
         <InputLabel>{label}</InputLabel>
         <StyledSelect onChange={handleChange} value={state} label={label}>
            {selectItems.map((i) => {
               return (
                  <SelectContainer key={i.id} value={i.text}>
                     {i.text}
                  </SelectContainer>
               )
            })}
         </StyledSelect>
      </StyledFormControl>
   )
}

const StyledFormControl = styled(FormControl)({
   width: '28%',
})

const SelectContainer = styled(MenuItem)({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
   listStyle: 'none',
   alignItems: 'flex-start',
   '& ': {
      fontSize: '0.875rem',
      width: '100%',
      height: '5.5vh',
      padding: '9px 16px',

      ':hover': { backgroundColor: ' rgba(112, 46, 153, 0.4)' },
      ':active': { backgroundColor: '#9b6db7' },
   },
})

const StyledSelect = styled(Select)({
   width: '100%',
})
