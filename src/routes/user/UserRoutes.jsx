import React from 'react'
import { UserUpdateProfilePage } from '../../pages/UserUpdateProfilePage'
// import { logout } from '../../store/slices/authSlice'
// import { USER_KEY } from '../../utils/constants'

export const UserRoutes = () => {
   // const handleLogout = () => {
   //    dispatch(logout())
   //    localStorage.removeItem(USER_KEY)
   // }

   return (
      <div>
         <UserUpdateProfilePage />
         {/* <UserProfilePage /> */}
         {/* UserRoutes
         <button type="button" onClick={handleLogout}>
            logout
         </button> */}
      </div>
   )
}
