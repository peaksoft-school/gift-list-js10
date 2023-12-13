import {
   BlockIcon,
   DeleteIcon,
   IncognitoIcon,
   LockIcon,
   UnLockIcon,
} from '../../assets'

export const meetballsFriendOptions = {
   booking: [
      { title: 'Забронировать', icon: <LockIcon /> },
      { title: 'Забронировать анонимно', icon: <IncognitoIcon /> },
   ],
   unBooking: [{ title: 'Снять бронь', icon: <UnLockIcon /> }],
}

export const meatballsComplaintsOptions = [
   { title: 'Заблокировать', icon: <BlockIcon /> },
   { title: 'Удалить', icon: <DeleteIcon /> },
]
