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
         headerSelectType: '',
         showListActions: true,
      },
      thingFromFeedById: {
         path: 'feed/:thingId',
         breadcrumb: '',
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
   },
   {
      id: 5,
      password: '1234',
      email: 'user@gmail.com',
      role: 'USER',
      token: 'token',
   },
]
