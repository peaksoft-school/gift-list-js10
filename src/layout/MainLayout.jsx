import { styled } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import {
   NavLink,
   Outlet,
   useLocation,
   useNavigate,
   useParams,
} from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { CardIcon, ListIcon, MailingIcon } from '../assets'
import { Header } from '../components/Header'
import { Button } from '../components/UI/Button'
import { Sidebar } from '../components/UI/Sidebar'
import { routes } from '../utils/constants'
import { findNumberLength } from '../utils/helpers/constants'

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
   const [showActionsButtons, setShowActionsButtons] = useState(
      routes[role][path['*']]?.showListActions
   )
   const navigate = useNavigate()
   const [breadcrumbsForRequests, setBreadcrumbsForRequests] =
      useState(breadcrumbs)
   const handleDataUpdated = (event) => {
      if (event.detail.action === 'name') {
         setByIdName(event.detail.payload)
      }
      if (event.detail.action === 'showActionsButton') {
         setShowActionsButtons(Boolean(event.detail.payload))
      }
   }
   const { pathname } = useLocation()
   useEffect(() => {
      window.addEventListener('providerEvent', handleDataUpdated)
      let breadcrumbsForUpdate = breadcrumbs
      if (path['*'].split('/').pop() === 'requests') {
         breadcrumbsForUpdate = breadcrumbs.slice(0, 1)
      }
      if (
         path['*'].includes('/') &&
         path['*'].split('/').pop() !== 'requests'
      ) {
         setInner(true)
      } else {
         setInner(false)
      }
      setBreadcrumbsForRequests(breadcrumbsForUpdate)
      return () => {
         window.removeEventListener('providerEvent', handleDataUpdated)
      }
   }, [pathname])

   let charityHeaderSelectType
   if (path['*'].includes('charity')) {
      charityHeaderSelectType = 'select'
   }
   return (
      <>
         <Sidebar roleName={role} />
         <MainContainer>
            <Header variantOfSelect={charityHeaderSelectType} />
            <MainContentWrapper>
               <StyledMainContentHeader>
                  <ImagesAndBreadcrumbsWrapper>
                     <StyledLegend isinner={inner}>
                        {breadcrumbsForRequests.map(({ match }, index) => (
                           <Fragment key={match.pathname}>
                              {(index !== 1 &&
                                 isNumber(
                                    getLastElementOfPath(match.pathname)
                                 )) || (
                                 <StyledNavLink
                                    to={
                                       (findNumberLength(match.pathname) &&
                                          path['*']) ||
                                       match.pathname
                                    }
                                    active={
                                       breadcrumbsForRequests.length - 1 ===
                                          index ||
                                       findNumberLength(match.pathname)
                                          ? 'true'
                                          : ''
                                    }
                                    onClick={(e) => {
                                       if (
                                          breadcrumbsForRequests.length - 1 ===
                                             index ||
                                          findNumberLength(match.pathname)
                                       ) {
                                          e.preventDefault()
                                       }
                                    }}
                                 >
                                    {isNumber(
                                       getLastElementOfPath(match.pathname)
                                    )
                                       ? isNumber(
                                            match.pathname.split('/').pop()
                                         ) && byIdName
                                       : routes[role][
                                            match.pathname.split('/').pop()
                                         ]?.breadcrumb}
                                 </StyledNavLink>
                              )}
                              {index !== 1 &&
                                 index !== breadcrumbsForRequests.length - 1 &&
                                 ' / '}
                           </Fragment>
                        ))}
                     </StyledLegend>
                  </ImagesAndBreadcrumbsWrapper>
                  {showActionsButtons && (
                     <StyledActions>
                        {!inner && routes[role][path['*']]?.showListActions && (
                           <div>
                              <StyledButton
                                 onClick={() => toggleList('card')}
                                 disableRipple
                              >
                                 <CardIcon
                                    className={`${!isList && 'active'}`}
                                 />
                              </StyledButton>
                              <StyledButton
                                 onClick={() => toggleList('list')}
                                 disableRipple
                              >
                                 <ListIcon
                                    className={`${isList && 'active'}`}
                                 />
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
                              {buttonContent?.includes('рассылку') ? (
                                 <MailingIcon />
                              ) : (
                                 '+'
                              )}
                              {buttonContent}
                           </StyledSomethingAddButton>
                        )}
                     </StyledActions>
                  )}
               </StyledMainContentHeader>
               <Outlet />
            </MainContentWrapper>
         </MainContainer>
      </>
   )
}
const ImagesAndBreadcrumbsWrapper = styled('div')({
   display: 'flex',
   gap: '35px',
   alignItems: 'center',
})

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
   padding: '6px',
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
