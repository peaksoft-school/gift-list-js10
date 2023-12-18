import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addWish, getWishById, putWish } from '../store/wish/wishThunk'
import { uploadFile } from '../utils/helpers/constants'
import { WishListForm } from './LandingPage/WishListForm'

export const EditOrAddWishPage = () => {
   const navigate = useNavigate()
   const { id: userId } = useSelector((state) => state.authLogin)
   const { wish } = useSelector((state) => state.wish)
   const dispatch = useDispatch()
   const params = useParams()
   useEffect(() => {
      if (params?.wishId) dispatch(getWishById(params?.wishId))
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
      console.log(values)

      if (params.wishId) {
         return dispatch(
            putWish({
               wishId: params?.wishId,
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

   return (
      <div>
         <WishListForm
            defaultValues={
               params?.wishId && {
                  holidayName: wish?.wishName,
                  link: wish?.linkToWish,
                  holiday: wish?.holidayName,
                  description: wish?.description,
               }
            }
            img={params?.wishId && wish?.wishImage}
            onClose={onClose}
            onSubmit={onSubmit}
         />
      </div>
   )
}
