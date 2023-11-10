import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
   CloseModalIcon,
   ContinueWithGoogle,
   EyeClose,
   EyeOpen,
} from '../assets'
import { login } from '../store/slices/authSlice'
import { loginQuery } from '../store/slices/authThunk'
import { USER_KEY, routes } from '../utils/constants'
import { Button } from './UI/Button'
import { Checkbox } from './UI/Checkbox'
import { Input } from './UI/input/Input'
import { signInValidationSchema } from '../utils/helpers/auth-validations'

export const SignIn = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(signInValidationSchema),
   })

   const [isRememberMeChecked, setIsRememberMeChecked] = useState(false)

   const rememberMeCheckedHandler = () => {
      setIsRememberMeChecked((prevState) => !prevState)
   }
   // console.log(register)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onSubmit = (values) => {
      try {
         dispatch(
            loginQuery({
               userData: values,
               navigate,
               login,
               isRememberMeChecked,
            })
         )
      } catch (error) {
         return error
      }
      return 'hello'
   }

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem(USER_KEY))
      if (user !== null) {
         navigate(routes[user.role].path)
      }
   }, [dispatch])

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
         <SignInForm onSubmit={handleSubmit(onSubmit)}>
            <FormTitleAndCloseIcon>
               <FormTitle variant="h4">Вход</FormTitle>
               <StyledCloseModalIcon />
            </FormTitleAndCloseIcon>
            <SignInInput
               placeholder="Email"
               {...register('email')}
               helperText={errors.email?.message}
               error={Boolean(errors.email)}
            />
            <SignInInput
               type={visibleAndInvisiblePasswordState ? 'text' : 'password'}
               placeholder="Пароль"
               {...register('password')}
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
            <StyledCheckbox
               onChange={rememberMeCheckedHandler}
               labelTitle="Запомнить меня"
            />
            <SignInButton variant="primary" type="submit">
               Войти
            </SignInButton>
            <ForgotPasswordLink to={routes.FORGOTPASSWORD}>
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
               Нет аккаунта?
               <Link to={routes.REGISTRATION}> Зарегистрироваться</Link>
            </SignUpLink>
         </SignInForm>
      </MainContainer>
   )
}

const MainContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
})

const SignInForm = styled('form')({
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

const StyledCheckbox = styled(Checkbox)({
   width: '10.5rem',
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
