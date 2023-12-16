import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { addWish, putWish } from '../store/wish/wishThunk'
import { uploadFile } from '../utils/helpers/constants'
import { WishListForm } from './LandingPage/WishListForm'

export const EditOrAddWishPage = () => {
   const navigate = useNavigate()
   const { id: userId } = useSelector((state) => state.authLogin)
   const { wish } = useSelector((state) => state.wish)
   const dispatch = useDispatch()
   const params = useParams()
   const { state } = useLocation()
   const [Wish2, setWish2] = useState(state?.wish)
   const [newWish, setNewWish] = useState(Wish2)

   useEffect(() => {
      console.log('in useEffect')
      setWish2(wish)
      setNewWish(wish)
   }, [wish])

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
         {console.log('in div', wish, params)}
         <WishListForm
            defaultValues={
               params?.wishId && {
                  holidayName: newWish.wishName,
                  link: newWish.linkToWish,
                  holiday: newWish.holidayName,
                  description: newWish.description,
               }
            }
            img={params?.wishId && wish?.wishImage}
            onClose={onClose}
            onSubmit={onSubmit}
         />
      </div>
   )
}
