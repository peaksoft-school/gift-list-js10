import React, { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import {
   CloseModalIcon,
   ContinueWithGoogle,
   EyeClose,
   EyeOpen,
} from '../assets'
import { Button } from './UI/Button'
import { Input } from './UI/input/Input'
import { Checkbox } from './UI/Checkbox'
import { signUpValidationSchema } from '../utils/helpers/auth-validations'
import { routes } from '../utils/constants'

export const SignUp = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(signUpValidationSchema),
   })

   const navigate = useNavigate()

   const onSubmit = () => {
      navigate(routes.WELCOME)
   }
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
      <MainContainer component="div">
         <SignUpForm component="form" onSubmit={handleSubmit(onSubmit)}>
            <FormTitleAndCloseIcon>
               <FormTitle variant="h4">Регистрация</FormTitle>
               <StyledCloseModalIcon />
            </FormTitleAndCloseIcon>
            <Input
               placeholder="Имя"
               {...register('name')}
               helperText={errors.name?.message}
               error={Boolean(errors.name)}
            />
            <Input
               placeholder="Фамилия"
               {...register('surname')}
               helperText={errors.surname?.message}
               error={Boolean(errors.surname)}
            />
            <Input
               placeholder="Email"
               {...register('email')}
               helperText={errors.email?.message}
               error={Boolean(errors.email)}
            />
            <Input
               placeholder="password"
               type={visibleAndInvisiblePasswordState ? 'text' : 'password'}
               {...register('password')}
               helperText={errors.password?.message}
               error={Boolean(errors.password)}
               InputProps={{
                  endAdornment: visibleAndInvisiblePasswordState ? (
                     <StyledOpenedEye
                        onClick={changePasswordVisibleInvisibleStateHandler}
                     />
                  ) : (
                     <StyledClosedEye
                        onClick={changePasswordVisibleInvisibleStateHandler}
                     />
                  ),
               }}
            />
            <Input
               placeholder="Потдвердите пароль"
               type={
                  visibleAndInvisibleConfirmPasswordState ? 'text' : 'password'
               }
               {...register('confirmPassword')}
               helperText={errors.confirmPassword?.message}
               error={Boolean(errors.confirmPassword)}
               InputProps={{
                  endAdornment: visibleAndInvisibleConfirmPasswordState ? (
                     <StyledOpenedEye
                        onClick={changeConfirmVisibleInvisibleStateHandler}
                     />
                  ) : (
                     <StyledClosedEye
                        onClick={changeConfirmVisibleInvisibleStateHandler}
                     />
                  ),
               }}
            />
            <Checkbox labelTitle="Подписаться на рассылку" />
            <SignInButton onClick={handleSubmit(onSubmit)} variant="primary">
               Создать аккаунт
            </SignInButton>
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
               Уже имеете существующий аккаунт?
               <Link to={routes.LOGIN}> Войти</Link>
            </SignUpLink>
         </SignUpForm>
      </MainContainer>
   )
}

const MainContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
})

const SignUpForm = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '30.125rem',
})

const FormTitleAndCloseIcon = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

const StyledOpenedEye = styled(EyeOpen)({
   cursor: 'pointer',
})

const StyledClosedEye = styled(EyeClose)({
   cursor: 'pointer',
})

const StyledCloseModalIcon = styled(CloseModalIcon)({
   cursor: 'pointer',
})

const FormTitle = styled(Typography)({
   fontWeight: '500',
   fontSize: '1.5rem',
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
