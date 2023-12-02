import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { FriendCard } from '../../components/UI/FriendCard'
import { Tabs } from '../../components/UI/Tabs'
import { providerEvent } from '../../events/customEvents'

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
      // dispatch(getFriends())
   }, [dispatch])
   return (
      <div>
         <Tabs countFriends={countFriends} countRequests={countRequests} />

         {pathname === '/user/friends'
            ? myFriends?.map((item) => (
                 <FriendCard
                    key={item.nameFriend}
                    name={item.nameFriend}
                    wish={item.countWish}
                    holidays={item.countHoliday}
                    image={item.image}
                    onClick={() => {
                       handleOpenDetailProfile(item.friendId, item.nameFriend)
                    }}
                 />
              ))
            : null}
         {/* <Outlet /> */}
      </div>
   )
}
