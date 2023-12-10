import {
   SamatOkenov,
   Ellipse,
   Aida,
   Askar,
   EditOptionsIcon,
   DeleteOptionsIcon,
} from '../../assets'

export const notifications = [
   {
      name: 'Самат Окенов',
      id: '1',
      image: SamatOkenov,
      description: ' добавил желаемый подарок',
      date: '25.05.2022',
   },
   {
      name: 'Название подарка ',
      id: '2',
      image: Ellipse,
      description: ' было забронировано анонимным пользователем',
      date: '25.05.2022',
   },
   {
      name: 'Название подарка',
      id: '3',
      image: Aida,
      description: ' было забронировано Аида Мамытбек',
      date: '25.05.2022',
   },
   {
      name: 'Аскар Оморов ',
      id: '4',
      image: Askar,
      description: 'отправил запрос в друзья',
      date: '25.05.2022',
   },
   {
      name: 'Аскар Оморов ',
      id: '5',
      image: Askar,
      description: 'отправил запрос в друзья',
      date: '25.05.2022',
   },
   {
      name: 'Аскар Оморов ',
      id: '6',
      image: Askar,
      description: 'отправил запрос в друзья',
      date: '25.05.2022',
   },
]

export const wishOptions = [
   {
      title: 'Редактировать',
      icon: <EditOptionsIcon />,
   },
   {
      title: 'Удалить',
      icon: <DeleteOptionsIcon />,
   },
]

export const isValidDateFormat = (formattedDate) => {
   const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/
   return dateRegex.test(formattedDate)
}
