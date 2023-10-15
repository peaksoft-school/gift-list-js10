import { styled } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../../assets'
import 'react-toastify/dist/ReactToastify.css'

export const notifyTypes = {
   NOTIFY_TYPE_INFO: 'info',
   NOTIFY_TYPE_SUCCESS: 'success',
   NOTIFY_TYPE_WARNING: 'warn',
   NOTIFY_TYPE_ERROR: 'error',
}

const notifyStyles = {
   [notifyTypes.NOTIFY_TYPE_ERROR]: {
      mainColor: '#E53535',
      backgroundColor: '#ffebeb',
      borderColor: '#BC2C2C',
   },
   [notifyTypes.NOTIFY_TYPE_INFO]: {
      mainColor: '#3772FF',
      borderColor: '#375BB0',
      backgroundColor: '#EBEFF7',
   },
   [notifyTypes.NOTIFY_TYPE_WARNING]: {
      mainColor: '#FF8800',
      borderColor: '#ED9E44',
      backgroundColor: '#FFF3D8',
   },
   [notifyTypes.NOTIFY_TYPE_SUCCESS]: {
      mainColor: '#328048',
      borderColor: '#C6F0C2',
      backgroundColor: '#EAFBE7',
   },
}

const notifyIcons = {
   [notifyTypes.NOTIFY_TYPE_ERROR]: <ErrorIcon />,
   [notifyTypes.NOTIFY_TYPE_INFO]: <InfoIcon />,
   [notifyTypes.NOTIFY_TYPE_WARNING]: <WarningIcon />,
   [notifyTypes.NOTIFY_TYPE_SUCCESS]: <SuccessIcon />,
}

export const notifyWithPromise = (
   type,
   promise,
   titleOfMessage,
   descriptionOfMessage
) => {
   const notifyStyleType = notifyStyles[type]
   toast.promise(promise, {
      pending: {
         render() {
            return 'Loading...'
         },
      },
      success: {
         render() {
            return (
               <Container>
                  <IconWrapper>{notifyIcons[type]}</IconWrapper>
                  <TextContainer notifyStyle={notifyStyleType}>
                     <p>{titleOfMessage}</p>
                     <p>{descriptionOfMessage}</p>
                  </TextContainer>
               </Container>
            )
         },
         style: {
            backgroundColor: notifyStyleType.backgroundColor,
            border: `1px solid ${notifyStyleType.borderColor}`,
         },
         icon: false,
         progressStyle: {
            background: notifyStyleType.mainColor,
         },
      },
      error: {
         render() {
            return (
               <Container>
                  <IconWrapper>{notifyIcons[type]}</IconWrapper>
                  <TextContainer notifyStyle={notifyStyleType}>
                     <p>{titleOfMessage}</p>
                     <p>{descriptionOfMessage}</p>
                  </TextContainer>
               </Container>
            )
         },
         style: {
            backgroundColor: notifyStyleType.backgroundColor,
            border: `1px solid ${notifyStyleType.borderColor}`,
         },
         icon: false,
         progressStyle: {
            background: notifyStyleType.mainColor,
         },
      },
   })
}

const IconWrapper = styled('div')({
   width: '1.50rem',
   height: '1.25rem',
})

const Container = styled('div')({
   display: 'flex',
   gap: '10px',
})

const TextContainer = styled('div')(({ notifyStyle }) => {
   return {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      'p:first-of-type': {
         color: notifyStyle.mainColor,
         fontWeight: '500',
      },
      'p:last-of-type': {
         color: '#000000',
         fontWeight: '400',
      },
   }
})

export const StyledToastContainer = styled(ToastContainer)({
   minWidth: '40%',
})
