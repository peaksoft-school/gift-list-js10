import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../components/UI/card/Card'
import { getProfileByUserId } from '../../store/slices/profile-slice/profileByIdThunk'

export const CharitiesPage = () => {
   const dispatch = useDispatch()
   const friendCharities = useSelector((state) => state.charities.charities)

   const handleOpenProfileByBookerOrOwnerId = (userId) => {
      dispatch(getProfileByUserId(userId))
   }
   return (
      <div>
         <h2>Благотворительность</h2>
         <div>
            {friendCharities.map((charity) => (
               <Card
                  key={charity.charityId}
                  date={charity.createdAt}
                  cardImage={charity.charityImage}
                  holiday={charity.nameCharity}
                  status={charity.status}
                  newOrOld={charity.condition === 'USED' ? 'Б/У' : 'Новый'}
                  ownerName={charity.fullName}
                  ownerImage={charity.userImage}
                  bookerImage={charity.bookedUserImage}
                  onClick={() =>
                     handleOpenProfileByBookerOrOwnerId(
                        charity.charityReservoirId
                     )
                  }
                  //   meatballsOptions={isWishBooked(
                  //      charity.charityReservoirId,
                  //      id
                  //   )}
               />
            ))}
         </div>
      </div>
   )
}
