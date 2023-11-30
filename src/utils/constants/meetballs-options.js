import { AnonimBookingIcon, IconBooking, UnBookingIcon } from '../../assets'

export const meetballsFriendOptions = {
   booking: [
      { title: 'Забронировать', icon: <IconBooking /> },
      { title: 'Забронировать анонимно', icon: <AnonimBookingIcon /> },
   ],
   unBooking: [{ title: 'Снять бронь', icon: <UnBookingIcon /> }],
}
