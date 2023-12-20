import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { GiftInnerContent } from '../../components/GiftInnerContent'
import { getWishById, deleteWish } from '../../store/wish/wishThunk'
import { convertDateFormat } from '../../utils/helpers/constants'

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
      navigate(`/user/wish/putWish/${wishId}`)
   }

   useEffect(() => {
      dispatch(getWishById(wishId))
   }, [])

   if (pending) {
      return 'Loading...'
   }

   return (
      <GiftInnerContent
         onDelete={onDelete}
         onPutChange={onPutChange}
         role={role}
         variant="7"
         complaint={{
            id: wishId,
            name: wish.wishName,
            image: wish.wishImage,
            createdDate: wish.createdAt && convertDateFormat(wish.createdAt),
            linkToWish: wish.linkToWish,
            state: wish.condition === 'USED' ? 'Б/У' : 'Новый',
            dateOfHoliday: wish.dateOfHoliday,
            holidayName: wish.holidayName,
            buker: {
               image: wish.bookedUserImage,
            },
            owner: {
               userName: wish.fullName,
               image: wish.userImage,
               phoneNumber: wish.ownerPhoneNumber,
            },
            text: wish.description,
            complaints: [],
            status:
               wish.status === 'RESERVED' ||
               wish.status === 'RESERVED_ANONYMOUSLY',
         }}
      />
   )
}
