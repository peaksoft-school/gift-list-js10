// import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
import { getCharityById } from '../../store/charity/charityThunk'
import { formatDate } from '../../utils/helpers/constants'
import {
   categoriesWithEnglishPropertiesName,
   subCategoriesWithEnglishPropertiesName,
} from '../../utils/constants/options'

export const GetWishFromFeedById = () => {
   const params = useParams()
   const location = useLocation()
   const dispatch = useDispatch()
   const { charity } = useSelector((state) => state.charity)
   // const { wish } = useSelector((state) => state.wish)
   const { type } = location.state
   useEffect(() => {
      switch (type) {
         case 'WISH':
            break
         case 'CHARITY':
            dispatch(getCharityById(params?.thingId))
            break
         default:
            break
      }
   }, [])
   let { bookedUserImage, description, date, thingImage, fullName, thingName } =
      {}
   switch (type) {
      case 'WISH':
         break
      case 'CHARITY':
         bookedUserImage = charity.bookedUserImage
         description = charity.description
         date = charity.createdAt
         thingImage = charity.charityImage
         fullName = charity.fullName
         thingName = charity.nameCharity
         break
      default:
         break
   }

   console.log(charity)
   console.log(params, type)
   return (
      <InnerPageOfGiftWithAnonymousBookingAndMailing
         thingId={params?.thingId}
         description={description}
         type={type}
         subcategory={
            subCategoriesWithEnglishPropertiesName[
               Object.keys(subCategoriesWithEnglishPropertiesName).find((key) =>
                  key.includes(charity.subCategory)
               )
            ]
         }
         date={formatDate(date)}
         category={categoriesWithEnglishPropertiesName[charity.category]}
         newOrOld={charity.condition === 'USED' ? 'Б/У' : 'Новый'}
         cardImage={thingImage}
         cardName={thingName}
         ownerPhoneNumber={charity.ownerPhoneNumber} /* TODO: */
         // holiday={feed?.wish.holiday.nameHoliday}
         // holidayDate={feed?.wish.holiday.dateOfHoliday}
         ownerName={fullName}
         // ownerImage={feed?.ownerUser?.image}
         bookerImage={bookedUserImage}
         // status={feed?.bookedUser?.status}
         // ownerId={feed?.ownerUser?.userId}
      />
   )
}
