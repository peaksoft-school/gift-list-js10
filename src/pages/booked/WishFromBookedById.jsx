import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getWishById } from '../../store/wish/wishThunk'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
import { convertDateFormat } from '../../utils/constants/formatedDate'
import { providerEvent } from '../../events/customEvents'

export const WishFromBookedById = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { wishId } = useParams()
   const bookedWish = useSelector((state) => state.wish.wish)

   useEffect(() => {
      dispatch(getWishById(wishId))
   }, [])

   const handleOpenDetailProfile = (friendId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/addToMyFriends/${friendId}`)
   }

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
            bookerId={bookedWish.reservoirId}
            linkToWish={bookedWish.linkToWish}
            onGetBookerById={() =>
               handleOpenDetailProfile(
                  bookedWish.bookerId,
                  bookedWish.reservoirFullName
               )
            }
         />
      </div>
   )
}
