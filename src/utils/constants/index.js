export const USER_KEY = 'GIFT-LIST_USER_KEY'

export const routes = {
   LOGIN: '/login',
   ADMIN: {
      path: '/admin',
   },
   USER: {
      path: '/user',
      wish: {
         path: 'wish',
         breadcrumb: 'Список желаний',
      },
      addWish: {
         path: 'addWish',
         breadcrumb: 'Добавление желания',
      },
   },
}

export const users = [
   {
      password: '1234',
      email: 'user@gmail.com',
      role: 'USER',
      token: 'token',
   },
   {
      password: '1234',
      email: 'admin@gmail.com',
      role: 'ADMIN',
      token: 'token',
   },
]
