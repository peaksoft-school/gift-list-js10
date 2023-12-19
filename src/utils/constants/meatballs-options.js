import {
   ComplaintIcon,
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
