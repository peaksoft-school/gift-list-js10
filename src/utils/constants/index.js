export const USER_KEY = 'GIFT-LIST_USER_KEY'

export const routes = {
   LOGIN: '/login',
   ADMIN: {
      path: '/admin',
      users: {
         path: 'users',
         breadcrumb: 'Пользователи',
      },
   },
   USER: {
      path: '/user',
      feed: {
         path: 'feed',
         breadcrumb: 'Лента',
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
         path: 'friends/:userId',
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
   },
}

export const users = [
   {
      id: 1,
      password: '1234',
      email: 'admin@gmail.com',
      role: 'ADMIN',
      token: 'token',
      fullName: 'Naruto Uzumaki',
   },
   {
      id: 2,
      password: '1234',
      email: 'user@gmail.com',
      role: 'USER',
      token: 'token',
      fullName: 'Adia Karimova',
   },
]
