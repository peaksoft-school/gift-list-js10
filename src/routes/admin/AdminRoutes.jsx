import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import UsersPage from '../../pages/users/UsersPage'
import { UserProfile } from '../../pages/users/profiles/UserProfile'
import { UserWishes } from '../../pages/users/userWishes'
import { UserHolidays } from '../../pages/users/UserHolidays'
import { UserCharities } from '../../pages/users/UserCharities'
import { Charity } from '../../pages/users/profiles/Charity'
import { Wish } from '../../pages/users/profiles/Wish'
// import { Charity } from '../../pages/users/profiles/Charity'
// import { Wish } from '../../pages/users/profiles/Wish'

export const AdminRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const toggleList = () => {
      setIsList((prev) => !prev)
   }
   const { users } = routes[role]
   return (
      <Routes>
         <Route
            path="/"
            element={
               <MainLayout
                  role={role}
                  isList={isList}
                  toggleList={toggleList}
                  headerSelectType={users.headerSelectType}
               />
            }
         >
            <Route index element={<Navigate to={users.path} />} />
            <Route
               path={users.path}
               element={
                  <PrivateRoutes
                     Component={<UsersPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path="users/user-profile/:userId"
               element={
                  <PrivateRoutes
                     Component={<UserProfile />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path="users/user-profile/:userId/wishes"
               element={
                  <PrivateRoutes
                     Component={<UserWishes />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path="users/user-profile/:userId/wishes/wish/:wishId"
               element={
                  <PrivateRoutes
                     Component={<Wish />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path="users/user-profile/:userId/holidays"
               element={
                  <PrivateRoutes
                     Component={<UserHolidays />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path="users/user-profile/:userId/charities"
               element={
                  <PrivateRoutes
                     Component={<UserCharities />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path="users/user-profile/:userId/charities/charity/:charityId"
               element={
                  <PrivateRoutes
                     Component={<Charity />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
         </Route>
      </Routes>
   )
}
