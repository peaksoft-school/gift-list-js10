import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/UI/Button'
import { SelectComponent } from '../../components/UI/SelectComponent'
import { TextArea } from '../../components/UI/TextArea'
import { Input } from '../../components/UI/input/Input'
import { UploadImage } from '../../components/UploadImage'
import {
   category,
   holidayOptions,
   stateOptions,
   subcategories,
} from '../../utils/constants/options'
import {
   variantSchema,
   wishListSchema,
} from '../../utils/helpers/wishListValidates'
import { getAllHolidaysByUserId } from '../../store/slices/holidays/holidayThunk'

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
      options: subcategories,
   },
]

const initialValues = [
   {
      state: '',
      category: '',
      subCategory: '',
   },
]

export const WishListForm = ({
   onClose,
   variant,
   onSubmit,
   defaultValues = initialValues,
   img,
}) => {
   const [preview, setPreview] = useState({ file: '', url: img })
   const [values, setValues] = useState(variant ? initialValues[0] : {})

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitSuccessful },
      reset,
      control,
      setValue,
      // getValues,
   } = useForm({
      defaultValues: { ...defaultValues },
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

   const handleChange = (name, value) => {
      setValue(name, value)
      setValues((prev) => ({ ...prev, [name]: value }))
   }

   const { holidays } = useSelector((state) => state.holidays)
   const { id } = useSelector((state) => state.authLogin)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllHolidaysByUserId(id))
   }, [])

   const holidayNames = holidays.map((holiday) => {
      return holiday.nameHoliday
   })
   const holiday = holidays.find((el) => el.nameHoliday === values.holiday)
   return (
      <Container>
         <BlockOne>
            <UploadImage preview={preview} setPreview={setPreview} />
         </BlockOne>
         <BlockTwo
            onSubmit={handleSubmit((data) => {
               onSubmit(data, preview.file, holiday.holidayId)
               reset()
               setPreview(null)
               setValues(variant ? initialValues[0] : {})
            })}
         >
            <h3>
               {variant ? 'Добавление вещи' : 'Добавление желаемого подарка'}
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
                     {holidayOptions.map(({ name, placeholder, labelName }) => (
                        <SelectComponent
                           key={name}
                           data={holidayNames}
                           label={name}
                           isButton="true"
                           placeholder={placeholder}
                           name={labelName}
                           control={control}
                           disabled={Boolean(img)}
                           error={Boolean(errors.holiday)}
                           helperText={errors.holiday?.message}
                           handleChange={handleChange}
                           value={values[labelName] || ''}
                        />
                     ))}
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
               <Button type="submit" variant="primary">
                  {img ? 'Сохранить' : 'Добавить'}
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

const StyledInput = styled(Input)({
   input: {
      height: '2vh',
   },
})
