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
<<<<<<< HEAD
      wish: {
         path: 'wish',
         breadcrumb: 'Список желаний',
      },
      addWish: {
         path: 'addWish',
         breadcrumb: 'Добавление желания',
=======
      feed: {
         path: 'feed',
         breadcrumb: 'Лента',
         headerSelectType: 'select',
>>>>>>> 079742bf4d46936e6856ac1ba75d0e113ee8ca53
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
      id: 2,
      password: '1234',
      email: 'user@gmail.com',
      role: 'USER',
      token: 'token',
   },
]
