import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'
import { MainPagePartFirst } from '../pages/LandingPage/MainPagePartFirst'
import { LoginPage } from '../pages/LoginPage'
import { routes } from '../utils/constants'
import { PrivateRoutes } from './PrivateRoutes'
import { AdminRoutes } from './admin/AdminRoutes'
import { UserRoutes } from './user/UserRoutes'

export const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authLogin)
   return (
      <Routes>
         <Route path="/" element={<MainPagePartFirst />} />
         <Route path={routes.LOGIN} element={<LoginPage />} />
         <Route
            path={routes.ADMIN.path}
            element={
               <PrivateRoutes Component={<AdminRoutes />} isAuth={isAuth} />
            }
         />
         <Route
            path={routes.USER.path}
            element={
               <PrivateRoutes Component={<UserRoutes />} isAuth={isAuth} />
            }
         />
      </Routes>
   )
}
