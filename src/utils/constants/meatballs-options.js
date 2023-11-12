import {
   ComplaintIcon,
   GiftIcon,
   IncognitoIcon,
   LockIcon,
   UnLockIcon,
} from '../../assets'

export const meetballsFeedOptions = {
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
