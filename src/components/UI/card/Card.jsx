import {
   Avatar,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Card as MUICard,
   Typography,
   styled,
} from '@mui/material'
import React from 'react'
import { globalTheme } from '../../../theme/globalTheme'
import { MeatBalls } from '../MeatBalls'
import { CardDescription } from './CardDescription'
import { convertDateFormat } from '../../../utils/constants/formatedDate'

// variants:
// primary, secondary, tertiary, quaternary,
// withStatusBottom, withStatusTop

export const Card = ({
   variant = 'primary',
   list = false,
   meatballsOptions = [],
   handleChange,
   onGetThingById,
   ownerName,
   ownerImage,
   holiday,
   cardName,
   cardImage,
   bookerImage,
   date,
   newOrOld,
   status,
   isBlock,
   onGetOwnerById,
   onGetBookerById,
   showBottomBooker,
   showHoliday = true,
}) => {
   const listClassName = list && 'list'
   const bookedStatus =
      bookerImage || status === 'RESERVED_ANONYMOUSLY'
         ? 'Забронирован'
         : 'В ожидании'

   const inputDate = date
   const formattedDate = convertDateFormat(inputDate)

   return (
      <StyledCard className={listClassName} onClick={onGetThingById}>
         {listClassName && (
            <CardMedia component="img" image={cardImage} alt={cardName} />
         )}
         <ContentContainer
            className={`${listClassName} ${
               list && variant === 'secondary' && 'listWithoutHeader'
            }`}
         >
            <StyledBlockedCard>
               {isBlock ? <p>Это заблокированный контент!</p> : null}
            </StyledBlockedCard>

            {(variant === 'primary' || variant === 'withStatusTop') && (
               <CardHeader
                  avatar={
                     ownerImage ? (
                        <StyledAvatarIcon
                           alt={ownerName}
                           src={ownerImage}
                           onClick={onGetOwnerById}
                        />
                     ) : (
                        <StyledAvatarIcon
                           aria-label="recipe"
                           onClick={onGetOwnerById}
                        >
                           {ownerName.charAt(0)}
                        </StyledAvatarIcon>
                     )
                  }
                  title={
                     <StyledOwnerWrapper type="button" onClick={onGetOwnerById}>
                        {ownerName}
                     </StyledOwnerWrapper>
                  }
                  subheader={
                     (variant !== 'withStatusTop' && showHoliday && holiday) ||
                     (variant === 'withStatusTop' && list && (
                        <StyledNewOrOld
                           className={newOrOld === 'Б/У' ? 'orange' : ''}
                        >
                           {newOrOld}
                        </StyledNewOrOld>
                     ))
                  }
               />
            )}
            {variant === 'withStatusTop' && (
               <CardDescription
                  text1={
                     variant === 'secondary' || variant === 'withStatusTop'
                        ? cardName
                        : holiday
                  }
                  text2={variant === 'secondary' ? holiday : !list && newOrOld}
                  newOrOld={newOrOld}
                  variant={variant}
               />
            )}
            <StyledCardContent>
               {variant === 'primary' && (
                  <StyledTypography variant="h6">{cardName}</StyledTypography>
               )}
               {!listClassName && (
                  <CardMedia component="img" image={cardImage} alt={cardName} />
               )}
            </StyledCardContent>
            {variant !== 'primary' && variant !== 'withStatusTop' && (
               <CardDescription
                  text1={variant === 'secondary' ? cardName : holiday}
                  text2={variant === 'secondary' ? holiday : newOrOld}
                  newOrOld={newOrOld}
                  variant={variant}
               />
            )}
            <CardActions
               className={`${
                  list && variant === 'secondary' && 'listWithoutHeader'
               }`}
            >
               <ActionsWrapper
                  className={`${
                     list && variant === 'secondary' && 'listWithoutHeader'
                  }`}
               >
                  <Date>{formattedDate}</Date>
                  {showBottomBooker && (
                     <StyledCardActionsPar1>
                        {status === 'RESERVED' && (
                           <StyledAvatarIcon
                              alt="Фотография человека который забронировал это"
                              src={bookerImage}
                              onClick={onGetBookerById}
                           />
                        )}
                        <span>{bookedStatus}</span>
                     </StyledCardActionsPar1>
                  )}
               </ActionsWrapper>
               {variant !== 'quaternary' && meatballsOptions.length !== 0 && (
                  <MeatBalls
                     handleChange={handleChange}
                     options={meatballsOptions}
                  />
               )}
            </CardActions>
         </ContentContainer>
      </StyledCard>
   )
}

const StyledBlockedCard = styled('div')({
   color: '#ca3636',
})
const StyledOwnerWrapper = styled('button')({
   backgroundColor: 'transparent',
   border: 'none',
})
const ActionsWrapper = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '-webkit-fill-available',
   '&.listWithoutHeader': {
      flexDirection: 'row-reverse',
      gap: '127px',
   },
})
const ContentContainer = styled('div')({
   display: 'grid',
   '&.listWithoutHeader': {
      display: 'flex',
   },
   flexDirection: 'column',
   '&.list': {
      gap: '21px',
   },
   gap: '12px',
   width: '100%',
   maxHeight: '18.8125rem',
})
const Date = styled('span')({
   fontSize: '0.875rem',
})
const StyledTypography = styled(Typography)({
   fontSize: '0.875rem',
   overflow: 'hidden',
   maxHeight: '3rem',
   '&.grey': {
      color: 'grey',
   },
})
const StyledCardContent = styled(CardContent)(() => ({
   padding: '0',
   img: {
      maxHeight: '9.5625rem',
      borderRadius: '7px',
   },
   width: '19.8125rem',
}))
const StyledCard = styled(MUICard)(() => {
   return {
      width: '21.8125rem',
      padding: '15px',
      maxHeight: '18.8125rem',
      borderRadius: '9px',
      ':hover': {
         boxShadow: '0px 0px 43px -10px rgba(209, 209, 209, 1)',
         transitionDuration: '0.6s',
         cursor: 'pointer',
      },
      '&.list': {
         width: '33.3125rem',
         display: 'flex',
         gap: '7px',
         height: '10rem',
         img: {
            minWidth: '30%',
            borderRadius: '7px',
         },
         padding: '15px',
      },
      '.css-185gdzj-MuiCardHeader-root': {
         padding: '0',
      },
      '.css-1d8ay1-MuiTypography-root': {
         fontSize: '0.8125rem',
         color: globalTheme.palette.secondary.green,
      },
      '.css-1qbkelo-MuiCardHeader-content': {
         display: 'flex',
         justifyContent: 'space-between',
      },
      '.css-1xpibb5-MuiTypography-root': {
         fontSize: '1rem',
         fontWeight: '500',
      },
      '.css-1t6e9jv-MuiCardActions-root': {
         display: 'flex',
         justifyContent: 'space-between',
         padding: '0',
         color: globalTheme.palette.secondary.waikawaGrey,
         '&.listWithoutHeader': {
            flexDirection: 'column',
            alignItems: 'end',
         },
      },
      '.css-1ssile9-MuiCardHeader-avatar': {
         marginRight: '10px',
      },
   }
})
const StyledAvatarIcon = styled(Avatar)((props) => {
   return {
      width: '1.25rem',
      height: '1.25rem',
      padding: props?.children && '13px',
   }
})
const StyledCardActionsPar1 = styled('div')({
   display: 'flex',
   alignItems: 'center',
   path: {
      color: '#595656',
   },
   fontSize: '0.875rem',
   width: '60%',
   justifyContent: 'flex-end',
   gap: '10px',
})
const StyledNewOrOld = styled('div')({
   color: globalTheme.palette.secondary.green,
   '&.orange': {
      color: globalTheme.palette.secondary.orange,
   },
})
