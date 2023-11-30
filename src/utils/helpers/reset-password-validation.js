import * as yup from 'yup'
import YupPassword from 'yup-password'
// import { valueIsNotEmpty } from './update-profile-validations'

YupPassword(yup)

export const resetPasswordValidationSchema = yup.object().shape({
   newPassword: yup
      .string()
      .required('Введите новый пароль')
      .min(8, 'Пароль должен быть не менее из 8-и символов')
      .minUppercase(1, 'Пароль должен содержать хотя бы 1 большой символ')
      .minSymbols(1, 'Пароль должен содержать такие символы как $ или /')
      .notOneOf([yup.ref('oldPassword'), null], 'Пароли не должны совпадать'),
   // email: yup
   //    .string()
   //    .required('Введите электронную почту.')
   //    .test('check-the-main-symbol: @', 'Введите @', (value) =>
   //       value.includes('@')
   //    )
   //    .test(
   //       'length',
   //       'Почта слишком длинная',
   //       (value) => valueIsNotEmpty(value) && value.length <= 255
   //    )
   //    .test(
   //       'local-part-dot-start',
   //       'Имя пользователя не может начинаться с точки.',
   //       (value) => !value?.split('@')[0]?.startsWith('.')
   //    )
   //    .test(
   //       'local-part-dot-end',
   //       'Имя пользователя не может заканчиваться точкой.',
   //       (value) => !value?.split('@')[0]?.endsWith('.')
   //    )
   //    .test(
   //       'local-part-length',
   //       'Имя пользователя не может содержать больше 64 символов.',
   //       (value) => valueIsNotEmpty(value) && value?.length <= 64
   //    )
   //    .test(
   //       'local-part-includes-queue-dot',
   //       'Имя пользователя не может содержать двух точек последовательно.',
   //       (value) => !value?.split('@')[0].includes('..')
   //    )
   //    .test(
   //       'domain-before-dot-start-with',
   //       'Домейн не может начинаться с точки.',
   //       (value) => !value?.split('@')[1]?.startsWith('.')
   //    )
   //    .test(
   //       'domain-before-dot-end-with',
   //       'Домейн не может заканчиваться точкой.',
   //       (value) => !value?.split('@')[1]?.endsWith('.')
   //    )
   //    .test(
   //       'domain-after-@',
   //       'После символа @ должно быть что-то написано.',
   //       (value) => valueIsNotEmpty(value.split('@')[1])
   //    ),
   confirmPassword: yup
      .string()
      .required('Повторите новый пароль')
      .oneOf([yup.ref('newPassword'), null], 'Пароли не совпадают'),
})
