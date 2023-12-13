import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AdminState } from '../../components/GiftInnerContent'
import { getWishlistByWishId } from '../../store/slices/wishesById/wishByIdThunk'

export const WishesInnerPage = () => {
   const dispatch = useDispatch()
   useEffect(
      (wishId) => {
         dispatch(getWishlistByWishId(wishId))
      },
      [dispatch]
   )
   return (
      <div>
         <AdminState />
      </div>
   )
}
