import * as yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(yup)

export const resetPasswordValidationSchema = yup.object().shape({
   password: yup
      .string()
      .required('Введите пароль')
      .min(8, 'Пароль должен быть не менее из 8-и символов')
      .minUppercase(1, 'Пароль должен содержать хотя бы 1 большой символ')
      .minSymbols(1, 'Пароль должен содержать такие символы как $ или /'),
   confirmPassword: yup
      .string()
      .required('Повторите пароль')
      .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
})
