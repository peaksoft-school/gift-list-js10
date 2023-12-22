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
         showListActions: true,
      },
      holidays: {
         path: 'holidays',
         showListActions: true,
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
      wish: {
         path: 'wish',
         showListActions: 'true',
         buttonContent: 'Добавить желание',
         breadcrumb: 'Список желаний',
         onClick: (navigate) => navigate('wish/addWish'),
      },
      addWish: {
         path: 'wish/addWish',
         breadcrumb: 'Добавление желания',
      },
      putWish: {
         path: 'wish/putWish',
         breadcrumb: 'Редактировать Желание',
      },
      getWishById: {
         path: 'wish/:wishId',
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
