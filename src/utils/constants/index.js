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
      users: {
         path: 'users',
         breadcrumb: 'Пользователи',
      },
      complaints: {
         path: 'complaints',
         breadcrumb: 'Жалобы',
      },
      innerComplaint: {
         path: 'complaints/:wishId',
      },
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
      },
      holidays: {
         path: 'holidays',
      },
      charities: {
         path: 'charities',
         showListActions: true,
      },
      profile: {
         path: 'profile',
         breadcrumb: 'Профиль',
      },
      edit: {
         path: 'edit',
         breadcrumb: 'Рассказать о себе',
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
      holidayInnerPage: {
         path: 'my-holidays/:holidayId',
      },
   },
}
