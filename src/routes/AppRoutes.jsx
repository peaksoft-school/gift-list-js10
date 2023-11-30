import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'
import { Navigate } from 'react-router-dom'
import { ForgotPassword } from '../components/ForgotPassword'
import { ChangePassword } from '../components/ChangePassword'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import { MainPagePartFirst } from '../pages/LandingPage/MainPagePartFirst'
import { routes } from '../utils/constants'
import { PrivateRoutes } from './PrivateRoutes'
import { AdminRoutes } from './admin/AdminRoutes'
import { UserRoutes } from './user/UserRoutes'

export const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authLogin)
   return (
      <Routes>
         <Route path="/" index element={<Navigate to="/main-page" replace />} />
         <Route path="/main-page/*" element={<MainPagePartFirst />}>
            <Route path={routes.LOGIN} element={<SignIn />} />
            <Route path={routes.REGISTRATION} element={<SignUp />} />
            <Route path={routes.FORGOTPASSWORD} element={<ForgotPassword />} />
            <Route path={routes.RESETPASSWORD} element={<ChangePassword />} />
         </Route>
         <Route
            path={`${routes.ADMIN.path}/*`}
            element={
               <PrivateRoutes Component={<AdminRoutes />} isAuth={isAuth} />
            }
         />
         <Route
            path={`${routes.USER.path}/*`}
            element={
               <PrivateRoutes Component={<UserRoutes />} isAuth={isAuth} />
            }
         />
      </Routes>
   )
}
