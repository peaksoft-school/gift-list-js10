import { FormControl, FormLabel, MenuItem, Select, styled } from '@mui/material'
import React from 'react'
import { ArrowIcon } from '../assets'

const variants = {
   shoe: {
      labelName: 'Размер обуви',
      placeholder: 'Выберите размер обуви',
      sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
   },
   clothing: {
      labelName: 'Размер одежды',
      placeholder: 'Выберите размер одежды',
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XXL', 'XL', 'XXXL'],
   },
}

export const SizesSelect = ({
   selectedSize,
   handleChange,
   isShoeSizesRender = false,
}) => {
   const { labelName, placeholder, sizes } =
      variants[isShoeSizesRender ? 'shoe' : 'clothing']
   return (
      <FormControl fullWidth>
         <StyledLabel id="demo-simple-select-label">{labelName}</StyledLabel>
         <StyledSelect
            IconComponent={ArrowIcon}
            labelId="demo-simple-select-label"
            value={selectedSize}
            onChange={handleChange}
            displayEmpty
            renderValue={(selected) => {
               console.log(selected)
               return selected.length === 0 ? (
                  <StyledPlaceholder>{placeholder}</StyledPlaceholder>
               ) : (
                  selected
               )
            }}
         >
            <StyledMenuContainer value="null">
               {sizes.map((size) => (
                  <StyledMenuItem key={size}>{size}</StyledMenuItem>
               ))}
            </StyledMenuContainer>
         </StyledSelect>
      </FormControl>
   )
}

const StyledMenuContainer = styled(MenuItem)({
   // padding: '20px',
   backgroundColor: 'transparent !important',
})

const StyledSelect = styled(Select)({
   '& svg': {
      right: '15px',
   },
   height: '50%',
})

const StyledPlaceholder = styled('span')({
   color: '#8D949E',
   opacity: '0.6',
})

const StyledLabel = styled(FormLabel)({
   paddingBottom: '5px',
})

const StyledMenuItem = styled(MenuItem)(({ selected }) => ({
   backgroundColor: '#FBFBFB',
   '&:hover': {
      backgroundColor: '#8639B5',
      color: '#fff',
   },
   '&:active': {
      color: '#8639B5',
      backgroundColor: '#FBFBFB',
   },
   '&:focus': {
      backgroundColor: '#AB62D8',
   },
   display: selected && 'none',
}))
