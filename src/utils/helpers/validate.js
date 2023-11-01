import * as yup from 'yup'

export const wishListSchema = yup.object().shape({
   holidayName: yup.string().required('Поле не должен быть пустым!'),
   link: yup.string().required('Поле не должен быть пустым!'),
   description: yup
      .string()
      .required('Поле не должен быть пустым!')
      .min(20, 'Введите не менее 20 символов'),

   holiday: yup.string().required('Выберите один из вариантов'),
})
