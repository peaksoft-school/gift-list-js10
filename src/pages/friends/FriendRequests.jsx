import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { FriendCard } from '../../components/UI/FriendCard'
import { providerEvent } from '../../events/customEvents'
import {
   acceptRequest,
   rejectRequests,
} from '../../store/my-friends/friendsThunk'
import { getRequestsFromUsers } from '../../store/requests/requestThunk'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'

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
            navigate,
         })
      )
   }

   const handleRejectRequestFriendById = (userId, nameFriend) => {
      dispatch(
         rejectRequests({
            userId,
            name: nameFriend,
            isAccept: 'REJECT_REQUEST',
            navigate,
         })
      )
   }

   return (
      <>
         <FriendCardContainer>
            {requests?.length > 0 ? (
               requests.map((request) => (
                  <div key={request.friendId}>
                     <FriendCard
                        variant="true"
                        name={request.nameFriend}
                        image={request.image}
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
                  </div>
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
