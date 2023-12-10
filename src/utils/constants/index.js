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
         headerSelectType: 'select',
      },
      wish: {
         path: 'wish',
         showListActions: 'true',
         buttonText: 'Добавить желание',
         breadcrumb: 'Список желаний',
         onClick: (navigate) => navigate('wish/addWish'),
      },
      addWish: {
         path: 'wish/addWish',
         breadcrumb: 'Добавление желания',
      },
      putWish: {
         path: 'wish/putWish/:wishId',
         breadcrumb: 'Редактировать Желание',
      },
      getWIshBYId: {
         path: 'wish/getById',
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
      id: 3,
      password: '1234',
      email: 'user@gmail.com',
      role: 'USER',
      token: 'token',
   },
]
