import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FriendCard } from '../../components/UI/FriendCard'

export const FriendRequests = () => {
   const navigate = useNavigate()

   const requests = useSelector((state) => state.requests.requests)
   console.log(requests)

   const openDetailUserProfile = (userId) => {
      navigate(`/friends/request/${userId}`)
   }
   return (
      <>
         {requests.lenght > 0 ? (
            requests.map((request) => (
               <FriendCard
                  variant="true"
                  key={request.id}
                  onClick={() => openDetailUserProfile(request.id)}
               />
            ))
         ) : (
            <h3>helloo</h3>
         )}

         <h1>Requests</h1>
      </>
   )
}
