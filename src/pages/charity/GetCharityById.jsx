import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
import {
   categoriesWithEnglishPropertiesName,
   subCategoriesWithEnglishPropertiesName,
} from '../../utils/constants/constants'
import { convertDateFormat } from '../../utils/helpers/constants'
import { makeEventForUpdateTheAfterMeatballs } from './GetAllCharity'

export const GetCharityById = () => {
   const { charityId } = useParams()
   // const [isBookingAnonymous, setIsBookingAnonymous] = useState(false)
   // const handleCheckboxChange = (e) => setIsBookingAnonymous(e.target.checked)
   const { charity, pending } = useSelector((state) => state.charity)
   const { role } = useSelector((state) => state.authLogin)
   // const navigate = useNavigate()
   // const onBooking = () => {
   //    dispatch(
   //       bookingCharityThunk({
   //          charityId,
   //          isBookingAnonymous,
   //          userId: id,
   //       })
   //    )
   //    navigate(-1)
   // }
   // const isBooked = charity.status?.includes('RESERVED')

   useEffect(() => {
      return () => {
         makeEventForUpdateTheAfterMeatballs()
      }
   }, [])

   if (pending) {
      return 'Loading...'
   }

   // const onEditOrOnBlock = (role, navigate, charity, dispatch, charityId) => {
   //    if (role === 'USER') {
   //       navigate('/user/charity/editCharity', {
   //          state: {
   //             defaultValues: {
   //                category:
   //                   categoriesWithEnglishPropertiesName[charity.category],
   //                state: conditionWithEnglishPropertiesName[charity.condition],
   //                holidayName: charity.nameCharity,
   //                subCategory:
   //                   subCategoriesWithEnglishPropertiesName[
   //                      Object.keys(
   //                         subCategoriesWithEnglishPropertiesName
   //                      ).find((key) => key.includes(charity.subCategory))
   //                   ],
   //                description: charity.description,
   //             },
   //             charityId,
   //             charityImage: charity.charityImage,
   //          },
   //       })
   //    } else if (role === 'ADMIN') {
   //       dispatch(blockOrUnblockCharityById({ charityId, blockCharity: true }))
   //    }
   // }

   // const onDeleteCharity = () => {
   //    dispatch(deleteCharityById({ charityId, navigate }))
   // }

   return (
      <div>
         {/* <AdminState     
               myId: id,
               bookerId: charity.charityReservoirId,
            showEditOrBlockOptions={
               role === 'USER' ? charity.userId === id : true
            }
            onDelete={onDeleteCharity}
            onEditOrOnBlock={() =>
               onEditOrOnBlock(role, navigate, charity, dispatch, charityId)
            }
            isBookingAnonymous={isBookingAnonymous}
            isShowBookingOptions={isBooked && charity.userId !== id}
            handleCheckboxChange={handleCheckboxChange}
            onBooking={onBooking}
         /> */}
         <InnerPageOfGiftWithAnonymousBookingAndMailing
            ownerName={charity.fullName}
            ownerImage={charity.userImage}
            role={role.toLowerCase()}
            cardImage={charity.charityImage}
            cardName={charity.nameCharity}
            ownerPhoneNumber={charity.ownerPhoneNumber}
            bookerImage={charity.bookedUserImage}
            description={charity.description}
            date={charity.createdAt && convertDateFormat(charity.createdAt)}
            thingId={charityId}
            status={charity.status}
            ownerId={charity.userId}
            type="CHARITY"
            category={categoriesWithEnglishPropertiesName[charity.category]}
            subcategory={
               subCategoriesWithEnglishPropertiesName[
                  Object.keys(subCategoriesWithEnglishPropertiesName).find(
                     (key) => key.includes(charity.subCategory)
                  )
               ]
            }
            isBlock={charity.block}
            bookerId={charity.charityReservoirId}
            newOrOld={charity.condition === 'USED' ? 'Б/У' : 'Новый'}
         />
      </div>
   )
}
