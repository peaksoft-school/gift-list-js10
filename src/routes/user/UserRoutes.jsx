import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { GetAllFeedPage } from '../../pages/feed/GetAllFeedPage'
import { GetWishFromFeedById } from '../../pages/feed/GetWishFromFeedById'
import { routes } from '../../utils/constants'
import { PrivateRoutes } from '../PrivateRoutes'
import { MyFriends } from '../../pages/friends/MyFriends'
import { FriendRequests } from '../../pages/friends/FriendRequests'
import { ProfileDetail } from '../../pages/friends/ProfileDetail'
import { WishesPage } from '../../pages/friends/WishesPage'
import { CharitiesPage } from '../../pages/friends/CharitiesPage'
import { HolidaysPage } from '../../pages/friends/HolidaysPage'
import { UserProfilePage } from '../../pages/profile/UserProfilePage'
import { UpdateUserProfilePage } from '../../pages/profile/UpdateUserProfilePage'
import { MyHolidays } from '../../pages/holiday/MyHolidays'
import { HolidayInnerPage } from '../../pages/holiday/HolidayInnerPage'
import { BookedWishAndCharityPage } from '../../pages/booked/BookedWishAndCharityPage'
import { WishInnerPage } from '../../pages/booked/WishInnerPage'
import { CharityInnerPage } from '../../pages/booked/CharityInnerPage'
import { CharityFromBookedById } from '../../pages/booked/CharityFromBookedById'
import { WishFromBookedById } from '../../pages/booked/WishFromBookedById'

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
      profile,
      edit,
      userProfileById,
      holidayInnerPage,
      thingFromFeedById,
      bookings,
      bookedWish,
      bookedCharity,
      bookedCharityById,
      bookedWishById,
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
                     Component={<GetAllFeedPage isList={isList} />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={bookings.path}
               element={
                  <PrivateRoutes
                     Component={<BookedWishAndCharityPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />

            <Route
               path={bookedWish.path}
               element={
                  <PrivateRoutes
                     Component={<WishInnerPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={bookedWishById.path}
               element={
                  <PrivateRoutes
                     Component={<WishFromBookedById />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={bookedCharity.path}
               element={
                  <PrivateRoutes
                     Component={<CharityInnerPage />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={bookedCharityById.path}
               element={
                  <PrivateRoutes
                     Component={<CharityFromBookedById />}
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
               path={userProfileById.path}
               element={
                  <PrivateRoutes
                     Component={<ProfileDetail variant="addMyFriends" />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />

            <Route
               path={wishes.path}
               element={
                  <PrivateRoutes
                     Component={<WishesPage isList={isList} />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={charities.path}
               element={
                  <PrivateRoutes
                     Component={<CharitiesPage isList={isList} />}
                     isAuth={isAuth}
                     fallback="/"
                  />
               }
            />
            <Route
               path={holidays.path}
               element={
                  <PrivateRoutes
                     Component={<HolidaysPage isList={isList} />}
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
            <Route
               path={routes[role]['my-holidays'].path}
               element={<MyHolidays />}
            />
            <Route
               path={holidayInnerPage.path}
               element={<HolidayInnerPage />}
            />
         </Route>
      </Routes>
   )
}
