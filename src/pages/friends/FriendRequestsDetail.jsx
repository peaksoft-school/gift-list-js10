import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileByUserId } from '../../store/slices/profile-slice/profileThunk'
import { Profile } from '../LandingPage/Profile'

export const FriendRequestsDetail = () => {
   const { friendId } = useParams()
   console.log(friendId)
   const dispatch = useDispatch()
   const profile = useSelector((state) => state.profile.friendId)
   console.log(profile)

   useEffect(() => {
      dispatch(getProfileByUserId(friendId))
   }, [dispatch])

   return (
      <>
         <Profile
            variant="applicationToFriends"
            key={profile.userId}
            image={profile.image}
            fullName={profile.fullName}
            city={profile.country}
            email={profile.email}
            birthdate={profile.dateOfBirth}
            phoneNumber={profile.phoneNumber}
            interesAndHobbies={profile.hobby}
            importantToKnow={profile.important}
            clothSize={profile.clothingSize}
            shoesSize={profile.shoeSize}
            vk={profile.vkontakte}
            telegram={profile.telegram}
            instagram={profile.instagram}
            facebook={profile.linkFacebook}
         />
         <h3>Желаемые подарки</h3>
      </>
   )
}
