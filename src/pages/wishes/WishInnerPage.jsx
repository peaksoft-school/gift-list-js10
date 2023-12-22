import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { GiftInnerContent } from '../../components/GiftInnerContent'
import { getWishById, deleteWish } from '../../store/wish/wishThunk'
import { convertDateFormat } from '../../utils/helpers/constants'
import { providerEvent } from '../../events/customEvents'

export const WishInnerPage = () => {
   const { wishId } = useParams()
   const { id } = useSelector((state) => state.authLogin)
   const navigate = useNavigate()

   const dispatch = useDispatch()
   const { wish, pending } = useSelector((state) => state.wish)
   const { role } = useSelector((state) => state.authLogin)
   const onDelete = () => {
      dispatch(deleteWish({ wishId, userId: id }))
      navigate(-1)
   }

   const onPutChange = () => {
      navigate(`/user/wish/putWish`, { state: { wishId } })
   }

   useEffect(() => {
      dispatch(getWishById(wishId))
   }, [])
   providerEvent({ action: 'name', payload: wish.wishName })

   if (pending) {
      return 'Loading...'
   }

   return (
      <GiftInnerContent
         onPutChange={onPutChange}
         role={role}
         image={wish.wishImage}
         ownerImage={wish.userImage}
         ownerName={wish.fullName}
         bookerImage={wish.bookedUserImage}
         status={wish.wishStatus}
         wishName={wish.wishName}
         description={wish.description}
         ownerPhoneNumber={wish.ownerPhoneNumber}
         onDeleteWishById={onDelete}
         linkToWish={wish.linkToWish}
         newOrOld={wish.condition === 'USED' ? 'Б/У' : 'Новый'}
         // onBlockedOrUnblockWishById={}
         date={wish.createdAt && convertDateFormat(wish.createdAt)}
         isBlock={wish.block}
         complaint={{
            dateOfHoliday: wish.dateOfHoliday,
            holidayName: wish.holidayName,
         }}
      />
   )
}
