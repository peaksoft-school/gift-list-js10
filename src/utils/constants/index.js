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
      thingFromFeedById: {
         path: 'feed/:thingId',
         breadcrumb: '',
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
      email: 'user2@gmail.com',
      role: 'USER',
      token: 'token',
   },
   {
      id: 3,
      password: '1234',
      email: 'user3@gmail.com',
      role: 'USER',
      token: 'token',
      fullName: 'Adia Karimova',
   },
   {
      id: 5,
      password: '1234',
      email: 'user5@gmail.com',
      role: 'USER',
      token: 'token',
      fullName: 'Adia Karimova',
   },
]
