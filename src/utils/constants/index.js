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
         // headerSelectType: 'select',
         showListActions: true,
      },
      profile: {
         path: 'profile',
         breadcrumb: 'Профиль',
         listActions: false,
      },
      edit: {
         path: 'edit',
         breadcrumb: 'Рассказать о себе',
         // listActions: false,
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
