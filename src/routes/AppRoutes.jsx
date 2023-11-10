import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router'
import { MainPagePartFirst } from '../pages/LandingPage/MainPagePartFirst'
import { routes } from '../utils/constants'
import { PrivateRoutes } from './PrivateRoutes'
import { AdminRoutes } from './admin/AdminRoutes'
import { UserRoutes } from './user/UserRoutes'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import { ForgotPassword } from '../components/ForgotPassword'
import { ResetPassword } from '../components/ResetPassword'

export const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authLogin)
   return (
      <Routes>
         <Route path="/" element={<MainPagePartFirst />} />
         <Route path="/" element={<Navigate to="/login" replace />} />
         <Route path={routes.LOGIN} element={<SignIn />} />
         <Route path={routes.REGISTRATION} element={<SignUp />} />
         <Route path={routes.FORGOTPASSWORD} element={<ForgotPassword />} />
         <Route path={routes.RESETPASSWORD} element={<ResetPassword />} />
         <Route
            path={routes.WELCOME}
            element={
               <div>
                  <h1>gotcha</h1>
               </div>
            }
         />
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
