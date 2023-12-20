import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getAllMailings } from '../../store/mailing/MailingThunk'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'

export const MailingPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const mailings = useSelector((state) => state.mailings.mailings)

   useEffect(() => {
      dispatch(getAllMailings())
   }, [])

   useEffect(() => {
      providerEvent({
         action: 'showActionsButton',
         payload: Boolean(mailings.length),
      })
   }, [mailings])

   const handleOpenInnerMailingPage = (mailingId, nameMailing) => {
      providerEvent({ action: 'name', payload: nameMailing })
      navigate(`${mailingId}`)
   }

   return (
      <MailingContainer>
         {mailings?.map((item) => (
            <Card
               key={item.userId}
               variant="secondary"
               date={item.createdAt}
               cardImage={item.image}
               cardName={item.nameMailing}
               onGetThingById={() =>
                  handleOpenInnerMailingPage(item.mailingId, item.nameMailing)
               }
            />
         ))}
      </MailingContainer>
   )
}

const MailingContainer = styled('div')({
   width: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})
