import {
   ComplaintIcon,
   IncognitoIcon,
   LockIcon,
   UnLockIcon,
} from '../../assets'

export const bookingOptions = [
   { title: 'Забронировать', icon: <LockIcon /> },
   { title: 'Забронировать анонимно', icon: <IncognitoIcon /> },
   { title: 'Пожаловаться', icon: <ComplaintIcon /> },
]

export const unBookingOption = [
   { title: 'Снять бронь', icon: <UnLockIcon /> },
   { title: 'Пожаловаться', icon: <ComplaintIcon /> },
]
