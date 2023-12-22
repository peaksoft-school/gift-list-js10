import { Drawer, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { globalTheme } from '../../theme/globalTheme'
import {
   BookingIcon,
   CharityIcon,
   ComplaintsIcon,
   FeedIcon,
   MailingIcon,
   MyHolidaysIcon,
   UsersIcon,
   WishListIcon,
} from '../../assets'
import { routes } from '../../utils/constants'

const pathesByRoles = {
   user: [
      { title: 'Лента', path: 'feed', icon: FeedIcon },
      { title: 'Друзья', path: 'friends', icon: UsersIcon },
      { title: 'Список желаний', path: 'wish', icon: WishListIcon },
      { title: 'Забронированные', path: 'bookings', icon: BookingIcon },
      {
         title: 'Мои праздники',
         path: 'my-holidays',
         icon: MyHolidaysIcon,
      },
      { title: 'Благотворительность', path: 'charity', icon: CharityIcon },
   ],
   admin: [
      { title: 'Пользователи', path: 'users', icon: UsersIcon },
      { title: 'Благотворительность', path: 'charity', icon: CharityIcon },
      { title: 'Жалобы', path: 'complaints', icon: ComplaintsIcon },
      { title: 'Рассылка', path: 'mailing', icon: MailingIcon },
   ],
}

export const Sidebar = ({ roleName = 'user' }) => {
   return (
      <StyledSidebar hideBackdrop open variant="permanent">
         <Logo>Gift list</Logo>
         <StyledNavPanel>
            {pathesByRoles[roleName.toLowerCase()].map(
               ({ title, path, icon: Icon }) => (
                  <StyledNavLink
                     key={path}
                     to={`${routes[roleName.toUpperCase()][path]?.path}`}
                  >
                     {path === 'bookings' || path === 'complaints' ? (
                        <img src={Icon} alt={title} />
                     ) : (
                        <Icon />
                     )}
                     {title}
                  </StyledNavLink>
               )
            )}
         </StyledNavPanel>
      </StyledSidebar>
   )
}

const StyledNavLink = styled(NavLink)({
   textDecoration: 'none',
   height: '3.125rem',
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   color: `${globalTheme.palette.primary.white}`,
   '&.active': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '7px',
   },
   padding: '10px',
})

const StyledNavPanel = styled('nav')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '5px',
}))

const Logo = styled('p')({
   fontSize: '1.5rem',
   fontWeight: 700,
   textTransform: 'uppercase',
   textAlign: 'center',
})

const StyledSidebar = styled(Drawer)(() => ({
   '.MuiDrawer-paper': {
      color: `${globalTheme.palette.primary.white}`,
      background: `${globalTheme.palette.linear.purple}`,
      padding: '25px',
      gap: '25px',
      width: '18.375rem',
   },
}))
