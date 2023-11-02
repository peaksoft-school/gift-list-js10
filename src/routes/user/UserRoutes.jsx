import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'
import { USER_KEY } from '../../utils/constants'

export const UserRoutes = () => {
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(logout())
      localStorage.removeItem(USER_KEY)
   }
   return (
      <div>
         UserRoutes
         <button type="button" onClick={handleLogout}>
            logout
         </button>
      </div>
   )
}
