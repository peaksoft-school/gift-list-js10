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

const selectOptions = [
   { title: 'Состояние', fieldName: 'state', options: ['Все', 'Б/У', 'Новое'] },
   { title: 'Категория', fieldName: 'category', options: ['Електроника'] },
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

const subCategoryOptions = {
   Електроника: {
      subCategories: [
         'Смартфоны и телефоны',
         'Аудиотехника',
         'Фото и видеокамеры',
         'Автоэлектроника',
         'ТВ и видео',
         'Компьютеры, ноутбуки и планшеты',
      ],
   },
}

export const SearchSelect = ({
   variant = {},
   values,
   handleChange,
   handleReset,
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
         value={values.search}
         onChange={handleChange}
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
   width: '51.3125rem',
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
