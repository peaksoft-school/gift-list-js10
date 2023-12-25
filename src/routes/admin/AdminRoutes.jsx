import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import { GetAllCharity } from '../../pages/charity/GetAllCharity'
import { GetCharityById } from '../../pages/charity/GetCharityById'
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
            <Route index element={<Navigate to={users.path} />} />
            <Route
               path={users.path}
               element={
                  <PrivateRoutes
                     Component={<h1>Here should be your component</h1>}
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
               element={<PrivateRoutes Component={<GetCharityById />} />}
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
               path={mailing.path}
               element={
                  <PrivateRoutes
                     Component={<MailingPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={innerMailing.path}
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
