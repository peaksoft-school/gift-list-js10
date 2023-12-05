import {
   AddToMyWish,
   AnonimBookingIcon,
   Complain,
   IconBooking,
   UnBookingIcon,
} from '../../assets'

export const meetballsFriendOptions = {
   booking: [
      { title: 'Забронировать', icon: <IconBooking /> },
      { title: 'Забронировать анонимно', icon: <AnonimBookingIcon /> },
      { title: 'Добавить в мои подарки', icon: <AddToMyWish /> },
      { title: 'Пожаловаться', icon: <Complain /> },
   ],
   unBooking: [
      { title: 'Снять бронь', icon: <UnBookingIcon /> },
      { title: 'Добавить в мои подарки', icon: <AddToMyWish /> },
      { title: 'Пожаловаться', icon: <Complain /> },
   ],
}
