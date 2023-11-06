import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Link, Typography, styled } from '@mui/material'
import {
   CloseModalIcon,
   ContinueWithGoogle,
   EyeOpen,
   EyeClose,
} from '../assets'
import { Input } from './UI/input/Input'
import { Checkbox } from './UI/Checkbox'
import { Button } from './UI/Button'

export const SignIn = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const onSubmit = () => {}

   const [
      visibleAndInvisiblePasswordState,
      setVisibleAndInvisiblePasswordState,
   ] = useState(false)

   // password state

   const changePasswordVisibleInvisibleStateHandler = () => {
      setVisibleAndInvisiblePasswordState((prevState) => !prevState)
   }
   return (
      <MainContainer component="div">
         <SignInForm component="div" onSubmit={handleSubmit(onSubmit)}>
            <FormTitleAndCloseIcon>
               <FormTitle variant="h4">Вход</FormTitle>
               <StyledCloseModalIcon />
            </FormTitleAndCloseIcon>
            <SignInInput
               type="email"
               placeholder="Email"
               {...register('email', {
                  required: 'Поле обязательно к заполнению',
               })}
               helperText={errors.email?.message}
               error={Boolean(errors.email)}
            />
            <SignInInput
               type={visibleAndInvisiblePasswordState ? 'text' : 'password'}
               placeholder="Пароль"
               {...register('password', {
                  required: 'Поле обязательно к заполнению',
               })}
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
               helperText={errors.password?.message}
               error={Boolean(errors.password)}
            />
            <Checkbox labelTitle="Запомнить меня" />
            <SignInButton onClick={handleSubmit(onSubmit)} variant="primary">
               Войти
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
         </SignInForm>
      </MainContainer>
   )
}

const MainContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
})

const SignInForm = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '30.125rem',
})

const SignInButton = styled(Button)({
   display: 'block',
   width: '100%',
   border: 'none',
   ':hover': {
      border: 'none',
   },
})

const SignInInput = styled(Input)({
   padding: '0',
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

const FormTitle = styled(Typography)({
   fontWeight: '500',
   fontSize: '1.5rem',
})

const FormTitleAndCloseIcon = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
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
