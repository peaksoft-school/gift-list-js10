import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMailingById } from '../../store/mailing/mailingsThunk'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
import { convertDateFormat } from '../../utils/constants/formatedDate'

export const MailingInnerPage = () => {
   const dispatch = useDispatch()
   const { mailingId } = useParams()
   const mailing = useSelector((state) => state.mailings.mailing)

   useEffect(() => {
      dispatch(getMailingById(mailingId))
   }, [])
   return (
      <div>
         <InnerPageOfGiftWithAnonymousBookingAndMailing
            variant="mailing"
            cardImage={mailing?.image}
            date={convertDateFormat(mailing?.createdAt)}
            cardName={mailing?.nameMailing}
            description={mailing?.text}
         />
      </div>
   )
}
