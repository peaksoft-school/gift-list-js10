export const USER_KEY = 'GIFT-LIST_USER_KEY'

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
   },
   USER: {
      path: '/user',
      feed: {
         path: 'feed',
         breadcrumb: 'Лента',
         headerSelectType: 'select',
      },
   },
}

// export const users = [
//    {
//       id: 1,
//       password: '12345678A/',
//       email: 'admin@gmail.com',
//       role: 'ADMIN',
//       token: 'token',
//    },
//    {
//       id: 2,
//       password: '12345678A/',
//       email: 'user@gmail.com',
//       role: 'USER',
//       token: 'token',
//    },
// ]
