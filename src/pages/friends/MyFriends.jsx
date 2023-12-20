import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { FriendCard } from '../../components/UI/FriendCard'
import { Tabs } from '../../components/UI/Tabs'
import { providerEvent } from '../../events/customEvents'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'

export const MyFriends = () => {
   const myFriends = useSelector((state) => {
      return state.myFriends.friendCard
   })

   const requests = useSelector((state) => state.requests.requests)

   const countRequests = requests.length
   const countFriends = myFriends.length

   const { pathname } = useLocation()

   const navigate = useNavigate()

   const handleOpenDetailProfile = (friendId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/friends/${friendId}`)
   }

   return (
      <>
         <div>
            <Tabs countFriends={countFriends} countRequests={countRequests} />
         </div>
         <CardContainer>
            {pathname === '/user/friends' ? (
               <>
                  {myFriends.length !== 0 &&
                     myFriends?.map((item) => (
                        <div key={item.friendId}>
                           <FriendCard
                              name={item.nameFriend}
                              wish={item.countWish}
                              holidays={item.countHoliday}
                              image={item.image}
                              onClick={() => {
                                 handleOpenDetailProfile(
                                    item.friendId,
                                    item.nameFriend
                                 )
                              }}
                           />
                        </div>
                     ))}
                  {myFriends.length === 0 && (
                     <SecondEmptyComponent text="Здесь будет отображен список ваших друзей." />
                  )}
               </>
            ) : null}
            <Outlet />
         </CardContainer>
      </>
   )
}

const CardContainer = styled('div')({
   width: '100%',
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
})
