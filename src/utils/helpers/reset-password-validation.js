import * as yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(yup)

export const resetPasswordValidationSchema = yup.object().shape({
   newPassword: yup
      .string()
      .required('Введите новый пароль')
      .min(8, 'Пароль должен быть не менее из 8-и символов')
      .minUppercase(1, 'Пароль должен содержать хотя бы 1 большой символ')
      .minSymbols(1, 'Пароль должен содержать такие символы как $ или /')
      .notOneOf([yup.ref('oldPassword'), null], 'Пароли не должны совпадать'),
   confirmPassword: yup
      .string()
      .required('Повторите новый пароль')
      .oneOf([yup.ref('newPassword'), null], 'Пароли не совпадают'),
})

export const changePasswordValidationSchema = yup.object().shape({
   oldPassword: yup
      .string()
      .required('Введите старый пароль')
      .min(8, 'Пароль должен быть не менее из 8-и символов')
      .minUppercase(1, 'Пароль должен содержать хотя бы 1 большой символ')
      .minSymbols(1, 'Пароль должен содержать такие символы как $ или /'),
   newPassword: yup
      .string()
      .required('Введите новый пароль')
      .min(8, 'Пароль должен быть не менее из 8-и символов')
      .minUppercase(1, 'Пароль должен содержать хотя бы 1 большой символ')
      .minSymbols(1, 'Пароль должен содержать такие символы как $ или /')
      .notOneOf([yup.ref('oldPassword'), null], 'Пароли не должны совпадать'),
   confirmPassword: yup
      .string()
      .required('Повторите новый пароль')
      .oneOf([yup.ref('newPassword'), null], 'Пароли не совпадают'),
})
