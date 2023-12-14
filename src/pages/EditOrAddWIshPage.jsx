import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { WishListForm } from './LandingPage/WishListForm'
import { addWish, getWishById, putWish } from '../store/wish/wishThunk'
import { uploadFile } from '../utils/helpers/constants'

export const EditOrAddWishPage = () => {
   const navigate = useNavigate()
   const { wish } = useSelector((state) => state.wish)
   const { id: userId } = useSelector((state) => state.authLogin)
   const dispatch = useDispatch()
   const params = useParams()
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
            defaultValues={
               params?.wishId && {
                  holidayName: wish.wishName,
                  link: wish.linkToWish,
                  holiday: wish.holidayName,
                  description: wish.description,
               }
            }
            defaultHolidayDate={wish.dateOfHoliday}
            img={params?.wishId && wish.wishImage}
            onClose={onClose}
            onSubmit={(values, file, holidayId) => {
               let image = wish.wishImage
               const wishData = {
                  nameWish: values.holidayName,
                  image,
                  linkToGift: values.link,
                  description: values.description,
               }
               if (file)
                  uploadFile(file).then(({ link }) => {
                     image = link
                  })

               if (params.wishId) {
                  return dispatch(
                     putWish({
                        wishId: params.wishId,
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
            }}
         />
      </div>
   )
}
