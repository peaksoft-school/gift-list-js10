import React from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { providerEvent } from '../../events/customEvents'
import { Card } from '../../components/UI/card/Card'
import { handleOptionsChange, isWishBooked } from './ProfileDetail'

export const CharitiesPage = ({ isList }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const friendCharities = useSelector((state) => state.charity.charities)

   const { id } = useSelector((state) => state.authLogin)

   const handleOpenDetailProfile = (friendId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/addToMyFriends/${friendId}`)
   }

   const openInnerCharityHandler = (charityId, charityName) => {
      providerEvent({ action: 'name', payload: charityName })
      navigate(`/user/charities/${charityId}`)
   }
   return (
      <Container>
         <h2>Благотворительность</h2>
         <CharityContainer>
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
                  showBottomBooker="true"
                  list={isList}
                  handleChange={(e) =>
                     handleOptionsChange.CHARITY(
                        e,
                        charity.charityId,
                        dispatch,
                        charity.userId
                     )
                  }
                  onGetBookerById={() =>
                     handleOpenDetailProfile(
                        charity.charityReservoirId,
                        charity.reservoirFullName
                     )
                  }
                  meatballsOptions={isWishBooked(
                     charity.charityReservoirId,
                     id
                  )}
                  onGetThingById={() =>
                     openInnerCharityHandler(
                        charity.charityId,
                        charity.nameCharity
                     )
                  }
               />
            ))}
         </CharityContainer>
      </Container>
   )
}

const CharityContainer = styled('div')({
   width: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
})
