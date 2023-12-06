import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addCharity, updateCharity } from '../../store/charity/charityThunk'
import { WishListForm } from '../LandingPage/WishListForm'
import { uploadFile } from '../../utils/helpers/constants'

export const EditOrAddCharityFormPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { id } = useSelector((state) => state.authLogin)
   const onCloseForm = () => navigate(-1)
   const { state } = useLocation()

   const onSubmitForm = async (values, data) => {
      let image
      if (data?.file) {
         const response = await uploadFile(data.file)
         image = response.link
      } else {
         image = data?.url
      }

      if (state?.charityId) {
         return dispatch(
            updateCharity({
               userId: id,
               charityId: state.charityId,
               charity: { ...values, image },
               navigate,
            })
         )
      }

      return dispatch(
         addCharity({
            userId: id,
            charity: { ...values, image },
            navigate,
         })
      )
   }

   return (
      <div>
         <WishListForm
            defaultValues={state?.defaultValues}
            variant
            image={state?.charityImage}
            onClose={onCloseForm}
            onSubmit={onSubmitForm}
         />
      </div>
   )
}
