import React from 'react'
import { useDispatch } from 'react-redux'
import { USER_KEY } from '../../utils/constants'
import { logout } from '../../store/auth/authSlice'

export const AdminRoutes = () => {
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(logout())
      localStorage.removeItem(USER_KEY)
   }
   return (
      <div>
         AdminRoutes
         <button type="button" onClick={handleLogout}>
            logout
         </button>
      </div>
   )
}
