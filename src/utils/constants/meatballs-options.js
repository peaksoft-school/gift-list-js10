import {
   DeleteIcon,
   EditIcon,
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

export const meatballsDeleteAndEditOptions = [
   {
      title: 'Редактировать',
      icon: <EditIcon />,
   },
   {
      title: 'Удалить',
      icon: <DeleteIcon />,
   },
]
