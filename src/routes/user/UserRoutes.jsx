import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { EditOrAddCharityFormPage } from '../../pages/charity/EditOrAddCharityFormPage'
import { GetAllCharity } from '../../pages/charity/GetAllCharity'
import { GetCharityById } from '../../pages/charity/GetCharityById'
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
   const {
      feed,
      profile,
      edit,
      charity,
      charityById,
      addCharity,
      editCharity,
   } = routes[role]
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
            <Route
               path={charity.path}
               element={
                  <PrivateRoutes
                     Component={<GetAllCharity />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={charityById.path}
               element={
                  <PrivateRoutes
                     Component={<GetCharityById />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={addCharity.path}
               element={
                  <PrivateRoutes
                     Component={<EditOrAddCharityFormPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={editCharity.path}
               element={
                  <PrivateRoutes
                     Component={<EditOrAddCharityFormPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
         </Route>
      </Routes>
   )
}
