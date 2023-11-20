import { styled } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { CardIcon, ListIcon } from '../assets'
import { Header } from '../components/Header'
import { Button } from '../components/UI/Button'
import { Sidebar } from '../components/UI/Sidebar'
import { routes } from '../utils/constants'

const isNumber = (textForTest) => /^\d+$/.test(textForTest)

const transformObjectRoutesToArray = (role) =>
   Object.entries(routes[role])
      .map(([pathname, breadcrumb]) => ({
         path: pathname,
         breadcrumb,
      }))
      .slice(1)

const getLastElementOfPath = (path) => path.slice(-1)

export const MainLayout = ({ role, isList, toggleList, headerSelectType }) => {
   const routesArray = transformObjectRoutesToArray(role)
   const breadcrumbs = useBreadcrumbs(routesArray, {
      excludePaths: ['/', 'user', 'admin'],
   })
   const [inner, setInner] = useState(false)
   const path = useParams()
   const [byIdName, setByIdName] = useState('')

   useEffect(() => {
      if (isNumber(getLastElementOfPath(path['*']))) {
         setInner(true)
      } else {
         setInner(false)
      }
   }, [path])

   const handleDataUpdated = (event) => {
      setByIdName(event.detail)
   }

   useEffect(() => {
      window.addEventListener('name', handleDataUpdated)

      return () => {
         window.removeEventListener('name', handleDataUpdated)
      }
   }, [])

   return (
      <>
         <Sidebar roleName={role} />
         <MainContainer>
            <Header variantOfSelect={headerSelectType} />
            <MainContentWrapper>
               <StyledMainContentHeader>
                  <StyledLegend isinner={inner}>
                     {breadcrumbs.map(({ breadcrumb, match }, index) => (
                        <Fragment key={match.pathname}>
                           <StyledNavLink
                              to={match.pathname}
                              active={
                                 breadcrumbs.length - 1 === index ? 'true' : ''
                              }
                           >
                              {isNumber(getLastElementOfPath(match.pathname))
                                 ? isNumber(match.pathname.split('/').pop()) &&
                                   byIdName
                                 : breadcrumb}
                           </StyledNavLink>
                           {index !== breadcrumbs.length - 1 && ' / '}
                        </Fragment>
                     ))}
                  </StyledLegend>
                  {!inner && (
                     <div>
                        <StyledButton onClick={toggleList} disableRipple>
                           <CardIcon className={`${!isList && 'active'}`} />
                        </StyledButton>
                        <StyledButton onClick={toggleList} disableRipple>
                           <ListIcon className={`${isList && 'active'}`} />
                        </StyledButton>
                     </div>
                  )}
               </StyledMainContentHeader>
               <Outlet />
            </MainContentWrapper>
         </MainContainer>
      </>
   )
}

const StyledNavLink = styled(NavLink)(({ active }) => ({
   color: active ? '#000000' : '#B4B4B4',
   textDecoration: 'none',
}))

const StyledButton = styled(Button)({
   borderRadius: '3px',
   padding: '2px',
   span: {
      display: 'none',
   },
   minWidth: 'inherit',
   borderColor: '#EBEAED',
   svg: {
      fill: '#84818A',
   },
   'svg.active': {
      fill: '#8639B5',
   },
   '&:hover': {
      backgroundColor: '#BDBDBD',
   },
})

const StyledMainContentHeader = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '30px',
   paddingRight: '21px',
})

const MainContentWrapper = styled('fieldset')({
   border: 'none',
   padding: '20px',
})

const MainContainer = styled('div')({
   backgroundColor: '#F7F8FA',
   marginLeft: '18.4rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '50px',
   minHeight: '100vh',
})

const StyledLegend = styled('legend')(({ isinner }) => ({
   fontSize: isinner ? '0.875rem' : '1.5rem',
   fontWeight: '500',
   letterSpacing: '0.0125rem',
}))
