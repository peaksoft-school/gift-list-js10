import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addCharity, updateCharity } from '../../store/charity/charityThunk'
import {
   categoriesWithEnglishPropertiesName,
   conditionWithEnglishPropertiesName,
   subCategoriesWithEnglishPropertiesName,
} from '../../utils/constants/constants'
import { uploadFile } from '../../utils/helpers/constants'
import { WishListForm } from '../LandingPage/WishListForm'

export const EditOrAddCharityFormPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { id } = useSelector((state) => state.authLogin)
   const params = useParams()
   const onCloseForm = () => navigate(-1)
   const { charity } = useSelector((state) => state.charity)
   // useEffect(() => {
   //    if (params?.charityId)
   // }, [])
   const onSubmitForm = async (values, data, reset) => {
      let image
      if (data?.file) {
         const response = await uploadFile(data.file)
         image = response.link
      } else {
         image = data?.url
      }
      console.log(values)

      if (charity?.charityId) {
         navigate(-1)
         return dispatch(
            updateCharity({
               userId: id,
               charityId: charity.charityId,
               charity: { ...values, image },
               reset,
            })
         )
      }
      navigate(-1)
      return dispatch(
         addCharity({
            userId: id,
            charity: { ...values, image },
            reset,
         })
      )
   }

   return (
      <div>
         <WishListForm
            defaultValues={
               params?.charityId && {
                  category:
                     categoriesWithEnglishPropertiesName[charity.category],
                  state: conditionWithEnglishPropertiesName[charity.condition],
                  holidayName: charity.nameCharity,
                  subCategory:
                     subCategoriesWithEnglishPropertiesName[
                        Object.keys(
                           subCategoriesWithEnglishPropertiesName
                        ).find((key) => key.includes(charity.subCategory))
                     ],
                  description: charity.description,
               }
            }
            variant
            image={params?.charityId && charity?.charityImage}
            onClose={onCloseForm}
            onSubmit={onSubmitForm}
            imageIsReqired
         />
      </div>
   )
}
