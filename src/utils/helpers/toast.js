import { styled } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../../assets'
import 'react-toastify/dist/ReactToastify.css'

export const notifyTypes = {
   NOTIFY_TYPE_SUCCESS_INFO: 'info',
   NOTIFY_TYPE_SUCCESS_SUCCESS: 'success',
   NOTIFY_TYPE_ERROR_WARNING: 'warn',
   NOTIFY_TYPE_ERROR_ERROR: 'error',
}

const notifyStyles = {
   [notifyTypes.NOTIFY_TYPE_ERROR_ERROR]: {
      mainColor: '#E53535',
      backgroundColor: '#ffebeb',
      borderColor: '#BC2C2C',
   },
   [notifyTypes.NOTIFY_TYPE_SUCCESS_INFO]: {
      mainColor: '#3772FF',
      borderColor: '#375BB0',
      backgroundColor: '#EBEFF7',
   },
   [notifyTypes.NOTIFY_TYPE_ERROR_WARNING]: {
      mainColor: '#FF8800',
      borderColor: '#ED9E44',
      backgroundColor: '#FFF3D8',
   },
   [notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS]: {
      mainColor: '#328048',
      borderColor: '#C6F0C2',
      backgroundColor: '#EAFBE7',
   },
}

const notifyIcons = {
   [notifyTypes.NOTIFY_TYPE_ERROR_ERROR]: <ErrorIcon />,
   [notifyTypes.NOTIFY_TYPE_SUCCESS_INFO]: <InfoIcon />,
   [notifyTypes.NOTIFY_TYPE_ERROR_WARNING]: <WarningIcon />,
   [notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS]: <SuccessIcon />,
}

export const toastWithPromise = (
   notifyTypeForError,
   notifyTypeForSuccess,
   successTitleOfMessage,
   successDescriptionOfMessage,
   errorTitleOfMessage,
   promise
) => {
   const {
      mainColor: successMainColor,
      backgroundColor: successBackgroundColor,
      borderColor: succcessBorderColor,
   } = notifyStyles[notifyTypeForSuccess]

   const {
      mainColor: errorMainColor,
      backgroundColor: errorBackgroundColor,
      borderColor: errorBorderColor,
   } = notifyStyles[notifyTypeForError]

   return toast.promise(promise, {
      pending: {
         render() {
            return 'Loading...'
         },
         toastId: 'toastPending',
      },
      success: {
         render() {
            return (
               <Container>
                  <IconWrapper>{notifyIcons[notifyTypeForSuccess]}</IconWrapper>
                  <TextContainer mainColor={successMainColor}>
                     <p>{successTitleOfMessage}</p>
                     <p>{successDescriptionOfMessage}</p>
                  </TextContainer>
               </Container>
            )
         },
         style: {
            backgroundColor: successBackgroundColor,
            border: `1px solid ${succcessBorderColor}`,
         },
         icon: false,
         progressStyle: {
            background: successMainColor,
         },
         toastId: 'toastSuccess',
      },
      error: {
         render({ data }) {
            let message
            if (typeof data === 'string') {
               message = data
            } else if (data.response.data.message) {
               message = data.response.data.message
            } else if (data.message) {
               message = data.message
            }
            return (
               <Container>
                  <IconWrapper>{notifyIcons[notifyTypeForError]}</IconWrapper>
                  <TextContainer mainColor={errorMainColor}>
                     <p>{errorTitleOfMessage}</p>
                     <p>{message}</p>
                  </TextContainer>
               </Container>
            )
         },
         style: {
            backgroundColor: errorBackgroundColor,
            border: `1px solid ${errorBorderColor}`,
         },
         icon: false,
         progressStyle: {
            background: errorMainColor,
         },
         toastId: 'toastError',
      },
   })
}

export const toastWithoutPromise = (type, title, message) => {
   const { mainColor, backgroundColor, borderColor } = notifyStyles[type]
   return toast[type](
      <Container>
         <IconWrapper>{notifyIcons[type]}</IconWrapper>
         <TextContainer mainColor={mainColor}>
            <p>{title}</p>
            <p>{message}</p>
         </TextContainer>
      </Container>,
      {
         icon: false,
         style: {
            backgroundColor,
            border: `1px solid ${borderColor}`,
         },
         progressStyle: {
            background: mainColor,
         },
         toastId: 'toast1',
      }
   )
}

const IconWrapper = styled('div')({
   width: '1.50rem',
   height: '1.25rem',
})

const Container = styled('div')({
   display: 'flex',
   gap: '10px',
})

const TextContainer = styled('div')(({ mainColor }) => {
   return {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      'p:first-of-type': {
         color: mainColor,
         fontWeight: '500',
      },
      'p:last-of-type': {
         color: '#000000',
         fontWeight: '400',
      },
   }
})

export const StyledToastContainer = styled(ToastContainer)({
   minWidth: '25%',
})
