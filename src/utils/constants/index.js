import { providerEvent } from '../../events/customEvents'

export const USER_KEY = 'GIFT-LIST_USER_KEY'
export const USER_TOKEN_KEY = 'GIFT_LIST_USER_TOKEN_KEY'

export const routes = {
   LOGIN: 'login',
   REGISTRATION: 'registration',
   FORGOTPASSWORD: 'forgot-password',
   RESETPASSWORD: 'reset-password',
   ADMIN: {
      path: '/admin',
      users: { path: 'users', breadcrumb: 'Пользователи' },
      getUserById: { path: 'users/:userId' },
      getUserWishes: {
         path: 'users/:userId/wishes',
         breadcrumb: 'Список желаний',
      },
      getUserWishById: { path: 'users/:userId/wishes/:wishId' },
      getUserWish: { path: 'wish:wishId' },
      getUserHolidays: { path: 'users/:userId/holidays' },
      getUserCharities: { path: 'users/:userId/charities' },
      getCharityById: { path: 'users/:userId/charities/:charityId' },
      complaints: { path: 'complaints', breadcrumb: 'Жалобы' },
      innerComplaint: { path: 'complaints/:wishId' },
   },

   USER: {
      path: '/user',
      feed: {
         path: 'feed',
         breadcrumb: 'Лента',
         showListActions: true,
      },
      thingFromFeedById: {
         path: 'feed/:thingId/:thingType',
         breadcrumb: '',
      },
      bookings: {
         path: 'bookings',
         breadcrumb: 'Забронированные',
      },
      bookedWish: {
         path: 'bookedWish',
      },
      bookedWishById: {
         path: 'bookedWish/:wishId',
      },
      bookedCharity: {
         path: 'bookedCharity',
      },
      bookedCharityById: {
         path: 'bookedCharity/:charityId',
      },
      friends: {
         path: 'friends',
         breadcrumb: 'Друзья',
      },
      request: {
         path: 'requests',
      },
      getFriendById: {
         path: 'friends/:friendId',
      },
      getRequestsById: {
         path: 'friends/requests/:friendId',
      },
      userProfileById: {
         path: 'addToMyFriends/:friendId',
      },
      wishes: {
         path: 'wishes',
         showListActions: true,
      },
      wishesById: {
         path: 'wishes/:wishId',
      },
      holidays: {
         path: 'holidays',
         showListActions: true,
      },
      charities: {
         path: 'charities',
         showListActions: true,
      },
      charitiesById: {
         path: 'charities/:charityId',
      },
      profile: {
         path: 'profile',
         breadcrumb: 'Профиль',
      },
      edit: {
         path: 'edit',
         breadcrumb: 'Рассказать о себе',
      },
      mailing: {
         path: 'mailing',
         breadcrumb: 'Рассылка',
         buttonContent: 'Отправить рассылку',
         showActionsButton: true,
         onClick: () => {
            providerEvent({ action: 'mailingsModalOpen', payload: true })
         },
      },
      innerMailing: {
         path: 'mailing/:mailingId',
      },
      'my-holidays': {
         path: 'my-holidays',
         breadcrumb: 'Mои праздники',
         buttonContent: 'Добавить праздник',
         showActionsButton: true,
         onClick: () => {
            providerEvent({ action: 'my-holidaysModalOpen', payload: true })
         },
      },
      holidayInnerPage: { path: 'my-holidays/:holidayId' },
   },
}
