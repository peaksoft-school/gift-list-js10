import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
   FacebookIcon,
   ProfileInstagram,
   ProfileTelegram,
   ProfileVk,
} from '../assets'
import { DatePicker } from '../components/DatePicker'
import { Select } from '../components/Select'
import { Button } from '../components/UI/Button'
import { TextArea } from '../components/UI/TextArea'
import { Input } from '../components/UI/input/Input'
import { UploadImage } from '../components/UploadImage'
import {
   clothingSizes,
   countries,
   shoeSizes,
} from '../utils/constants/constants'
import { uploadFile } from '../utils/helpers/constants'
import { updateProfileSchema } from '../utils/helpers/update-profile-validations'

const sizesSelect = [
   {
      name: 'clothingSize',
      labelName: 'Размер одежды',
      placeholder: 'Выберите размер одежды',
      data: clothingSizes,
   },
   {
      name: 'shoeSize',
      labelName: 'Размер обуви',
      placeholder: 'Выберите размер обуви',
      data: shoeSizes,
   },
]

export const UpdateProfile = ({ functionForGetValues, defaultValues }) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      control,
   } = useForm({
      defaultValues,
      resolver: yupResolver(updateProfileSchema),
   })
   const [preview, setPreview] = useState({
      file: '',
      url: defaultValues.image,
   })
   const navigate = useNavigate()

   const onSubmit = async (values) => {
      let image
      if (preview?.file) {
         const response = await uploadFile(preview.file)
         image = response.link
      } else {
         image = preview?.url
      }
      functionForGetValues({ ...values, image })
      setPreview({
         file: '',
         url: image,
      })
   }
   const [error, setError] = useState(null)
   const onError = (error) => {
      if (error === 'minDate')
         setError('Введенная дата рождения слишком ранняя.')
      else if (error === 'disableFuture')
         setError('Дата рождения не может быть датой в будущем.')
      else if (error === 'invalidDate')
         setError('Дата в не правильном формате.')
      else setError(error)
   }

   return (
      <StyledForm onSubmit={handleSubmit((values) => onSubmit(values))}>
         <StyledUploadImageContainer>
            <UploadImage preview={preview} setPreview={setPreview} />
         </StyledUploadImageContainer>
         <MainForm>
            <StyledFieldset>
               <StyledLegend>Основная информация</StyledLegend>

               <StyledInput
                  placeholder="Введите имя"
                  labelText="Имя"
                  {...register('name')}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
               />

               <StyledInput
                  placeholder="Введите фамилию"
                  labelText="Фамилия"
                  {...register('surname')}
                  error={Boolean(errors.surname)}
                  helperText={errors.surname?.message}
               />

               <Select
                  control={control}
                  name="country"
                  labelName="Страна"
                  placeholder="Страна"
                  data={countries}
                  noSizesRendered
                  error={Boolean(errors.country)}
                  helperText={errors.country?.message}
               />

               <StyledDatePicker
                  label="Дата рождения"
                  placeholder="Укажите дату рождения"
                  onError={onError}
                  isBirthdate
                  name="dateofbirth"
                  control={control}
                  defaultValue={
                     defaultValues.dateOfBirth &&
                     dayjs(defaultValues.dateOfBirth)
                  }
                  errorMessage={error}
               />

               <StyledInput
                  labelText="Email"
                  {...register('email')}
                  readOnly={Boolean(1)}
               />

               <StyledInput
                  placeholder="Введите номер телефона"
                  labelText="Номер телефона"
                  {...register('phoneNumber')}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber?.message}
               />
            </StyledFieldset>

            <StyledFieldset>
               <StyledLegend>Размеры</StyledLegend>

               {sizesSelect.map(({ name, labelName, placeholder, data }) => (
                  <Select
                     key={name}
                     control={control}
                     name={name}
                     labelName={labelName}
                     placeholder={placeholder}
                     data={data}
                     error={Boolean(errors[name])}
                     helperText={errors[name]?.message}
                  />
               ))}
            </StyledFieldset>

            <StyledFieldsetOfTextArea>
               <StyledLegend>Интересы, хобби</StyledLegend>
               <TextArea
                  labelText="Расскажите о своих интересах и хобби"
                  placeholder="Пример: плавание, бег, танцы, чтение художественной литературы..."
                  {...register('hobbies')}
                  error={Boolean(errors.hobbies)}
                  helperText={errors.hobbies?.message}
               />
            </StyledFieldsetOfTextArea>

            <StyledFieldsetOfTextArea>
               <StyledLegend>Важно знать</StyledLegend>
               <TextArea
                  labelText="О чем важно знать?"
                  placeholder="Пример: аллергия на синтетические материалы, непереносимость лактозы..."
                  {...register('importantToKnow')}
                  error={Boolean(errors.importantToKnow)}
                  helperText={errors.importantToKnow?.message}
               />
            </StyledFieldsetOfTextArea>

            <StyledFieldset
               error={Boolean(
                  errors.facebookLink ||
                     errors.vkLink ||
                     errors.instagramLink ||
                     errors.telegramLink
               )}
            >
               <StyledLegend>Социальные сети</StyledLegend>

               <SocialMediasWrapper error={Boolean(errors.facebookLink)}>
                  <StyledFacebookIcon />
                  <StyledInput
                     placeholder="Вставьте ссылку на фейсбук"
                     labelText="Фейсбук"
                     {...register('facebookLink')}
                     error={Boolean(errors.facebookLink)}
                     helperText={errors.facebookLink?.message}
                  />
               </SocialMediasWrapper>

               <SocialMediasWrapper error={Boolean(errors.vkLink)}>
                  <ProfileVk className="paintOnlyfirstType" />
                  <StyledInput
                     placeholder="Вставьте ссылку на в контакте"
                     labelText="В контакте"
                     {...register('vkLink')}
                     error={Boolean(errors.vkLink)}
                     helperText={errors.vkLink?.message}
                  />
               </SocialMediasWrapper>

               <SocialMediasWrapper error={Boolean(errors.instagramLink)}>
                  <StyledInstagramIcon />
                  <StyledInput
                     placeholder="Вставьте ссылку на инстаграмм"
                     labelText="Инстаграм"
                     {...register('instagramLink')}
                     error={Boolean(errors.instagramLink)}
                     helperText={errors.instagramLink?.message}
                  />
               </SocialMediasWrapper>

               <SocialMediasWrapper error={Boolean(errors.telegramLink)}>
                  <ProfileTelegram className="paintOnlyfirstType" />
                  <StyledInput
                     placeholder="Вставьте ссылку на телеграм"
                     labelText="Телеграм"
                     {...register('telegramLink')}
                     error={Boolean(errors.telegramLink)}
                     helperText={errors.telegramLink?.message}
                  />
               </SocialMediasWrapper>
            </StyledFieldset>

            <Actions>
               <StyledButton
                  type="button"
                  onClick={() => {
                     setPreview(null)
                     reset()
                     navigate(-1)
                  }}
               >
                  Отмена
               </StyledButton>
               <StyledButton type="submit" variant="primary">
                  Сохранить
               </StyledButton>
            </Actions>
         </MainForm>
      </StyledForm>
   )
}

const StyledUploadImageContainer = styled('div')({
   width: '23%',
})

const StyledDatePicker = styled(DatePicker)({
   input: {
      padding: '5px 20px',
   },
})

const MainForm = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
   '.css-hx4552-MuiFormLabel-root': {
      paddingBottom: '5px',
   },
})

const StyledButton = styled(Button)({
   padding: '5px 20px',
})

const Actions = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   gap: '20px',
   paddingRight: '20px',
})

const SocialMediasWrapper = styled('div')(({ error }) => ({
   display: 'flex',
   alignItems: error ? 'center' : 'end',
   gap: '15px',
   '.paintOnlyfirstType > path:first-of-type': {
      fill: '#B3B3B3',
   },
   '& > svg': {
      height: '35px',
      width: '35px',
      borderRadius: '5rem',
   },
}))

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
   backgroundColor: '#fff',
})

const StyledLegend = styled('legend')({
   fontSize: '1.125rem',
   fontWeight: '400',
})

const StyledFieldset = styled('fieldset')(({ error }) => ({
   border: 'none',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '20px',
   padding: '20px',
   alignItems: error && 'center',
}))

const StyledFieldsetOfTextArea = styled('fieldset')({
   border: 'none',
   padding: '20px',
})
