import {
   FormControl,
   FormHelperText,
   FormLabel,
   MenuItem,
   Select as MUISelect,
   styled,
} from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useController } from 'react-hook-form'
import { ArrowIcon } from '../assets'

const MenuProps = {
   slotProps: { paper: { sx: { width: '' } } },
   MenuListProps: {
      sizesStyles: {
         display: 'grid',
         gridTemplateColumns: 'repeat(auto-fill, minmax(3.375rem, 1fr))',
         flexWrap: 'wrap',
         padding: '15px',
         gridGap: '5px',
      },
   },
}

export const Select = ({
   error,
   helperText,
   name,
   control,
   labelName,
   placeholder,
   data,
   noSizesRendered,
}) => {
   const { slotProps, MenuListProps } = MenuProps

   const selectRef = useRef()

   const {
      field: { onChange, value },
   } = useController({
      control,
      name,
      defaultValue: '',
   })

   useEffect(() => {
      if (selectRef.current) {
         MenuProps.slotProps.paper.sx.width = selectRef.current.offsetWidth
      }
   })

   return (
      <FormControl fullWidth>
         <StyledLabel id="demo-customized-button" error={error}>
            {labelName}
         </StyledLabel>
         <StyledSelect
            ref={selectRef}
            IconComponent={ArrowIcon}
            labelId="demo-simple-select-label"
            value={value}
            onChange={onChange}
            displayEmpty
            MenuProps={{
               MenuListProps: {
                  sx: !noSizesRendered && MenuListProps.sizesStyles,
               },
               slotProps,
            }}
            error={error}
            name={name}
         >
            <StyledMenuItem
               nosizesrendered={noSizesRendered ? 'true' : ''}
               value=""
               unvisible="true"
            >
               <StyledPlaceholder>{placeholder}</StyledPlaceholder>
            </StyledMenuItem>
            {data.map((size) => (
               <StyledMenuItem
                  nosizesrendered={noSizesRendered ? 'true' : ''}
                  key={size}
                  value={size}
                  disableRipple
               >
                  {size}
               </StyledMenuItem>
            ))}
         </StyledSelect>
         {error && <StyledFormtHelperText>{helperText}</StyledFormtHelperText>}
      </FormControl>
   )
}

const StyledFormtHelperText = styled(FormHelperText)({
   color: '#F83B3B',
   textAlign: 'right',
   marginRight: '4px',
})

const StyledSelect = styled(MUISelect)({
   '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
      padding: '5px 15px',
   },
})

const StyledMenuItem = styled(MenuItem)(
   ({ unvisible, selected, nosizesrendered }) => ({
      border: nosizesrendered
         ? 'none'
         : `1px solid ${selected ? '#8639B5' : '#D5D5D5'}`,
      borderRadius: nosizesrendered ? 'none' : '0.375rem',
      backgroundColor: '#FBFBFB !important',
      display: (unvisible && 'none') || (nosizesrendered && selected && 'none'),
      padding: nosizesrendered ? '5px 15px' : '0.25rem 0.5rem',
      justifyContent: nosizesrendered ? 'start' : 'center',
      color: selected ? '#8639B5' : '#020202',
      '&:hover': {
         backgroundColor: '#8639B5 !important',
         color: '#fff',
      },
      '&:active': {
         backgroundColor: '#AB62D8 !important',
         color: '#fff',
      },
   })
)

const StyledPlaceholder = styled('span')({
   color: '#8D949E',
   opacity: '0.6',
})

const StyledLabel = styled(FormLabel)({
   paddingBottom: '5px',
})
