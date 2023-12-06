import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AdminState } from '../../components/GiftInnerContent'
import {
   deleteCharityById,
   getCharityById,
} from '../../store/charity/charityThunk'
import {
   categoriesWithEnglishPropertiesName,
   conditionWithEnglishPropertiesName,
   subCategoriesWithEnglishPropertiesName,
} from '../../utils/constants/constants'
import { convertDateFormat } from '../../utils/helpers/constants'
// import { WishListForm } from '../LandingPage/WishListForm'

export const GetCharityById = () => {
   const { charityId } = useParams()
   const dispatch = useDispatch()
   const { charity, pending } = useSelector((state) => state.charity)
   const { role } = useSelector((state) => state.authLogin)
   const navigate = useNavigate()
   useEffect(() => {
      dispatch(getCharityById(charityId))
   }, [])

   if (pending) {
      return 'Loading...'
   }

   const onDeleteCharity = () => {
      dispatch(deleteCharityById({ charityId, navigate }))
   }

   const onEditOrOnBlock = () => {
      if (role === 'USER') {
         navigate('/user/charity/editCharity', {
            state: {
               defaultValues: {
                  category:
                     categoriesWithEnglishPropertiesName[charity.category],
                  state: conditionWithEnglishPropertiesName[charity.condition],
                  holidayName: charity.nameCharity,
                  subCategory:
                     subCategoriesWithEnglishPropertiesName[
                        charity.subCategory
                     ],
                  description: charity.description,
               },
               charityId,
               charityImage: charity.charityImage,
            },
         })
      }
      //  else if (role === 'ADMIN') {
      // }
   }

   return (
      <div>
         <AdminState
            role={role.toLowerCase()}
            complaint={{
               id: charityId,
               name: charity.nameCharity,
               image: charity.charityImage,
               categoryName:
                  categoriesWithEnglishPropertiesName[charity.category],
               createdDate:
                  charity.createdAt && convertDateFormat(charity.createdAt),
               subCategoryName:
                  subCategoriesWithEnglishPropertiesName[charity.subCategory],
               state: charity.condition === 'USED' ? 'Б/У' : 'Новый',
               buker: {
                  image: charity.bookedUserImage,
               },
               owner: {
                  userName: charity.fullName,
                  image: charity.userImage,
                  phoneNumber: charity.ownerPhoneNumber,
               },
               text: charity.description,
               complaints: [],
               status:
                  charity.status === 'RESERVED' ||
                  charity.status === 'RESERVED_ANONYMOUSLY',
            }}
            onDelete={onDeleteCharity}
            onEditOrOnBlock={onEditOrOnBlock}
         />
      </div>
   )
}
