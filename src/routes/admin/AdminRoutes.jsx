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

export const AdminRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const toggleList = () => {
      setIsList((prev) => !prev)
   }
   const { users, complaints, innerComplaint, charity, charityById } =
      routes[role]
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
               element={<PrivateRoutes Component={<GetAllCharity />} />}
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
         </Route>
      </Routes>
   )
}
