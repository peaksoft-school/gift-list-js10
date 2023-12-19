import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AdminState } from '../../components/GiftInnerContent'
import {
   getWishlistByWishId,
   isBlockWishById,
   isUnBlockWishById,
} from '../../store/wishesById/wishByIdThunk'
import { deleteWishById } from '../../store/complaints-slice/complaintsThunk'

export const WishesInnerPage = () => {
   const { wishId } = useParams()
   const wish = useSelector((state) => state.wishById.wish)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getWishlistByWishId(wishId))
   }, [dispatch])

   const handleDeleteWishById = (wishId) => {
      dispatch(deleteWishById(wishId))
   }

   const handleBlocOrUnblockWish = (wishId, block) => {
      if (!block) {
         dispatch(isBlockWishById({ wishId, isBlock: 'true' }))
      } else {
         dispatch(isUnBlockWishById({ wishId, isBlock: 'false' }))
      }
   }

   return (
      <div>
         <AdminState
            image={wish.wishImage}
            ownerImage={wish.ownerImage}
            ownerName={wish.fullName}
            bookerImage={wish.reservoirImage}
            status={wish.statusWish}
            wishName={wish.wishName}
            description={wish.description}
            ownerPhoneNumber={wish.phoneNumber}
            complaints={wish.complaints}
            isBlock={wish.block}
            onDeleteWishById={() => handleDeleteWishById(wish.wishId)}
            onBlockedOrUnblockWishById={() =>
               handleBlocOrUnblockWish(wish.wishId, wish.block)
            }
         />
      </div>
   )
}
