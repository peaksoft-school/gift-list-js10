import {
   ComplaintIcon,
   DeleteIcon,
   GiftIcon,
   IncognitoIcon,
   LockIcon,
   UnLockIcon,
} from '../../assets'

export const meetballsFeedOptionsForWish = {
   isWishFree: [
      { title: 'Забронировать', icon: <LockIcon /> },
      { title: 'Забронировать анонимно', icon: <IncognitoIcon /> },
      { title: 'Добавить в мои подарки', icon: <GiftIcon /> },
      { title: 'Пожаловаться', icon: <ComplaintIcon /> },
   ],
   iBookThisWish: [
      { title: 'Добавить в мои подарки', icon: <GiftIcon /> },
      { title: 'Снять бронь', icon: <UnLockIcon /> },
      { title: 'Пожаловаться', icon: <ComplaintIcon /> },
   ],
   strangersBook: [
      { title: 'Добавить в мои подарки', icon: <GiftIcon /> },
      { title: 'Пожаловаться', icon: <ComplaintIcon /> },
   ],
}

export const meetballsFeedOptionsForCharity = {
   isCharityFree: [
      { title: 'Забронировать', icon: <LockIcon /> },
      { title: 'Забронировать анонимно', icon: <IncognitoIcon /> },
      { title: 'Пожаловаться', icon: <ComplaintIcon /> },
   ],
   iBookThisCharity: [
      { title: 'Снять бронь', icon: <UnLockIcon /> },
      { title: 'Пожаловаться', icon: <ComplaintIcon /> },
   ],
   strangersBook: [{ title: 'Пожаловаться', icon: <ComplaintIcon /> }],
}

export const meetballsFriendOptions = {
   booking: [
      { title: 'Забронировать', icon: <LockIcon /> },
      { title: 'Забронировать анонимно', icon: <IncognitoIcon /> },
   ],
   unBooking: [{ title: 'Снять бронь', icon: <UnLockIcon /> }],
}

export const bookingOptions = [
   { title: 'Забронировать', icon: <LockIcon /> },
   { title: 'Забронировать анонимно', icon: <IncognitoIcon /> },
]

export const unBookingOption = [{ title: 'Снять бронь', icon: <UnLockIcon /> }]

export const meatballsComplaintsOptions = {
   isBlock: [
      { title: 'Заблокировать', icon: <LockIcon /> },
      { title: 'Удалить', icon: <DeleteIcon /> },
   ],
   isUnBlock: [
      { title: 'Разблокировать', icon: <UnLockIcon /> },
      { title: 'Удалить', icon: <DeleteIcon /> },
   ],
}
