import {
   Select,
   styled,
   FormControl,
   MenuItem,
   FormLabel,
   FormHelperText,
} from '@mui/material'
import { useController } from 'react-hook-form'
import React from 'react'
import { Button } from './Button'
import { ArrowIcon } from '../../assets'

export const SelectComponent = ({
   label,
   data,
   isButton,
   placeholder,
   onClick,
   name,
   control,
   error,
   helperText,
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
         <FormLabel error={error}>{label}</FormLabel>

         <StyledSelect
            labelId="demo-simple-select-label"
            onChange={onChange}
            IconComponent={ArrowIcon}
            label={label}
            displayEmpty
            name={name}
            value={value}
            error={error}
            renderValue={(selected) => {
               return selected.length === 0 ? (
                  <StyledPlaceholder error={error}>
                     {placeholder}
                  </StyledPlaceholder>
               ) : (
                  selected
               )
            }}
         >
            {/* {data.map(({ label, labelName, options }) => (
               <SelectContainer key={label} label={label} name={labelName}> */}
            {data.map((title) => {
               return (
                  <SelectContainer2 key={title} value={title}>
                     {title}
                  </SelectContainer2>
               )
            })}
            {/* </SelectContainer>
            ))} */}

            {isButton ? (
               <StyledBtn onClick={onClick}>+ Создать новый праздник</StyledBtn>
            ) : null}
         </StyledSelect>
         {error && <StyledError>{helperText}</StyledError>}
      </FormControl>
   )
}

// const SelectContainer = styled('div')({
//    width: '100%',
//    display: 'flex',
//    flexDirection: 'column',
//    gap: '16px',
//    listStyle: 'none',
//    alignItems: 'flex-start',
//    fontSize: '0.875rem',
//    // padding: '9px 16px',
//    // ':hover': { backgroundColor: ' rgba(112, 46, 153, 0.4)' },
//    // ':active': { backgroundColor: '#9b6db7' },
// })

const SelectContainer2 = styled(MenuItem)({
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

const StyledSelect = styled(Select)(({ error }) => ({
   width: '100%',
   height: '5.6vh',
   'input + svg path': {
      fill: error && '#F83B3B',
   },
}))

const StyledBtn = styled(Button)({
   background: 'white',
   color: '#8639B5',
   border: 'none',
   textTransform: 'capitalize',
   fontWeight: '400',
})

const StyledPlaceholder = styled('span')(({ error }) => ({
   opacity: 0.6,
   color: error ? '#F83B3B' : '#8D949E',
}))

const StyledError = styled(FormHelperText)({
   color: '#F83B3B',
   fontWeight: 500,
   textAlign: 'right',
   marginRight: '4px',
})

/* <StyledSelect
                              IconComponent={ArrowIcon}
                              value={values[fieldName]}
                              name={fieldName}
                              onChange={handleChange}
                              displayEmpty
                           >
                              <StyledMenuItem value="" unvisible>
                                 {title}
                              </StyledMenuItem>
                              {(fieldName === 'subCategory'
                                 ? subCategoryOptions[values.category]
                                      ?.subCategories
                                 : options
                              )?.map((title) => (
                                 <StyledMenuItem value={title} key={title}>
                                    {title}
                                 </StyledMenuItem>
                              ))}
                           </StyledSelect> */
