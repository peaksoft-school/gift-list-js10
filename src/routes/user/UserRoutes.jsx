import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import { UserProfilePage } from '../../pages/profile/UserProfilePage'
import { UpdateUserProfilePage } from '../../pages/profile/UpdateUserProfilePage'

export const UserRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const toggleList = () => {
      setIsList((prev) => !prev)
   }
   const { feed, profile, edit } = routes[role]
   return (
      <Routes>
         <Route
            path="/"
            element={
               <MainLayout
                  role={role}
                  isList={isList}
                  toggleList={toggleList}
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
            <Route
               path={profile.path}
               element={
                  <PrivateRoutes
                     Component={<UserProfilePage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={`${profile.path}/${edit.path}`}
               element={
                  <PrivateRoutes
                     Component={<UpdateUserProfilePage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
         </Route>
      </Routes>
   )
}
