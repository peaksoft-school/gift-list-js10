import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AddHolidayPlusIcon } from '../assets'
import { addHoliday } from '../store/holiday/holdiaySlice'
import { Modal } from './Modal'
import { Button } from './UI/Button'
import { Input } from './UI/input/Input'
import { UploadImage } from './UploadImage'

export const MyHolidays = () => {
   const { register, handleSubmit } = useForm()
   const [preview, setPreview] = useState({ file: '', url: '' })

   const [addNewHolidayModalState, setAddNewHolidayModalState] = useState(false)
   const dispatch = useDispatch()

   const onSubmit = (data) => {
      dispatch(
         addHoliday({
            userData: data,
            image: preview.url,
         })
      )
   }

   const openAndCloseHolidayModalHandler = () => {
      setAddNewHolidayModalState((prevState) => !prevState)
   }

   return (
      <StyledMyHolidays component="div">
         <MyHolidaysContainer component="div">
            <TitleAndAddButton component="div">
               <StyledTitle variant="h1">Мои праздники</StyledTitle>
               <StyledButton
                  variant="primary"
                  onClick={openAndCloseHolidayModalHandler}
               >
                  <AddHolidayPlusIcon /> Добавить праздник
               </StyledButton>
            </TitleAndAddButton>
            <Modal isOpen={addNewHolidayModalState} padding="20px">
               <ModalContainer>
                  <StyledForm
                     component="form"
                     onSubmit={handleSubmit(onSubmit)}
                  >
                     <StyledAddHolidayTitle variant="h1">
                        Добавление праздника
                     </StyledAddHolidayTitle>
                     <StyledUploadImageWrapper>
                        <UploadImage
                           setPreview={setPreview}
                           preview={preview}
                        />
                     </StyledUploadImageWrapper>
                     <Input
                        type="text"
                        {...register('holidayName')}
                        labelText="название праздника"
                        placeholder="Введите название праздника"
                     />
                     <Input
                        type="date"
                        {...register('holidayDate')}
                        labelText="Дата праздника"
                        placeholder="Укажите дату праздника"
                     />
                     <AddAndCancelButtonsContainer>
                        <StyledHolidayButton
                           variant="outlined"
                           onClick={openAndCloseHolidayModalHandler}
                        >
                           Отмена
                        </StyledHolidayButton>
                        <StyledHolidayButton variant="primary" type="submit">
                           Добавить
                        </StyledHolidayButton>
                     </AddAndCancelButtonsContainer>
                  </StyledForm>
               </ModalContainer>
            </Modal>
         </MyHolidaysContainer>
      </StyledMyHolidays>
   )
}

const StyledMyHolidays = styled(Box)({
   backgroundColor: '#F7F8FA',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
})

const MyHolidaysContainer = styled(Box)({
   paddingTop: '20px',
   width: '67.875rem',
})

const TitleAndAddButton = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})

const StyledTitle = styled(Typography)({
   fontSize: '1.5rem',
   fontWeight: '500',
})

const StyledAddHolidayTitle = styled(Typography)({
   fontSize: '1.5rem',
   fontWeight: '500',
   textAlign: 'center',
})

const StyledButton = styled(Button)({
   display: 'flex',
   gap: '10px',
})

const ModalContainer = styled(Box)({
   width: '30rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '40px',
})

const StyledForm = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
})

const AddAndCancelButtonsContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledHolidayButton = styled(Button)({
   width: '48%',
   textAlign: 'center',
})

const StyledUploadImageWrapper = styled('div')({
   alignSelf: 'center',
   height: '13.563rem',
   width: '13.563rem',
   '& .css-1vlo6bj': {
      height: '100%',
   },
})
