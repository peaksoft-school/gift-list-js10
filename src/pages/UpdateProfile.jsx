import { styled } from '@mui/material'
import React, { useState } from 'react'
import {
   FacebookIcon,
   ProfileInstagram,
   ProfileTelegram,
   ProfileVk,
} from '../assets'
import { SizesSelect } from '../components/SizesSelect'
import { TextArea } from '../components/UI/TextArea'
import { Input } from '../components/UI/input/Input'
import { UploadImage } from '../components/UploadImage'
import { Button } from '../components/UI/Button'

export const UpdateProfile = ({
   register,
   handleSubmit,
   reset,
   onSubmit,
   // errors,
   control,
}) => {
   const [clothingSelectedSize, setClothingSelectedSize] = useState('')
   const changeClothingSelectedSize = (e) =>
      setClothingSelectedSize(e.target.value)
   const [shoeSelectedSize, setShoeSelectedSize] = useState('')
   const changeShoeSelectedSize = (e) => setShoeSelectedSize(e.target.value)

   return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
         <UploadImage />
         <MainForm>
            <StyledFieldset>
               <StyledLegend>Основная информация</StyledLegend>
               <StyledInput
                  placeholder="Введите имя"
                  labelText="Имя"
                  {...register('name')}
               />
               <StyledInput
                  placeholder="Введите фамилию"
                  labelText="Фамилия"
                  {...register('surname')}
               />
               <StyledInput
                  placeholder="Страна"
                  labelText="Страна"
                  {...register('country')}
               />
               {/* <DatePicker
                  label="Дата рождения"
                  placeholder="Укажите дату рождения"
               /> */}
               <StyledInput
                  placeholder="Введите почту"
                  labelText="Email"
                  {...register('email')}
               />
               <StyledInput
                  placeholder="Введите номер телефона"
                  labelText="Номер телефона"
                  {...register('phoneNumber')}
               />
            </StyledFieldset>
            <StyledFieldset>
               <StyledLegend>Размеры</StyledLegend>
               <SizesSelect
                  selectedSize={clothingSelectedSize}
                  handleChange={changeClothingSelectedSize}
                  {...register('clothingSelectedSize')}
                  control={control}
               />
               <SizesSelect
                  selectedSize={shoeSelectedSize}
                  handleChange={changeShoeSelectedSize}
                  isShoeSizesRender
                  helperText="Введите размер обуви"
                  {...register('shoeSelectedSize')}
                  control={control}
               />
            </StyledFieldset>
            <StyledFieldsetOfTextArea>
               <StyledLegend>Интересы, хобби</StyledLegend>
               <TextArea
                  labelText="Расскажите о своих интересах и хобби"
                  placeholder="Пример: плавание, бег, танцы, чтение художественной литературы..."
                  {...register('hobbies')}
               />
            </StyledFieldsetOfTextArea>
            <StyledFieldsetOfTextArea>
               <StyledLegend>Важно знать</StyledLegend>
               <TextArea
                  labelText="О чем важно знать?"
                  placeholder="Пример: аллергия на синтетические материалы, непереносимость лактозы..."
                  {...register('importantToKnow')}
               />
            </StyledFieldsetOfTextArea>
            <StyledFieldset>
               <StyledLegend>Социальные сети</StyledLegend>
               <SocialMediasWrapper>
                  <StyledFacebookIcon />
                  <StyledInput
                     placeholder="Вставьте ссылку на фейсбук"
                     labelText="Фейсбук"
                     {...register('facebookLink')}
                  />
               </SocialMediasWrapper>
               <SocialMediasWrapper>
                  <ProfileVk className="paintOnlyfirstType" />
                  <StyledInput
                     placeholder="Вставьте ссылку на в контакте"
                     labelText="В контакте"
                     {...register('vkLink')}
                  />
               </SocialMediasWrapper>
               <SocialMediasWrapper>
                  <StyledInstagramIcon />
                  <StyledInput
                     placeholder="Вставьте ссылку на инстаграмм"
                     labelText="Инстаграм"
                     {...register('instagramLink')}
                  />
               </SocialMediasWrapper>
               <SocialMediasWrapper>
                  <ProfileTelegram className="paintOnlyfirstType" />
                  <StyledInput
                     placeholder="Вставьте ссылку на телеграм"
                     labelText="Телеграм"
                     {...register('telegramLink')}
                  />
               </SocialMediasWrapper>
            </StyledFieldset>
            <Actions>
               <StyledButton onClick={reset}>Отмена</StyledButton>
               <StyledButton type="submit" variant="primary">
                  Сохранить
               </StyledButton>
            </Actions>
         </MainForm>
      </StyledForm>
   )
}

const MainForm = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
})

const StyledButton = styled(Button)({
   padding: '5px 20px',
})

const Actions = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   gap: '20px',
})

const SocialMediasWrapper = styled('div')({
   display: 'flex',
   alignItems: 'end',
   gap: '15px',
   '.paintOnlyfirstType > path:first-of-type': {
      fill: '#B3B3B3',
   },
   svg: {
      height: '35px',
      width: '35px',
      borderRadius: '5rem',
   },
})

const StyledInstagramIcon = styled(ProfileInstagram)({
   'path:first-of-type, path:first-of-type + path': {
      fill: '#B3B3B3',
   },
})

const StyledFacebookIcon = styled(FacebookIcon)({
   path: {
      fill: '#B3B3B3',
   },
})

const StyledInput = styled(Input)({
   '& input': {
      padding: '5px 15px',
   },
   marginTop: '5px',
})

const StyledForm = styled('form')({
   display: 'flex',
   padding: '20px',
   borderRadius: '8px',
   '.css-ma9pga': {
      padding: '13px',
   },
})

const StyledLegend = styled('legend')({
   fontSize: '1.125rem',
   fontWeight: '400',
})

const StyledFieldset = styled('fieldset')({
   border: 'none',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '20px',
   padding: '20px',
})

const StyledFieldsetOfTextArea = styled('fieldset')({
   border: 'none',
   padding: '20px',
})
