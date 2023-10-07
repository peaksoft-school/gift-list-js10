import {
   FormControl,
   InputAdornment,
   MenuItem,
   Select,
   TextField,
   styled,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ReactComponent as CancelIcon } from '../../assets/icons/search-cancel-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/select-arrow-icon.svg'

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
                              style={{ fontSize: '0.875rem' }}
                              onChange={handleChange}
                              displayEmpty
                           >
                              <MenuItem value="" style={{ display: 'none' }}>
                                 {title}
                              </MenuItem>
                              {(fieldName === 'subCategory'
                                 ? subCategoryOptions[values.category]
                                      ?.subCategories
                                 : options
                              )?.map((title) => (
                                 <MenuItem
                                    style={{
                                       fontSize: '0.875rem',
                                    }}
                                    value={title}
                                    key={title}
                                 >
                                    {title}
                                 </MenuItem>
                              ))}
                           </StyledSelect>
                        </FormControl>
                     ))}
                  {isShowX && (
                     <CancelIcon
                        onClick={onResetValues}
                        style={{ cursor: 'pointer' }}
                     />
                  )}
               </InputAdornment>
            ),
         }}
      />
   )
}
const Form = styled(TextField)({
   '& input': {
      paddingLeft: '10px',
      height: '0.4375em',
      fontSize: '0.875rem',
      fontFamily: `'Inter', sans-serif`,
      fontWeight: '400',
   },
   width: '51.3125rem',
   margin: '20px',
   '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#8639B5 !important',
   },
})

const StyledSelect = styled(Select)({
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
      fontFamily: `'Inter', sans-serif`,
   },
})
