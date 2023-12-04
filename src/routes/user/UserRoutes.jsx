import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { GetAllFeedPage } from '../../pages/feed/GetAllFeedPage'
import { GetWishFromFeedById } from '../../pages/feed/GetWishFromFeedById'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import { UserProfilePage } from '../../pages/profile/UserProfilePage'
import { UpdateUserProfilePage } from '../../pages/profile/UpdateUserProfilePage'

export const UserRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const [nameOfActiveCardType, setNameOfActiveCardType] = useState('card')
   const toggleList = (newNameOfAcriveCardType) => {
      if (nameOfActiveCardType !== newNameOfAcriveCardType) {
         setIsList((prev) => !prev)
         setNameOfActiveCardType(newNameOfAcriveCardType)
      }
   }
   const { feed, profile, edit, thingFromFeedById } = routes[role]
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
                     Component={<GetAllFeedPage isList={isList} />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={thingFromFeedById.path}
               element={<GetWishFromFeedById />}
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
