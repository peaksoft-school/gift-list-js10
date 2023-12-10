import { styled } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom'
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
         breadcrumb: breadcrumb.breadcrumb,
      }))
      .slice(1)
const getLastElementOfPath = (path) => path.slice(-1)

export const MainLayout = ({ role, isList, toggleList, headerSelectType }) => {
   const navigate = useNavigate()

   const routesArray = transformObjectRoutesToArray(role)
   const breadcrumbs = useBreadcrumbs(routesArray, {
      excludePaths: ['/', 'user', 'admin'],
   })
   const [inner, setInner] = useState(false)
   const path = useParams()
   const [byIdName, setByIdName] = useState('')

   useEffect(() => {
      if (path['*'].includes('/')) {
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
                     {breadcrumbs.map(({ match }, index) => (
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
                                 : routes[role][match.pathname.split('/').pop()]
                                      ?.breadcrumb}
                           </StyledNavLink>
                           {index !== breadcrumbs.length - 1 && ' / '}
                        </Fragment>
                     ))}
                  </StyledLegend>
                  <Actions>
                     {!inner && routes[role][path['*']]?.showListActions && (
                        <div>
                           <StyledButton
                              onClick={() => toggleList('card')}
                              disableRipple
                           >
                              <CardIcon className={`${!isList && 'active'}`} />
                           </StyledButton>
                           <StyledButton
                              onClick={() => toggleList('list')}
                              disableRipple
                           >
                              <ListIcon className={`${isList && 'active'}`} />
                           </StyledButton>
                        </div>
                     )}
                     {routes[role][path['*']]?.buttonText && (
                        <SecondContainer>
                           <div>
                              <ButtonComponent
                                 type="button"
                                 onClick={() =>
                                    routes[role][path['*']]?.onClick(navigate)
                                 }
                              >
                                 + Добавить желание
                              </ButtonComponent>
                           </div>
                        </SecondContainer>
                     )}
                  </Actions>
               </StyledMainContentHeader>
               <Outlet />
            </MainContentWrapper>
         </MainContainer>
      </>
   )
}

const Actions = styled('div')({
   display: 'flex',
   gap: '10px',
   alignItems: 'center',
})

const SecondContainer = styled('div')({
   display: 'flex',
   justifyContent: 'end',
})

const ButtonComponent = styled('button')({
   width: '13.688rem',
   height: '2.188rem',
   color: 'white',
   backgroundColor: '#8639B5',
   borderRadius: '0.313rem',
   border: 'none',
   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#6a1f99',
   },
})

const StyledNavLink = styled(NavLink)(({ active }) => ({
   color: active ? '#000000' : '#B4B4B4',
   textDecoration: 'none',
}))
const StyledButton = styled(Button)({
   borderRadius: '3px',
   padding: '5px',
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
