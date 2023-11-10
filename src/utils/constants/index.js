export const USER_KEY = 'GIFT-LIST_USER_KEY'

export const routes = {
   LOGIN: '/login',
   REGISTRATION: '/registration',
   FORGOTPASSWORD: '/forgot-password',
   RESETPASSWORD: '/reset-password',
   WELCOME: '/main',
   ADMIN: {
      path: '/admin',
   },
   USER: {
      path: '/user',
   },
}

export const users = [
   {
      password: '12345678A/',
      email: 'user@gmail.com',
      role: 'USER',
      token: 'token',
   },
   {
      password: '12345678A/',
      email: 'admin@gmail.com',
      role: 'ADMIN',
      token: 'token',
   },
]
