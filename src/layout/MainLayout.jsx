import { styled } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
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
export const MainLayout = ({ role, isList, toggleList }) => {
   const routesArray = transformObjectRoutesToArray(role)
   const breadcrumbs = useBreadcrumbs(routesArray, {
      excludePaths: ['/', 'user', 'admin'],
   })
   const [inner, setInner] = useState(false)
   const path = useParams()
   const [byIdName, setByIdName] = useState('')
   const buttonContent = routes[role][path['*']]?.buttonContent
   const navigate = useNavigate()
   const [breadcrumbsForRequests, setBreadcrumbsForRequests] =
      useState(breadcrumbs)

   useEffect(() => {
      if (
         path['*'].includes('/') &&
         path['*'].split('/').pop() !== 'requests'
      ) {
         setInner(true)
      } else {
         setInner(false)
      }
   }, [path])
   const handleDataUpdated = (event) => {
      if (event.detail.action === 'name') {
         setByIdName(event.detail.payload)
      }
   }
   useEffect(() => {
      window.addEventListener('providerEvent', handleDataUpdated)
      if (path['*'].split('/').pop() === 'requests') {
         setBreadcrumbsForRequests(breadcrumbs.slice(0, 1))
      }

      return () => {
         window.removeEventListener('providerEvent', handleDataUpdated)
      }
   }, [])

   return (
      <>
         <Sidebar roleName={role} />
         <MainContainer>
            <Header
               variantOfSelect={routes[role][path['*']]?.headerSelectType}
            />
            <MainContentWrapper>
               <StyledMainContentHeader>
                  <StyledLegend isinner={inner}>
                     {breadcrumbsForRequests.map(({ match }, index) => (
                        <Fragment key={match.pathname}>
                           <StyledNavLink
                              to={match.pathname}
                              active={
                                 breadcrumbsForRequests.length - 1 === index
                                    ? 'true'
                                    : ''
                              }
                           >
                              {isNumber(getLastElementOfPath(match.pathname))
                                 ? isNumber(match.pathname.split('/').pop()) &&
                                   byIdName
                                 : routes[role][match.pathname.split('/').pop()]
                                      ?.breadcrumb}
                           </StyledNavLink>
                           {index !== breadcrumbsForRequests.length - 1 &&
                              ' / '}
                        </Fragment>
                     ))}
                  </StyledLegend>
                  <StyledActions>
                     {!inner && routes[role][path['*']]?.showListActions && (
                        <div>
                           <StyledButton onClick={toggleList} disableRipple>
                              <CardIcon className={`${!isList && 'active'}`} />
                           </StyledButton>
                           <StyledButton onClick={toggleList} disableRipple>
                              <ListIcon className={`${isList && 'active'}`} />
                           </StyledButton>
                        </div>
                     )}
                     {buttonContent && (
                        <StyledSomethingAddButton
                           variant="primary"
                           onClick={() =>
                              routes[role][path['*']]?.onClick(navigate)
                           }
                        >
                           + {buttonContent}
                        </StyledSomethingAddButton>
                     )}
                  </StyledActions>
               </StyledMainContentHeader>
               <Outlet />
            </MainContentWrapper>
         </MainContainer>
      </>
   )
}

const StyledSomethingAddButton = styled(Button)({ padding: '6px 20px' })
const StyledActions = styled('div')({
   display: 'flex',
   gap: '15px',
   alignItems: 'center',
})
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
