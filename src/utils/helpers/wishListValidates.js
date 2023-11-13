import * as yup from 'yup'

export const wishListSchema = yup.object().shape({
   holidayName: yup.string().required('Поле не должно быть пустым!'),
   link: yup
      .string()
      .required('Поле не должно быть пустым!')
      .when({
         is: (value) => value?.trim().length,
         then: (rule) =>
            rule.test('check-url', 'Введите действительную ссылку.', (value) =>
               /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(value)
            ),
      }),
   description: yup
      .string()
      .required('Поле не должно быть пустым!')
      .min(20, 'Введите не менее 20 символов'),
   holiday: yup.string().required('Выберите праздник'),
})

export const variantSchema = yup.object().shape({
   holidayName: yup.string().required('Поле не должно быть пустым!'),
   state: yup.string().required('Укажите состояние'),
   category: yup.string().required('Выберите категорию'),
   subCategory: yup.string().required('Выберите подкатегорию'),
   description: yup
      .string()
      .required('Поле не должно быть пустым!')
      .min(20, 'Введите не менее 20 символов'),
})
