import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getWishById } from '../../store/wish/wishThunk'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
import { convertDateFormat } from '../../utils/constants/formatedDate'

export const WishFromBookedById = () => {
   const dispatch = useDispatch()
   const { wishId } = useParams()
   const bookedWish = useSelector((state) => state.wish.wish)

   useEffect(() => {
      dispatch(getWishById(wishId))
   }, [])
   return (
      <div>
         <InnerPageOfGiftWithAnonymousBookingAndMailing
            ownerName={bookedWish.fullName}
            ownerImage={bookedWish.userImage}
            holiday={bookedWish.holidayName}
            cardName={bookedWish.wishName}
            cardImage={bookedWish.wishImage}
            bookerImage={bookedWish.reservoirImage}
            description={bookedWish.description}
            date={convertDateFormat(bookedWish.dateOfHoliday)}
            thingId={bookedWish.wishId}
            status={bookedWish.wishStatus}
            ownerId={bookedWish.ownerId}
            type="WISH"
            linkToWish={bookedWish.linkToWish}
         />
      </div>
   )
}
