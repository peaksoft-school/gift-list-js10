import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FriendCard } from '../../components/UI/FriendCard'
import { getRequestsFromUsers } from '../../store/slices/requests/requestThunk'
import {
   acceptRequest,
   rejectRequests,
} from '../../store/slices/my-friends/friendsThunk'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'
import { providerEvent } from '../../events/customEvents'

export const FriendRequests = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const requests = useSelector((state) => state.requests.requests)

   useEffect(() => {
      dispatch(getRequestsFromUsers())
   }, [dispatch])

   const openDetailUserProfile = (userId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`${userId}`)
   }

   const handleAcceptRequestFriendById = (userId, nameFriend) => {
      dispatch(
         acceptRequest({
            userId,
            name: nameFriend,
            isAccept: 'ACCEPT_REQUEST',
         })
      )
   }

   const handleRejectRequestFriendById = (userId, nameFriend) => {
      dispatch(
         rejectRequests({
            userId,
            name: nameFriend,
            isAccept: 'REJECT_REQUEST',
         })
      )
   }

   return (
      <>
         <FriendCardContainer>
            {requests?.length > 0 ? (
               requests.map((request) => (
                  <FriendCard
                     variant="true"
                     name={request.nameFriend}
                     image={request.image}
                     key={request.friendId}
                     wish={request.countWish}
                     holidays={request.countHoliday}
                     onClick={() =>
                        openDetailUserProfile(
                           request.friendId,
                           request.nameFriend
                        )
                     }
                     onAcceptFriend={() =>
                        handleAcceptRequestFriendById(
                           request.friendId,
                           request.nameFriend
                        )
                     }
                     onRejectFriend={() =>
                        handleRejectRequestFriendById(
                           request.friendId,
                           request.nameFriend
                        )
                     }
                  />
               ))
            ) : (
               <SecondEmptyComponent text="У вас пока нет запросов в друзья " />
            )}
         </FriendCardContainer>
         <Outlet />
      </>
   )
}

const FriendCardContainer = styled('div')({
   width: '100%',
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
})
