import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addWish, getWishById, putWish } from '../../store/wish/wishThunk'
import { uploadFile } from '../../utils/helpers/constants'
import { WishListForm } from '../LandingPage/WishListForm'

export const EditOrAddWishPage = () => {
   const navigate = useNavigate()
   const { id: userId } = useSelector((state) => state.authLogin)
   const { wish } = useSelector((state) => state.wish)
   const dispatch = useDispatch()
   const { state } = useLocation()
   useEffect(() => {
      if (state?.wishId) dispatch(getWishById(state?.wishId))
   }, [])

   const onSubmit = async (values, file, holidayId) => {
      let image = wish?.wishImage
      if (file) {
         const response = await uploadFile(file)
         image = response.link
      }
      const wishData = {
         nameWish: values.holidayName,
         image,
         linkToGift: values.link,
         description: values.description,
      }

      if (state?.wishId) {
         return dispatch(
            putWish({
               wishId: state?.wishId,
               wishData,
               userId,
               navigate,
            })
         )
      }
      return dispatch(
         addWish({
            wishData,
            userId,
            holidayId,
            navigate,
         })
      )
   }

   const onClose = () => {
      navigate(-1)
   }
   console.log(wish, state)

   return (
      <div>
         <WishListForm
            defaultValues={
               state?.wishId && {
                  holidayName: wish?.wishName,
                  link: wish?.linkToWish,
                  holiday: wish?.holidayName,
                  description: wish?.description,
               }
            }
            img={state?.wishId && wish?.wishImage}
            onClose={onClose}
            onSubmit={onSubmit}
         />
      </div>
   )
}
