import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
// import { validateDate } from '@mui/x-date-pickers/internals'
import { DatePicker } from '../../components/DatePicker'
import { Button } from '../../components/UI/Button'
import { SelectComponent } from '../../components/UI/SelectComponent'
import { TextArea } from '../../components/UI/TextArea'
import { Input } from '../../components/UI/input/Input'
import { UploadImage } from '../../components/UploadImage'
import {
   category,
   selectOptions,
   stateOptions,
   subcategories,
} from '../../utils/constants/options'
import {
   variantSchema,
   wishListSchema,
} from '../../utils/helpers/wishListValidates'

const arrayState = [
   {
      name: 'Состояние',
      labelName: 'state',
      placeholder: 'Укажите состояние',
      options: stateOptions,
   },
   {
      name: 'Категория',
      labelName: 'category',
      placeholder: 'Выберите категорию',
      options: category,
   },
   {
      name: 'Подкатегория',
      labelName: 'subCategory',
      placeholder: 'Выберите подкатегорию',
      options: [],
   },
]

const initialValues = [
   {
      state: '',
      category: '',
      subCategory: '',
   },
]

export const WishListForm = ({ onClose, variant }) => {
   const [datePickerError, setDatePickerError] = useState(null)
   const [preview, setPreview] = useState({ file: '' })
   const [values, setValues] = useState(variant ? initialValues[0] : {})

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitSuccessful },
      reset,
      control,
      getValues,
      setValue,
   } = useForm({
      defaultValues: {
         ...initialValues,
      },
      mode: 'onBlur',
      resolver: !variant
         ? yupResolver(wishListSchema)
         : yupResolver(variantSchema),
   })

   useEffect(() => {
      if (isSubmitSuccessful) {
         reset()
         setPreview(null)
      }
   }, [isSubmitSuccessful, reset])

   useEffect(() => {
      const { holidayDate } = getValues()
      if (!holidayDate) {
         setDatePickerError('Укажите дату праздника!')
      }

      return setDatePickerError(null)
   }, [DatePicker])

   const onSubmit = (data) => {
      console.log(data, preview)
      reset()
      setPreview(null)
      setValues(variant ? initialValues[0] : {})
   }

   // const onError = (error) => {
   //    if (error === 'invalidDate') {
   //       setDatePickerError('Неверный формат даты')
   //    } else if (error === 'maxDate') {
   //       setDatePickerError('Выберите дату по раньше')
   //    } else if (error === 'minDate') {
   //       setDatePickerError('Слишком ранняя дата.')
   //    }
   //    console.log(error)
   // }

   const handleChange = (name, value) => {
      setValue(name, value)
      setValues((prev) => ({ ...prev, [name]: value }))
   }

   // const dateChangeHandle = (value) => {
   //    if (value) {
   //       setDatePickerError('')
   //    }

   //    const date = regex.test(value)
   //    return setDatePickerError(date)
   //    // else setDatePickerError('')
   //    //    //  else if (error === 'invalidDate') {
   //    //    //    setDatePickerError('Неверный формат даты')
   //    //    // } else if (error === 'maxDate') {
   //    //    //    setDatePickerError('Выберите дату по раньше')
   //    //    // }
   // }

   const regex = /^(0[1-9]|[1-2][0-9]|3[01])$/

   const dateChangeHandle = (value) => {
      const isValidDate = regex.test(value)
      console.log(isValidDate)
      if (isValidDate) {
         setDatePickerError(null)
      } else {
         setDatePickerError('Неверный формат даты')
      }
   }

   // const dateChangeHandle = (value) => {
   //    if (value === validateDate) {
   //       setDatePickerError(null)
   //    } else {
   //       setDatePickerError('Неверный формат даты')
   //    }
   // }

   return (
      <Container>
         <BlockOne>
            <UploadImage preview={preview} setPreview={setPreview} />
         </BlockOne>
         <BlockTwo onSubmit={handleSubmit((data) => onSubmit(data, preview))}>
            <h3>
               {!variant ? 'Добавление желаемого подарка' : 'Добавление вещи'}
            </h3>

            <InputContainer>
               <StyledInput
                  labelText="Название подарка"
                  placeholder="Введите название подарка"
                  {...register('holidayName')}
                  error={Boolean(errors.holidayName)}
                  helperText={errors.holidayName?.message}
               />

               {!variant ? (
                  <>
                     <StyledInput
                        labelText="Ссылка на подарок"
                        placeholder="Вставьте ссылку на подарок"
                        {...register('link')}
                        error={Boolean(errors.link)}
                        helperText={errors.link?.message}
                     />
                     {selectOptions.map(
                        ({ name, placeholder, labelName, options }) => (
                           <SelectComponent
                              key={name}
                              data={options}
                              label={name}
                              isButton="true"
                              placeholder={placeholder}
                              name={labelName}
                              control={control}
                              error={Boolean(errors.holiday)}
                              helperText={errors.holiday?.message}
                              handleChange={handleChange}
                              value={values[labelName] || ''}
                           />
                        )
                     )}

                     <StyledDatePicker
                        placeholder="Укажите дату праздника"
                        control={control}
                        label="Дата праздника"
                        name="holidayDate"
                        errorMessage={datePickerError}
                        dateChangeHandle={dateChangeHandle}
                     />
                  </>
               ) : (
                  <>
                     {arrayState.map(
                        ({ name, placeholder, labelName, options }) => (
                           <SelectComponent
                              key={name}
                              data={
                                 labelName === 'subCategory'
                                    ? subcategories[values.category] || []
                                    : options
                              }
                              label={name}
                              name={labelName}
                              placeholder={placeholder}
                              control={control}
                              error={Boolean(errors[labelName])}
                              helperText={errors[labelName]?.message}
                              handleChange={handleChange}
                              value={values[labelName]}
                           />
                        )
                     )}
                  </>
               )}
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
               <Button
                  onClick={() => {
                     const { holidayDate } = getValues()
                     if (!holidayDate) {
                        setDatePickerError('Укажите дату праздника!')
                     } else {
                        setDatePickerError(null)
                     }
                  }}
                  type="submit"
                  variant="primary"
               >
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
