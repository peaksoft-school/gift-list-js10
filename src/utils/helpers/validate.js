import * as yup from 'yup'

export const wishListSchema = yup.object().shape({
   wishName: yup.string().required('Поле не должен быть пустым!'),
   link: yup.string().required('Поле не должен быть пустым!'),
   description: yup
      .string()
      .required('Поле не должен быть пустым!')
      .min(20, 'Введите не менее 20 символов'),

   holiday: yup.object().shape({
      value: yup.string().required('status is required'),
   }),
})
