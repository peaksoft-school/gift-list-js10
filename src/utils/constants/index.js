export const USER_KEY = 'GIFT-LIST_USER_KEY'

export const routes = {
   LOGIN: '/login',
   ADMIN: {
      path: '/admin',
      users: {
         path: 'users',
         breadcrumb: 'Пользователи',
      },
      charity: {
         path: 'charity',
         breadcrumb: 'Благотворительность',
         headerSelectType: 'select',
      },
      charityById: {
         path: 'charity/:charityId',
         headerSelectType: 'select',
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
         path: 'charity/:charityId',
         headerSelectType: 'select',
      },
      editCharity: {
         path: 'charity/editCharity',
         breadcrumb: 'Обновить подарок',
         headerSelectType: 'select',
         showListActions: true,
      },
      addCharity: {
         path: 'charity/addCharity',
         breadcrumb: 'Добавить подарок',
         headerSelectType: 'select',
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
      id: 5,
      password: '1234',
      email: 'user@gmail.com',
      role: 'USER',
      token: 'token',
      fullName: 'Adia Karimova',
   },
]
