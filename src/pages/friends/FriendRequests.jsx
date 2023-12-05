import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FriendCard } from '../../components/UI/FriendCard'
import { getRequestsFromUsers } from '../../store/slices/requests/requestThunk'

export const FriendRequests = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const requests = useSelector((state) => state.requests.requests)
   console.log(requests)

   useEffect(() => {
      dispatch(getRequestsFromUsers())
   }, [dispatch])

   const openDetailUserProfile = (userId) => {
      navigate(`${userId}`)
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
                     onClick={() => openDetailUserProfile(request.friendId)}
                  />
               ))
            ) : (
               <h3>У вас пока нет уведомлений</h3>
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
   height: '48vh',
})
