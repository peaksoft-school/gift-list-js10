import { styled } from '@mui/material'
import React, { useState } from 'react'
import { DatePicker } from '../components/DatePicker'
import { Input } from '../components/UI/input/Input'
import { UploadImage } from '../components/UploadImage'
import { SizesSelect } from '../components/SizesSelect'
import { TextArea } from '../components/UI/TextArea'
import { FacebookIcon } from '../assets'

export const UpdateProfile = () => {
   const [clothingSelectedSize, setClothingSelectedSize] = useState('')
   const changeClothingSelectedSize = (e) =>
      setClothingSelectedSize(e.target.value)
   const [shoeSelectedSize, setShoeSelectedSize] = useState('')
   const changeShoeSelectedSize = (e) => setShoeSelectedSize(e.target.value)

   return (
      <StyledForm>
         <UploadImage />
         <MainForm>
            <StyledFieldset>
               <legend>Основная информация</legend>
               <StyledInput placeholder="Введите имя" labelText="Имя" />
               <StyledInput placeholder="Введите фамилию" labelText="Фамилия" />
               <StyledInput placeholder="Страна" labelText="Страна" />
               <DatePicker
                  label="Дата рождения"
                  placeholder="Укажите дату рождения"
               />
               <StyledInput placeholder="Введите почту" labelText="Email" />
               <StyledInput
                  placeholder="Введите номер телефона"
                  labelText="Номер телефона"
               />
            </StyledFieldset>
            <StyledFieldset>
               <legend>Размеры</legend>
               <SizesSelect
                  selectedSize={clothingSelectedSize}
                  handleChange={changeClothingSelectedSize}
               />
               <SizesSelect
                  selectedSize={shoeSelectedSize}
                  handleChange={changeShoeSelectedSize}
               />
            </StyledFieldset>
            <StyledFieldsetOfTextArea>
               <legend>Интересы, хобби</legend>
               <TextArea
                  labelText="Расскажите о своих интересах и хобби"
                  placeholder="Пример: плавание, бег, танцы, чтение художественной литературы..."
               />
            </StyledFieldsetOfTextArea>
            <StyledFieldsetOfTextArea>
               <legend>Важно знать</legend>
               <TextArea
                  labelText="О чем важно знать?"
                  placeholder="Пример: аллергия на синтетические материалы, непереносимость лактозы..."
               />
            </StyledFieldsetOfTextArea>
            <StyledFieldset>
               <legend>Социальные сети</legend>
               <div>
                  <StyledFacebookIcon />
                  <StyledInput
                     placeholder="Вставьте ссылку на фейсбук"
                     labelText="Фейсбук"
                  />
               </div>
               <StyledInput
                  placeholder="Вставьте ссылку на в контакте"
                  labelText="В контакте"
               />
               <StyledInput
                  placeholder="Вставьте ссылку на инстаграмм"
                  labelText="Инстаграм"
               />
               <StyledInput
                  placeholder="Вставьте ссылку на телеграм"
                  labelText="Телеграм"
               />
            </StyledFieldset>
         </MainForm>
      </StyledForm>
   )
}

const StyledFacebookIcon = styled(FacebookIcon)({
   svg: {
      fill: 'blue',
   },
})

const StyledInput = styled(Input)({
   '& input': {
      padding: '10px 15px',
   },
})

const StyledForm = styled('form')({
   display: 'flex',
})

const MainForm = styled('div')({})

const StyledFieldset = styled('fieldset')({
   //   border: 'none',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '20px',
   padding: '20px',
})

const StyledFieldsetOfTextArea = styled('fieldset')({
   padding: '20px',
})
