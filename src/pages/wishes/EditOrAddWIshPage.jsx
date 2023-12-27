import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditOrAddFormModal } from '../../components/EditOrAddFormModal'
import { addHolidayQuery } from '../../store/holiday/holidayThunk'
import { addWish, getWishById, putWish } from '../../store/wish/wishThunk'
import { formatDate, uploadFile } from '../../utils/helpers/constants'
import { WishListForm } from '../LandingPage/WishListForm'

export const EditOrAddWishPage = () => {
   const navigate = useNavigate()
   const { id: userId } = useSelector((state) => state.authLogin)
   const { wish } = useSelector((state) => state.wish)
   const dispatch = useDispatch()
   const { state } = useLocation()
   const [preview, setPreview] = useState({ file: '', url: '' })
   const [defaultHolidayId, setDefaultHolidayId] = useState('')
   const [addNewHolidayModalState, setAddNewHolidayModalState] = useState({
      isOpen: false,
      defaultValues: {},
      holidayId: 0,
   })
   useEffect(() => {
      if (state?.wishId) dispatch(getWishById(state?.wishId))
   }, [])

   useEffect(() => {
      const handleModalChange = (event) => {
         if (event.detail?.action === 'my-holidaysModalOpen') {
            setAddNewHolidayModalState((prev) => ({
               ...prev,
               isOpen: event.detail?.payload,
            }))
         }
      }
      window.addEventListener('providerEvent', handleModalChange)
      return () =>
         window.removeEventListener('providerEvent', handleModalChange)
   }, [])

   // eslint-disable-next-line default-param-last
   const openAndCloseHolidayModalHandler = (defaultValues = {}, holidayId) => {
      setAddNewHolidayModalState((prevState) => ({
         isOpen: !prevState.isOpen,
         defaultValues,
         holidayId,
      }))
   }

   // eslint-disable-next-line default-param-last
   const onSubmit = async (values, file = null, holidayId) => {
      let image = wish?.wishImage
      if (file) {
         try {
            const response = await uploadFile(file)
            image = response.link
         } catch (error) {
            console.log(error)
         }
      }
      const wishData = {
         nameWish: values.holidayName,
         image,
         linkToGift: values.link,
         description: values.description,
         status: wish.wishStatus,
      }
      if (!values.holidayName) {
         return null
      }
      if (state?.wishId) {
         return dispatch(
            putWish({
               wishId: state?.wishId,
               wishData,
               userId,
               navigate,
               holidayId,
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

   const onSaveHoliday = async (values) => {
      let image = preview.url
      if (preview.file) {
         const response = await uploadFile(preview.file)
         image = response.link
      }
      dispatch(
         addHolidayQuery({
            userData: {
               nameHoliday: values.nameHoliday,
               dateOfHoliday: formatDate(values.dateOfHoliday),
            },
            image,
            userId,
            setDefaultHolidayId,
         })
      )
      openAndCloseHolidayModalHandler()
   }

   const onClose = () => {
      navigate(-1)
   }

   return (
      <div>
         <WishListForm
            defaultValues={
               state?.wishId && {
                  holidayName: wish?.wishName,
                  link: wish?.linkToWish,
                  holiday: wish?.holidayName,
                  description: wish?.description,
                  nameWish: wish?.nameWish,
               }
            }
            defaultHolidayId={defaultHolidayId}
            image={state?.wishId && wish?.wishImage}
            onClose={onClose}
            onSubmit={onSubmit}
         />
         {addNewHolidayModalState.isOpen && (
            <EditOrAddFormModal
               preview={preview}
               setPreview={setPreview}
               onSubmit={onSaveHoliday}
               addNewHolidayModalState={addNewHolidayModalState}
               closeHandler={openAndCloseHolidayModalHandler}
            />
         )}
      </div>
   )
}
