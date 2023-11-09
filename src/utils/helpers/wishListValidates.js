import * as yup from 'yup'

export const wishListSchema = yup.object().shape({
   holidayName: yup.string().required('Поле не должно быть пустым!'),
   link: yup.string().required('Поле не должно быть пустым!'),
   description: yup
      .string()
      .required('Поле не должно быть пустым!')
      .min(20, 'Введите не менее 20 символов'),

   holiday: yup.string().required('Выберите один из вариантов'),
})

export const variantSchema = yup.object().shape({
   holidayName: yup.string().required('Поле не должно быть пустым!'),
   state: yup.string().required('Выберите один из вариантов'),
   category: yup.string().required('Выберите один из вариантов'),
   subCategory: yup.string().required('Выберите один из вариантов'),
   description: yup
      .string()
      .required('Поле не должно быть пустым!')
      .min(20, 'Введите не менее 20 символов'),
})
