import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
import { getCharityById } from '../../store/charity/charityThunk'

import {
   categoriesWithEnglishPropertiesName,
   subCategoriesWithEnglishPropertiesName,
} from '../../utils/constants/options'
import { convertDateFormat } from '../../utils/constants/formatedDate'

export const CharityFromBookedById = () => {
   const dispatch = useDispatch()
   const { charityId } = useParams()
   const bookedCharity = useSelector((state) => state.charity.charity)

   useEffect(() => {
      dispatch(getCharityById(charityId))
   }, [])
   return (
      <div>
         <InnerPageOfGiftWithAnonymousBookingAndMailing
            ownerName={bookedCharity.fullName}
            ownerImage={bookedCharity.userImage}
            cardName={bookedCharity.nameCharity}
            cardImage={bookedCharity.charityImage}
            bookerImage={bookedCharity.bookedUserImage}
            description={bookedCharity.description}
            date={convertDateFormat(bookedCharity.createdAt)}
            thingId={bookedCharity.charityId}
            status={bookedCharity.status}
            ownerId={bookedCharity.userId}
            type="CHARITY"
            category={
               categoriesWithEnglishPropertiesName[bookedCharity.category]
            }
            subcategory={
               subCategoriesWithEnglishPropertiesName[
                  Object.keys(subCategoriesWithEnglishPropertiesName).find(
                     (key) => key.includes(bookedCharity.subCategory)
                  )
               ]
            }
            bookerId={bookedCharity.charityReservoirId}
            newOrOld={bookedCharity.condition === 'USED' ? 'Б/У' : 'Новый'}
         />
      </div>
   )
}
