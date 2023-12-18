import { DeleteIcon, IncognitoIcon, LockIcon, UnLockIcon } from '../../assets'

export const meetballsFriendOptions = {
   booking: [
      { title: 'Забронировать', icon: <LockIcon /> },
      { title: 'Забронировать анонимно', icon: <IncognitoIcon /> },
   ],
   unBooking: [{ title: 'Снять бронь', icon: <UnLockIcon /> }],
}

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
