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
      charity: {
         path: 'charity',
         breadcrumb: 'Благотворительность',
         headerSelectType: 'select',
      },
      charityById: {
         path: 'charity/:charityId',
         headerSelectType: 'select',
      },
   },
   USER: {
      path: '/user',
      feed: {
         path: 'feed',
         breadcrumb: 'Лента',
         showListActions: true,
      },
      charity: {
         path: 'charity',
         breadcrumb: 'Благотворительность',
         headerSelectType: 'select',
         buttonContent: 'Добавить подарок',
         onClick: (navigate) => navigate('charity/addCharity'),
      },
      charityById: {
         path: 'charity/:charityId',
         headerSelectType: 'select',
      },
      editCharity: {
         path: 'charity/editCharity',
         breadcrumb: 'Обновить подарок',
         headerSelectType: 'select',
         showListActions: true,
      },
      addCharity: {
         path: 'charity/addCharity',
         breadcrumb: 'Добавить подарок',
         headerSelectType: 'select',
         showListActions: true,
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
      'wish-list': {
         path: 'wish-list',
      },
   },
}
