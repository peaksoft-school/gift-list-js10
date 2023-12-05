import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import { MyFriends } from '../../pages/friends/MyFriends'
import { FriendRequests } from '../../pages/friends/FriendRequests'
import { ProfileDetail } from '../../pages/friends/ProfileDetail'
// import { FriendRequestsDetail } from '../../pages/friends/FriendRequestsDetail'
import { WishesPage } from '../../pages/friends/WishesPage'
import { CharitiesPage } from '../../pages/friends/CharitiesPage'
import { HolidaysPage } from '../../pages/friends/HolidaysPage'

export const UserRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   const [isList, setIsList] = useState(false)
   const toggleList = () => {
      setIsList((prev) => !prev)
   }

   const params = useParams()
   const path = params['*']

   const {
      feed,
      friends,
      request,
      getFriendById,
      getRequestsById,
      wishes,
      holidays,
      charities,
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
                  headerSelectType={routes[role][path]?.headerSelectType}
                  variant
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
               path={friends.path}
               element={
                  <PrivateRoutes
                     Component={<MyFriends />}
                     isAuth={isAuth}
                     fallback="/"
                     variant
                  />
               }
            >
               <Route
                  path={request.path}
                  element={
                     <PrivateRoutes
                        Component={<FriendRequests />}
                        isAuth={isAuth}
                        fallback="/"
                     />
                  }
               />
            </Route>

            <Route
               path={getRequestsById.path}
               element={
                  <PrivateRoutes
                     Component={<ProfileDetail variant="requests" />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={getFriendById.path}
               element={
                  <PrivateRoutes
                     Component={<ProfileDetail variant="myFriendProfile" />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />

            <Route
               path={wishes.path}
               element={
                  <PrivateRoutes
                     Component={<WishesPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={charities.path}
               element={
                  <PrivateRoutes
                     Component={<CharitiesPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={holidays.path}
               element={
                  <PrivateRoutes
                     Component={<HolidaysPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />

            {/** You can add your components like this example to bottom
             <Route
               path={pahtOfYourComponent}
               element={
                  <PrivateRoutes
                     Component={
                        Here should be your component
                     }
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            /> */}
         </Route>
      </Routes>
   )
}
