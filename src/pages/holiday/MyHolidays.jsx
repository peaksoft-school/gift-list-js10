import { Box, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { providerEvent } from '../../events/customEvents'
import {
   addHolidayQuery,
   deleteHolidayById,
   getAllHolidaysByUserId,
   updateHolidayQuery,
} from '../../store/holiday/holidayThunk'
import { convertDateFormat } from '../../utils/constants/formatedDate'
import { meatballsDeleteAndEditOptions } from '../../utils/constants/meatballs-options'
import { formatDate, uploadFile } from '../../utils/helpers/constants'
import { EditOrAddHolidayModal } from '../../components/EditOrAddHolidayModal'
import { Card } from '../../components/UI/card/Card'
import { EmptyComponent } from '../LandingPage/EmptyComponent'

export const MyHolidays = () => {
   const [preview, setPreview] = useState({ file: '', url: '' })
   const navigate = useNavigate()

   const [addNewHolidayModalState, setAddNewHolidayModalState] = useState({
      isOpen: false,
      defaultValues: {},
      holidayId: 0,
   })
   const dispatch = useDispatch()
   const { holidays } = useSelector((state) => state.holiday)
   const { id } = useSelector((state) => state.authLogin)

   useEffect(() => {
      const handleModalChange = (event) => {
         if (event.detail?.action === 'my-holidaysModalOpen') {
            setAddNewHolidayModalState((prev) => ({
               ...prev,
               isOpen: event.detail?.payload,
            }))
         }
      }
      if (!holidays.length) {
         providerEvent({ action: 'showActionsButton', payload: false })
      }
      window.addEventListener('providerEvent', handleModalChange)
      dispatch(getAllHolidaysByUserId(id))
      return () =>
         window.removeEventListener('providerEvent', handleModalChange)
   }, [])

   const openAndCloseHolidayModalHandler = (defaultValues, holidayId) => {
      setAddNewHolidayModalState((prevState) => ({
         isOpen: !prevState.isOpen,
         defaultValues,
         holidayId,
      }))
   }
   const onSubmit = async (values, type, holidayId) => {
      let image = preview.url
      if (preview.file) {
         const response = await uploadFile(preview.file)
         image = response.link
      }
      if (type === 'save') {
         dispatch(
            addHolidayQuery({
               userData: {
                  nameHoliday: values.nameHoliday,
                  dateOfHoliday: formatDate(values.dateOfHoliday),
               },
               image,
               userId: id,
            })
         )
      } else if (type === 'edit') {
         dispatch(
            updateHolidayQuery({
               holidayId,
               userData: {
                  nameHoliday: values.nameHoliday,
                  dateOfHoliday: formatDate(values.dateOfHoliday),
               },
               image,
               userId: id,
            })
         )
      }

      openAndCloseHolidayModalHandler()
      setPreview('')
   }
   const onGetHolidayById = (holidayId, holidayName) => {
      providerEvent({ action: 'name', payload: holidayName })
      navigate(`${holidayId}`)
   }
   return (
      <StyledMyHolidays component="div">
         <MyHolidaysContainer component="div">
            {holidays.map((holiday) => (
               <Card
                  key={holiday.holidayId}
                  variant="tertiary"
                  holiday={holiday.nameHoliday}
                  date={convertDateFormat(holiday.dateOfHoliday)}
                  cardImage={holiday.image}
                  meatballsOptions={meatballsDeleteAndEditOptions}
                  onGetThingById={() =>
                     onGetHolidayById(holiday.holidayId, holiday.nameHoliday)
                  }
                  handleChange={(event) => {
                     switch (event.target.innerText) {
                        case 'Редактировать':
                           setPreview({
                              file: null,
                              url: holiday.image,
                           })
                           openAndCloseHolidayModalHandler(
                              {
                                 nameHoliday: holiday.nameHoliday,
                                 dateOfHoliday: holiday.dateOfHoliday,
                              },
                              holiday.holidayId
                           )
                           break
                        default:
                           dispatch(
                              deleteHolidayById({
                                 holidayId: holiday.holidayId,
                                 userId: id,
                              })
                           )
                           break
                     }
                  }}
               />
            ))}
            {!holidays.length && (
               <EmptyComponent
                  buttonText="Добавить праздник"
                  text="Вы еще не добавили праздника"
                  buttonOnClick={openAndCloseHolidayModalHandler}
               />
            )}
            {addNewHolidayModalState.isOpen && (
               <EditOrAddHolidayModal
                  preview={preview}
                  setPreview={setPreview}
                  onSubmit={onSubmit}
                  addNewHolidayModalState={addNewHolidayModalState}
                  closeHandler={openAndCloseHolidayModalHandler}
               />
            )}
         </MyHolidaysContainer>
      </StyledMyHolidays>
   )
}

const StyledMyHolidays = styled(Box)({
   backgroundColor: '#F7F8FA',
})

const MyHolidaysContainer = styled(Box)({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '10px',
   '& > .MuiPaper-root': {
      width: '20.5rem',
      marginBottom: '10px',
   },
   '& .MuiCardMedia-img': {
      width: '18.75rem',
   },
})