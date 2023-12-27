import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import { GetAllCharity } from '../../pages/charity/GetAllCharity'
import { GetCharityById } from '../../pages/charity/GetCharityById'
import UsersPage from '../../pages/users/UsersPage'
import { UserProfile } from '../../pages/users/profiles/UserProfile'
import { UserWishes } from '../../pages/users/userWishes'
import { UserHolidays } from '../../pages/users/UserHolidays'
import { UserCharities } from '../../pages/users/UserCharities'
import { Charity } from '../../pages/users/profiles/Charity'
import { Wish } from '../../pages/users/profiles/Wish'
import { Complaints } from '../../pages/complaints/Complaints'
import { WishesInnerPage } from '../../pages/complaints/WishesInnerPage'
import { MailingPage } from '../../pages/mailings/MailingPage'
import { MailingInnerPage } from '../../pages/mailings/MailingInnerPage'

export const AdminRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const toggleList = () => {
      setIsList((prev) => !prev)
   }
   const {
      users,
      complaints,
      innerComplaint,
      mailing,
      innerMailing,
      getUserById,
      getUserWishes,
      getUserWishById,
      getUserHolidays,
      getUserCharities,
      getCharityById,
      charityById,
      charity,
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
            <Route index element={<Navigate to={users?.path} />} />
            <Route
               path={users?.path}
               element={
                  <PrivateRoutes
                     Component={<UsersPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={getUserById?.path}
               element={
                  <PrivateRoutes
                     Component={<UserProfile />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={getUserWishes?.path}
               element={
                  <PrivateRoutes
                     Component={<UserWishes />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={getUserWishById?.path}
               element={
                  <PrivateRoutes
                     Component={<Wish />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={getUserHolidays?.path}
               element={
                  <PrivateRoutes
                     Component={<UserHolidays />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={getUserCharities?.path}
               element={
                  <PrivateRoutes
                     Component={<UserCharities />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={getCharityById?.path}
               element={
                  <PrivateRoutes
                     Component={<Charity />}
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
               path={complaints.path}
               element={
                  <PrivateRoutes
                     Component={<Complaints />}
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
               path={innerComplaint.path}
               element={
                  <PrivateRoutes
                     Component={<WishesInnerPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={mailing?.path}
               element={
                  <PrivateRoutes
                     Component={<MailingPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={innerMailing?.path}
               element={
                  <PrivateRoutes
                     Component={<MailingInnerPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
         </Route>
      </Routes>
   )
}
