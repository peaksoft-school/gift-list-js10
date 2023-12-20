import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import { Complaints } from '../../pages/complaints/Complaints'
import { WishesInnerPage } from '../../pages/complaints/WishesInnerPage'

export const AdminRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const toggleList = () => {
      setIsList((prev) => !prev)
   }
   const { users, complaints, innerComplaint } = routes[role]
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
                     Component={<h1>Here should be your component</h1>}
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
