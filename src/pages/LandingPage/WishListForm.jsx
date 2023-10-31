import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import { UploadImage } from '../../components/UploadImage'
import { SelectComponent } from '../../components/UI/SelectComponent'
import { TextArea } from '../../components/UI/TextArea'
import { options } from '../../utils/constants/options'
import { Button } from '../../components/UI/Button'
import { Input } from '../../components/UI/input/Input'
import { DatePicker } from '../../components/DatePicker'

export const WishListForm = ({ onClose }) => {
   const [error, setError] = useState(null)
   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      reset,
   } = useForm({
      mode: 'onBlur',
   })

   const onSubmit = (data) => {
      console.log(data)
      reset()
   }

   const onError = (error) => {
      if (error === 'invalidDate') {
         setError('Неверный формат даты')
      }
   }

   return (
      <Container>
         <BlockOne>
            <UploadImage />
         </BlockOne>
         <BlockTwo onSubmit={handleSubmit(onSubmit)}>
            <h3>Добавление желаемого подарка</h3>

            <InputContainer>
               <Input
                  labelText="Название подарка"
                  name="Название подарка"
                  placeholder="Введите название подарка"
                  {...register('wishName')}
                  error={errors.wishName}
                  helperText={errors.wishName?.message}
               />

               <Input
                  labelText="Ссылка на подарок"
                  placeholder="Вставьте ссылку на подарок"
                  {...register('link')}
                  error={errors.link}
                  helperText={errors.link?.message}
               />

               <SelectComponent
                  data={options}
                  label="Праздник"
                  isButton="true"
                  placeholder="Выберите праздник "
                  value=""
                  name="Праздник"
                  {...register('select')}
               />
               <DatePicker
                  placeholder="Укажите дату праздника"
                  control={control}
                  label="Дата праздника"
                  name="Дата праздника"
                  errorMessage={error}
                  onError={onError}
               />
            </InputContainer>

            <TextArea
               placeholder="Введите описание подарка"
               labelText="Описание подарка"
               {...register('description')}
               error={errors.description}
               helperText={errors.description?.message}
            />
            <ButtonContainer>
               <Button onClick={onClose}>Отмена</Button>
               <Button type="submit">Добавить</Button>
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
      background: 'white',
   },
})

// const StyledDatePicker = styled(DatePicker)({

// })
