import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getAllMailings, sendMailing } from '../../store/mailing/mailingsThunk'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import { EditOrAddFormModal } from '../../components/EditOrAddFormModal'
import { uploadFile } from '../../utils/helpers/constants'

export const MailingPage = () => {
   const [isOpenModal, setIsOpenModal] = useState({ isOpen: false })
   const [preview, setPreview] = useState({ file: '', url: '' })
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const mailings = useSelector((state) => state.mailings.mailings)

   useEffect(() => {
      const handleModalChange = (event) => {
         if (event.detail?.action === 'mailingsModalOpen') {
            setIsOpenModal((prev) => ({
               ...prev,
               isOpen: event.detail?.payload,
            }))
         }
      }
      window.addEventListener('providerEvent', handleModalChange)
      dispatch(getAllMailings())
      return () =>
         window.removeEventListener('providerEvent', handleModalChange)
   }, [])

   useEffect(() => {
      providerEvent({
         action: 'showActionsButton',
         payload: Boolean(mailings?.length),
      })
   }, [mailings])

   const handleOpenInnerMailingPage = (mailingId, nameMailing) => {
      providerEvent({ action: 'name', payload: nameMailing })
      navigate(`${mailingId}`)
   }

   const openAndCloseHolidayModalHandler = () => {
      setIsOpenModal((prevState) => ({
         isOpen: !prevState.isOpen,
      }))
   }

   const onSubmit = async (values, type) => {
      let image = preview.url
      if (preview.file) {
         const response = await uploadFile(preview.file)
         image = response.link
      }

      if (type === 'mailing') {
         const mailing = {
            text: values.text,
            nameMailing: values.nameMailing,
            image,
         }
         dispatch(sendMailing(mailing))
      }

      openAndCloseHolidayModalHandler()
      setPreview('')
   }

   return (
      <MailingContainer>
         {mailings?.map((item) => (
            <Card
               key={item.mailingId}
               variant="secondary"
               date={item.createdAt}
               cardImage={item.image}
               cardName={item.nameMailing}
               onGetThingById={() =>
                  handleOpenInnerMailingPage(item.mailingId, item.nameMailing)
               }
            />
         ))}
         {isOpenModal.isOpen && (
            <EditOrAddFormModal
               variant="mailing"
               preview={preview}
               setPreview={setPreview}
               onSubmit={onSubmit}
               addNewHolidayModalState={isOpenModal}
               closeHandler={openAndCloseHolidayModalHandler}
            />
         )}
      </MailingContainer>
   )
}

const MailingContainer = styled('div')({
   width: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})
