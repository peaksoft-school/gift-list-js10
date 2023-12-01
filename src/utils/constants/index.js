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
      },
      charity: {
         path: 'charity',
         breadcrumb: 'Благотворительность',
         headerSelectType: 'select',
         buttonContent: 'Добавить подарок',
         onClick: (navigate) => navigate('charity/addCharity'),
      },
      charityById: {
         path: 'charity/:charityId/:ownerId',
         headerSelectType: 'select',
      },
      addOrEditCharity: {
         path: 'charity/:charityId/:ownerId/addOrEditCharity',
         breadcrumb: 'Добавить подарок',
         headerSelectType: 'select',
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
