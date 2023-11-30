import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
   deleteCharityById,
   getCharityById,
} from '../../store/charity/charityThunk'
import { AdminState } from '../../components/GiftInnerContent'
import {
   categoriesWithEnglishPropertiesName,
   subCategoriesWithEnglishPropertiesName,
} from '../../utils/constants/constants'
import { convertDateFormat } from '../../utils/helpers/constants'

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

   const onEditOrOnBlock = () => {} // TODO: with role: User can edit if he is owner of this charity
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
               createdDate: convertDateFormat(charity.createdAt),
               subCategoryName:
                  subCategoriesWithEnglishPropertiesName[charity.subCategory],
               state: charity.condition === 'USED' ? 'Б/У' : 'Новый',
               buker: {
                  image: charity.bookedUserImage,
               },
               owner: {
                  userName: charity.fullName,
                  image: charity.userImage,
               },
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
