import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GiftInnerContent } from '../../components/GiftInnerContent'
import { getWishById } from '../../store/wish/wishThunk'
import { convertDateFormat } from '../../utils/helpers/constants'

export const WishInnerPage = () => {
   const { wishId } = useParams()

   const dispatch = useDispatch()
   const { wish, pending } = useSelector((state) => state.wish)
   const { role } = useSelector((state) => state.authLogin)

   useEffect(() => {
      dispatch(getWishById(wishId))
   }, [])
   if (pending) {
      return 'Loading...'
   }

   return (
      <GiftInnerContent
         role={role}
         variant="7"
         complaint={{
            id: wishId,
            name: wish.nameCharity,
            image: wish.charityImage,
            createdDate: wish.createdAt && convertDateFormat(wish.createdAt),

            state: wish.condition === 'USED' ? 'Б/У' : 'Новый',
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
         //  onDelete={onDeleteWish}
         //  onEditOrOnBlock={() =>
         //     onEditOrOnBlock(role, navigate, wish, dispatch, wishId)
         //  }
      />
   )
}
