import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { providerEvent } from '../../events/customEvents'
import { Card } from '../../components/UI/card/Card'
import { handleOptionsChange, isWishBooked } from './ProfileDetail'

export const CharitiesPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const friendCharities = useSelector((state) => state.charity.charities)
   const { id } = useSelector((state) => state.authLogin)

   const handleOpenDetailProfile = (friendId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/addToMyFriends/${friendId}`)
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
                  isBlock={charity.isBlock}
                  showBottomBooker="true"
                  handleChange={(e) =>
                     handleOptionsChange.CHARITY(
                        e,
                        charity.charityId,
                        dispatch,
                        id
                     )
                  }
                  onGetBookerById={() =>
                     handleOpenDetailProfile(charity.charityReservoirId)
                  }
                  onGetOwnerById={() =>
                     handleOpenDetailProfile(charity.userId, charity.fullName)
                  }
                  meatballsOptions={isWishBooked(
                     charity.charityReservoirId,
                     id
                  )}
               />
            ))}
         </div>
      </div>
   )
}
