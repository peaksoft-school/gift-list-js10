import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { WishListForm } from './LandingPage/WishListForm'
import { getWishById } from '../store/wish/wishThunk'

export const EditOrAddWishPage = () => {
   const navigate = useNavigate()
   const { wish } = useSelector((state) => state.wish)
   const dispatch = useDispatch()
   console.log(wish)
   const params = useParams()
   console.log(params.wishId)
   useEffect(() => {
      if (params.wishId) {
         dispatch(getWishById(params.wishId))
      }
   }, [])

   const onClose = () => {
      navigate(-1)
   }
   return (
      <div>
         <WishListForm
            defaultValues={{
               holidayName: wish.wishName,
               link: wish.linkToWish,
               holiday: wish.holidayName,
               description: wish.description,
               holidayDate: wish.dateOfHoliday,
            }}
            img={wish.wishImage}
            onClose={onClose}
            onSubmit={(values) => {
               console.log(values)
            }}
         />
      </div>
   )
}
