/* eslint-disable consistent-return */
import React, { useState } from 'react'
import { Box, Link, Typography, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import {
   CloseModalIcon,
   ContinueWithGoogle,
   EyeClose,
   EyeOpen,
} from '../assets'
import { Button } from './UI/Button'
import { Input } from './UI/input/Input'
import { Checkbox } from './UI/Checkbox'

export const SignUp = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm()

   const onSubmit = () => {}

   // password state

   const [
      visibleAndInvisiblePasswordState,
      setVisibleAndInvisiblePasswordState,
   ] = useState(false)

   const changePasswordVisibleInvisibleStateHandler = () => {
      setVisibleAndInvisiblePasswordState((prevState) => !prevState)
   }

   // confirm password state

   const [
      visibleAndInvisibleConfirmPasswordState,
      setVisibleAndInvisibleConfirmPasswordState,
   ] = useState(false)

   const changeConfirmVisibleInvisibleStateHandler = () => {
      setVisibleAndInvisibleConfirmPasswordState((prevState) => !prevState)
   }
   return (
      <SignUpForm component="form">
         <FormTitleAndCloseIcon>
            <FormTitle variant="h4">Регистрация</FormTitle>
            <CloseModalIcon style={{ cursor: 'pointer' }} />
         </FormTitleAndCloseIcon>
         <Input
            placeholder="Имя"
            type="text"
            {...register('firstName', {
               required: 'Это обязательное поле',
            })}
            helperText={errors.firstName?.message}
            error={Boolean(errors.firstName)}
         />
         <Input
            placeholder="Фамилия"
            type="text"
            {...register('lastName', {
               required: 'Это обязательное поле',
            })}
            helperText={errors.lastName?.message}
            error={Boolean(errors.lastName)}
         />
         <Input
            placeholder="Email"
            type="email"
            {...register('email', {
               required: 'Это обязательное поле',
            })}
            helperText={errors.email?.message}
            error={Boolean(errors.email)}
         />
         <Input
            placeholder="password"
            type={visibleAndInvisiblePasswordState ? 'text' : 'password'}
            {...register('password', {
               required: 'Это обязательное поле',
            })}
            helperText={errors.password?.message}
            error={Boolean(errors.password)}
            InputProps={{
               endAdornment: visibleAndInvisiblePasswordState ? (
                  <EyeOpen
                     style={{ cursor: 'pointer' }}
                     onClick={changePasswordVisibleInvisibleStateHandler}
                  />
               ) : (
                  <EyeClose
                     style={{ cursor: 'pointer' }}
                     onClick={changePasswordVisibleInvisibleStateHandler}
                  />
               ),
            }}
         />
         <Input
            placeholder="Потдвердите пароль"
            type={visibleAndInvisibleConfirmPasswordState ? 'text' : 'password'}
            {...register('confirmPassword', {
               required: 'Это обязательное поле',
               validate: (value) => {
                  if (watch('password') !== value) {
                     return 'Пароли не совпадают'
                  }
               },
            })}
            helperText={errors.confirmPassword?.message}
            error={Boolean(errors.confirmPassword)}
            InputProps={{
               endAdornment: visibleAndInvisibleConfirmPasswordState ? (
                  <EyeOpen
                     style={{ cursor: 'pointer' }}
                     onClick={changeConfirmVisibleInvisibleStateHandler}
                  />
               ) : (
                  <EyeClose
                     style={{ cursor: 'pointer' }}
                     onClick={changeConfirmVisibleInvisibleStateHandler}
                  />
               ),
            }}
         />
         <Checkbox labelTitle="Подписаться на рассылку" />
         <SignInButton onClick={handleSubmit(onSubmit)} variant="primary">
            Создать аккаунт
         </SignInButton>
         <ForgotPasswordLink variant="a" href="/">
            Забыли пароль?
         </ForgotPasswordLink>
         <OrContainer component="div">
            <Line component="div" />
            <p>или</p>
            <Line component="div" />
         </OrContainer>
         <ContinueWithGoogleButton>
            <ContinueWithGoogle />
            Продолжить с Google
         </ContinueWithGoogleButton>
         <SignUpLink>
            Нет аккаунта? <Link href="/">Зарегистрироваться</Link>
         </SignUpLink>
      </SignUpForm>
   )
}

const SignUpForm = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '30.125rem',
   margin: '0 auto',
})

const FormTitleAndCloseIcon = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

const FormTitle = styled(Typography)({
   fontWeight: '500',
   fontSize: '24px',
})

const ForgotPasswordLink = styled(Link)({
   color: '#3772FF',
   textDecoration: 'none',
   textAlign: 'center',
   display: 'block',
})

const SignUpLink = styled(Typography)({
   textAlign: 'center',
   a: {
      textDecoration: 'none',
      color: '#3772FF',
   },
})

const SignInButton = styled(Button)({
   display: 'block',
   width: '100%',
   border: 'none',
   ':hover': {
      border: 'none',
   },
})
const ContinueWithGoogleButton = styled(Button)({
   display: 'flex',
   width: '100%',
   color: 'black',
   background: '#F1F1F1',
   border: 'none',
   gap: '1.313rem',
   ':hover': {
      border: 'none',
   },
})
const OrContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '1.313rem',
})
const Line = styled(Box)({
   border: '1px solid #F1F1F1',
   height: '0px',
   width: '10.875rem',
})
