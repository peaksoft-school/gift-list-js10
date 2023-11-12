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

// variants:
// primary, secondary, tertiary, quaternary,
// withStatusBottom, withStatusTop

export const Card = ({
   variant = 'primary',
   list = false,
   meetballsOptions,
   handleChange,
   onClick,
   ownerName,
   ownerImage,
   holiday,
   cardName,
   cardImage,
   bookerImage,
   date,
   newOrOld,
}) => {
   const listClassName = list && 'list'
   const status = bookerImage ? 'Забронирован' : 'В ожидании'
   return (
      <StyledCard className={listClassName} onClick={onClick}>
         {listClassName && (
            <CardMedia component="img" image={cardImage} alt={cardName} />
         )}
         <ContentContainer
            className={`${listClassName} ${
               list && variant === 'secondary' && 'listWithoutHeader'
            }`}
         >
            {(variant === 'primary' || variant === 'withStatusTop') && (
               <CardHeader
                  avatar={
                     ownerImage ? (
                        <StyledAvatarIcon alt={ownerName} src={ownerImage} />
                     ) : (
                        <StyledAvatarIcon aria-label="recipe">
                           {ownerName.charAt(0)}
                        </StyledAvatarIcon>
                     )
                  }
                  title={ownerName}
                  subheader={variant !== 'withStatusTop' && holiday}
               />
            )}
            {variant === 'withStatusTop' && (
               <CardDescription
                  text1={variant === 'secondary' ? cardName : holiday}
                  text2={variant === 'secondary' ? holiday : newOrOld}
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
                  <Date>{date}</Date>
                  {variant !== 'tertiary' &&
                     variant !== 'quaternary' &&
                     variant !== 'withStatusTop' && (
                        <StyledCardActionsPar1>
                           {!bookerImage && status === 'Забронирован' && (
                              <StyledAvatarIcon aria-label="recipe">
                                 Н
                              </StyledAvatarIcon>
                           )}
                           {bookerImage && (
                              <StyledAvatarIcon
                                 alt="Фотография забронировавшего пользователя."
                                 src={bookerImage}
                              />
                           )}
                           <span>{status}</span>
                        </StyledCardActionsPar1>
                     )}
               </ActionsWrapper>
               {variant !== 'quaternary' && (
                  <MeatBalls
                     options={meetballsOptions}
                     handleChange={handleChange}
                  />
               )}
            </CardActions>
         </ContentContainer>
      </StyledCard>
   )
}

const ActionsWrapper = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   gap: '95px',
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
         color: `${globalTheme.palette.secondary.green}`,
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
         color: `${globalTheme.palette.secondary.waikawaGrey}`,
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
