import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { FriendCard } from '../../components/UI/FriendCard'
import { Tabs } from '../../components/UI/Tabs'
import { providerEvent } from '../../events/customEvents'
import { getFriends } from '../../store/slices/my-friends/friendsThunk'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'
import { getRequestsFromUsers } from '../../store/slices/requests/requestThunk'

export const MyFriends = () => {
   const myFriends = useSelector((state) => {
      return state.myFriends.friendCard
   })

   const requests = useSelector((state) => state.requests.requests)

   const countRequests = requests.length
   const countFriends = myFriends.length

   const { pathname } = useLocation()

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleOpenDetailProfile = (friendId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/friends/${friendId}`)
   }

   useEffect(() => {
      dispatch(getFriends())
      dispatch(getRequestsFromUsers())
   }, [dispatch])
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
                              key={item.nameFriend}
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
