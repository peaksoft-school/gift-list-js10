<<<<<<< HEAD
import React from 'react'
// import { useDispatch } from 'react-redux'
// import { logout } from '../../store/slices/authSlice'
// import { USER_KEY } from '../../utils/constants'
import { WishListCollection } from '../../pages/WishListCollection'

export const UserRoutes = () => {
   // const dispatch = useDispatch()
   // const handleLogout = () => {
   //    dispatch(logout())
   //    localStorage.removeItem(USER_KEY)
   // }
   return (
      <div>
         {/* UserRoutes
         <button type="button" onClick={handleLogout}>
            logout
         </button> */}
         <WishListCollection />
      </div>
=======
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'

export const UserRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const toggleList = () => {
      setIsList((prev) => !prev)
   }
   const { feed } = routes[role]
   return (
      <Routes>
         <Route
            path="/"
            element={
               <MainLayout
                  role={role}
                  isList={isList}
                  toggleList={toggleList}
                  headerSelectType={feed.headerSelectType}
               />
            }
         >
            <Route index element={<Navigate to={feed.path} />} />
            <Route
               path={feed.path}
               element={
                  <PrivateRoutes
                     Component={<h1>Here should render the component</h1>}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            {/** You can add your components like this example to bottom
             <Route
               path={pahtOfYourComponent}
               element={
                  <PrivateRoutes
                     Component={
                        Here should be your component
                     }
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            /> */}
         </Route>
      </Routes>
>>>>>>> 079742bf4d46936e6856ac1ba75d0e113ee8ca53
   )
}
