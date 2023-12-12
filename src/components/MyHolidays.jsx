import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {
   addHolidayQuery,
   getAllHolidaysByUserId,
} from '../store/holiday/holidayThunk'
import { uploadFile } from '../utils/helpers/constants'
import { Modal } from './Modal'
import { Button } from './UI/Button'
import { Input } from './UI/input/Input'
import { UploadImage } from './UploadImage'
import { Card } from './UI/card/Card'

export const MyHolidays = () => {
   const { register, handleSubmit } = useForm()
   const [preview, setPreview] = useState({ file: '', url: '' })

   const [addNewHolidayModalState, setAddNewHolidayModalState] = useState(false)
   const dispatch = useDispatch()
   const { holidays } = useSelector((state) => state.holidaySlice)
   const { id } = useSelector((state) => state.authLogin)

   useEffect(() => {
      const handleModalChange = (event) => {
         if (event.detail?.action === 'my-holidaysModalOpen') {
            setAddNewHolidayModalState(event.detail?.payload)
         }
      }
      window.addEventListener('providerEvent', handleModalChange)
      dispatch(getAllHolidaysByUserId(id))
      return () =>
         window.removeEventListener('providerEvent', handleModalChange)
   }, [])

   const onSubmit = (values) => {
      uploadFile(preview.file).then(({ link }) => {
         dispatch(
            addHolidayQuery({
               userData: values,
               image: link,
            })
         )
      })
   }
   console.log(holidays)
   const openAndCloseHolidayModalHandler = () => {
      setAddNewHolidayModalState((prevState) => !prevState)
   }

   return (
      <StyledMyHolidays component="div">
         <MyHolidaysContainer component="div">
            {holidays.map((holiday) => (
               <Card variant="" />
            ))}
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
                        {...register('nameOfHoliday')}
                        labelText="название праздника"
                        placeholder="Введите название праздника"
                     />
                     <Input
                        type="date"
                        {...register('dateOfHoliday')}
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
   display: 'flex',
   justifyContent: 'center',
})

const MyHolidaysContainer = styled(Box)({
   paddingTop: '20px',
})

const StyledAddHolidayTitle = styled(Typography)({
   fontSize: '1.5rem',
   fontWeight: '500',
   textAlign: 'center',
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
