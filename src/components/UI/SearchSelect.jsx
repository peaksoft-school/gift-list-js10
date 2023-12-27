import {
   FormControl,
   InputAdornment,
   MenuItem,
   Select,
   TextField,
   styled,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CancelIcon, SearchIcon, ArrowIcon } from '../../assets'
import {
   category,
   stateOptions,
   subcategories,
} from '../../utils/constants/options'

const selectOptions = [
   { title: 'Состояние', fieldName: 'state', options: stateOptions },
   { title: 'Категория', fieldName: 'category', options: category },
   { title: 'Подкатегория', fieldName: 'subCategory' },
   {
      title: 'Страна',
      fieldName: 'country',
      options: [
         'Кыргызстан',
         'Азербайджан',
         'Россия',
         'Казахстан',
         'Узбекистан',
         'Таджикистан',
      ],
   },
]

export const SearchSelect = ({
   variant = {},
   values,
   search,
   handleChange,
   handleReset,
   handleSearch,
}) => {
   const [isShowX, setIsShowX] = useState(false)
   useEffect(() => {
      if (
         values.category ||
         values.country ||
         values.state ||
         values.subCategory ||
         values.search
      ) {
         setIsShowX(true)
      } else {
         setIsShowX(false)
      }
   })
   const onResetValues = () => {
      handleReset()
      setIsShowX(false)
   }
   return (
      <Form
         placeholder="Поиск"
         name="search"
         autoComplete="off"
         autoFocus="off"
         value={variant ? values.search : search}
         onChange={variant ? handleChange : handleSearch}
         InputProps={{
            startAdornment: (
               <InputAdornment position="start">
                  <SearchIcon />
               </InputAdornment>
            ),
            endAdornment: (
               <InputAdornment position="end">
                  {variant === 'select' &&
                     selectOptions.map(({ title, fieldName, options }) => (
                        <FormControl key={title}>
                           <StyledSelect
                              IconComponent={ArrowIcon}
                              value={values[fieldName]}
                              name={fieldName}
                              onChange={handleChange}
                              displayEmpty
                           >
                              <StyledMenuItem value="" unvisible="true">
                                 {title}
                              </StyledMenuItem>
                              {(fieldName === 'subCategory'
                                 ? subcategories[values.category]
                                 : options
                              )?.map((title) => (
                                 <StyledMenuItem value={title} key={title}>
                                    {title}
                                 </StyledMenuItem>
                              ))}
                           </StyledSelect>
                        </FormControl>
                     ))}
                  {isShowX && <StyledCancelIcon onClick={onResetValues} />}
               </InputAdornment>
            ),
         }}
      />
   )
}

const StyledMenuItem = styled(MenuItem)(({ unvisible }) => ({
   fontSize: '0.875rem',
   display: unvisible && 'none',
}))

const StyledCancelIcon = styled(CancelIcon)({
   cursor: 'pointer',
})

const Form = styled(TextField)({
   '& input': {
      paddingLeft: '10px',
      height: '0.4375em',
      fontSize: '0.875rem',
      fontWeight: '400',
      caretColor: '#8639B5',
   },
   width: '100%',
   margin: '20px',
   '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#8639B5 !important',
   },
})

const StyledSelect = styled(Select)({
   fontSize: '0.875rem',
   fieldset: {
      outline: '0',
      border: 'none',
   },
   '&, &:hover, &.Mui-focused, & .css-d9oaum-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input:focus':
      {
         backgroundColor: 'initial',
      },
   '&:after, &:hover:not(.Mui-disabled, .Mui-error):before, &::before': {
      borderBottom: 'none',
   },
   '.css-d9oaum-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input': {
      paddingTop: '10px',
   },
})
