import {
   FormControl,
   FormHelperText,
   FormLabel,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import React, { forwardRef, useEffect, useRef } from 'react'
import { useController } from 'react-hook-form'
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

const MenuProps = {
   slotProps: { paper: { sx: { width: '' } } },
   MenuListProps: {
      sx: {
         display: 'grid',
         gridTemplateColumns: 'repeat(auto-fill, minmax(3.375rem, 1fr))',
         flexWrap: 'wrap',
         padding: '15px',
         gridGap: '5px',
      },
   },
}

export const SizesSelect = forwardRef(
   (
      {
         selectedSize,
         handleChange,
         isShoeSizesRender = false,
         error,
         helperText,
         name,
         control,
      },
      ref
   ) => {
      const { labelName, placeholder, sizes } =
         variants[isShoeSizesRender ? 'shoe' : 'clothing']

      const selectRef = useRef()
      const { field } = useController({
         control,
         name,
         defaultValue: selectedSize,
      })

      useEffect(() => {
         if (selectRef.current) {
            MenuProps.slotProps.paper.sx.width = selectRef.current.offsetWidth
         }
      }, [selectRef])
      console.log(ref)

      return (
         <FormControl fullWidth>
            <StyledLabel id="demo-customized-button" error={error}>
               {labelName}
            </StyledLabel>
            <StyledSelect
               ref={selectRef}
               IconComponent={ArrowIcon}
               labelId="demo-simple-select-label"
               value={selectedSize}
               onChange={handleChange}
               displayEmpty
               MenuProps={MenuProps}
               name={field.name}
            >
               <StyledMenuItem value="" unvisible="true">
                  <StyledPlaceholder>{placeholder}</StyledPlaceholder>
               </StyledMenuItem>
               {sizes.map((size) => (
                  <StyledMenuItem key={size} value={size} disableRipple>
                     {size}
                  </StyledMenuItem>
               ))}
            </StyledSelect>
            {error && (
               <StyledFormtHelperText>{helperText}</StyledFormtHelperText>
            )}
         </FormControl>
      )
   }
)

const StyledFormtHelperText = styled(FormHelperText)({
   color: '#F83B3B',
   textAlign: 'right',
   marginRight: '4px',
})

const StyledSelect = styled(Select)({
   '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
      padding: '5px 15px',
   },
})

const StyledMenuItem = styled(MenuItem)(({ unvisible, selected }) => ({
   border: `1px solid ${selected ? '#8639B5' : '#D5D5D5'}`,
   borderRadius: '0.375rem',
   backgroundColor: '#FBFBFB !important',
   display: unvisible && 'none',
   padding: '0.25rem 0.5rem',
   justifyContent: 'center',
   color: selected ? '#8639B5' : '#020202',
   '&:hover': {
      backgroundColor: '#8639B5 !important',
      color: '#fff',
   },
   '&:active': {
      backgroundColor: '#AB62D8 !important',
      color: '#fff',
   },
}))

const StyledPlaceholder = styled('span')({
   color: '#8D949E',
   opacity: '0.6',
})

const StyledLabel = styled(FormLabel)({
   paddingBottom: '5px',
})
