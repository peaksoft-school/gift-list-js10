import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { UploadImage } from '../../components/UploadImage'
import { wishListSchema } from '../../utils/helpers/validate'
import { SelectComponent } from '../../components/UI/SelectComponent'
import { TextArea } from '../../components/UI/TextArea'
import { options } from '../../utils/constants/options'
import { DatePicker } from '../../components/DatePicker'
import { Button } from '../../components/UI/Button'
import { Input } from '../../components/UI/input/Input'

export const WishListForm = ({ onClose }) => {
   const [error, setError] = useState(null)
   const [preview, setPreview] = useState({ file: '' })
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      control,
   } = useForm({
      mode: 'onBlur',
      resolver: yupResolver(wishListSchema),
   })

   const onSubmit = (data) => {
      console.log(data)
      reset()
      setPreview(null)
   }

   const onError = (error) => {
      if (error === 'invalidDate') {
         setError('Неверный формат даты')
      }
      if (error === '') {
         setError('Укажите дату')
      }
   }

   return (
      <Container>
         <BlockOne>
            <UploadImage preview={preview} setPreview={setPreview} />
         </BlockOne>
         <BlockTwo onSubmit={handleSubmit((data) => onSubmit(data, preview))}>
            <h3>Добавление желаемого подарка</h3>

            <InputContainer>
               <StyledInput
                  labelText="Название подарка"
                  placeholder="Введите название подарка"
                  {...register('holidayName')}
                  error={Boolean(errors.holidayName)}
                  helperText={errors.holidayName?.message}
               />

               <StyledInput
                  labelText="Ссылка на подарок"
                  placeholder="Вставьте ссылку на подарок"
                  {...register('link')}
                  error={Boolean(errors.link)}
                  helperText={errors.link?.message}
               />

               <SelectComponent
                  data={options}
                  label="Праздник"
                  isButton="true"
                  placeholder="Выберите праздник "
                  name="holiday"
                  control={control}
                  error={Boolean(errors.holiday)}
                  helperText={errors.holiday?.message}
               />
               <StyledDatePicker
                  placeholder="Укажите дату праздника"
                  control={control}
                  label="Дата праздника"
                  name="Дата праздника"
                  errorMessage={error}
                  onError={onError}
               />
            </InputContainer>

            <TextArea
               labelText="Описание подарка"
               placeholder="Введите описание подарка"
               {...register('description')}
               error={Boolean(errors.description)}
               helperText={errors.description?.message}
            />
            <ButtonContainer>
               <Button onClick={onClose}>Отмена</Button>
               <Button type="submit" variant="primary">
                  Добавить
               </Button>
            </ButtonContainer>
         </BlockTwo>
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   padding: '20px',
   gap: '20px',
})

const BlockOne = styled('div')({
   width: '16%',
})

const BlockTwo = styled('form')({
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
   width: '80%',
   '& > h3': {
      fontSize: '1.125rem',
      fontWeight: 400,
   },
})

const InputContainer = styled('div')({
   display: 'grid',
   gap: '16px',
   gridTemplateColumns: '1fr 1fr',
})

const ButtonContainer = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
   paddingTop: '36px',
   '& > Button': {
      borderRadius: '10px',
      textTransform: 'uppercase',
   },
})
const StyledDatePicker = styled(DatePicker)({
   input: {
      height: '3.2vh',
   },
})

const StyledInput = styled(Input)({
   input: {
      height: '2vh',
   },
})
