import { Select, styled, FormControl, MenuItem, FormLabel } from '@mui/material'
import { useController } from 'react-hook-form'
import React from 'react'
import { Button } from './Button'

export const SelectComponent = ({
   label,
   data,
   isButton,
   placeholder,
   onClick,
   name,
   control,
}) => {
   const {
      field: { onChange, value },
   } = useController({
      control,
      name,
      defaultValue: '',
   })
   return (
      <FormControl fullWidth>
         <FormLabel>{label}</FormLabel>
         <StyledSelect
            labelId="demo-simple-select-label"
            onChange={onChange}
            label={label}
            displayEmpty
            name={name}
            value={value}
            renderValue={(selected) => {
               return selected.length === 0 ? (
                  <StyledPlaceholder>{placeholder}</StyledPlaceholder>
               ) : (
                  selected
               )
            }}
         >
            {data.map((i) => {
               return (
                  <SelectContainer key={i.id} value={i.text}>
                     {i.text}
                  </SelectContainer>
               )
            })}
            {isButton ? (
               <StyledBtn onClick={onClick}>+ Создать новый праздник</StyledBtn>
            ) : null}
         </StyledSelect>
      </FormControl>
   )
}

const SelectContainer = styled(MenuItem)({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
   listStyle: 'none',
   alignItems: 'flex-start',
   fontSize: '0.875rem',
   padding: '9px 16px',
   ':hover': { backgroundColor: ' rgba(112, 46, 153, 0.4)' },
   ':active': { backgroundColor: '#9b6db7' },
})

const StyledSelect = styled(Select)({
   width: '100%',
   height: '5.6vh',
})

const StyledBtn = styled(Button)({
   background: 'white',
   color: '#8639B5',
   border: 'none',
   textTransform: 'capitalize',
   fontWeight: '400',
})

const StyledPlaceholder = styled('span')({
   color: '#8D949E',
   opacity: 0.6,
})
