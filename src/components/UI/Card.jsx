import React from 'react'
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { globalTheme } from '../../theme/globalTheme'

const card = {
   owner: {
      name: 'John Doe',
      image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
   },
   holiday: 'День рождения',
   name: 'Письма Элджертона',
   image: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
   status: 'Забронирован',
   date: '12.04.22',
   newOrOld: 'Б/У',
   booker: {
      name: 'Anybody',
      image: 'https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg',
   },
}

// variants: primary, secondary, tertiary, quaternary, withStatusBottom, withStatusTop

export const Card = ({ variant = 'primary', list = false }) => {
   const {
      owner: { name: ownerName, image: ownerImage },
      status,
      holiday,
      name: cardName,
      image: cardImage,
      newOrOld,
      booker: { name: bookerName, image: bookerImage },
   } = card
   const listClassName = list && 'list'
   return (
      <StyledCard className={listClassName}>
         {listClassName && (
            <CardMedia component="img" image={cardImage} alt={cardName} />
         )}
         <ContentContainer className={listClassName}>
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
               <Description>
                  <Title>{variant === 'secondary' ? cardName : holiday}</Title>
                  {variant !== 'tertiary' && variant !== 'quaternary' && (
                     <Subheader
                        className={
                           variant === 'withStatusTop' &&
                           newOrOld === 'Б/У' &&
                           'orange'
                        }
                     >
                        {variant === 'secondary' ? holiday : newOrOld}
                     </Subheader>
                  )}
               </Description>
            )}
            <StyledCardContent className={listClassName}>
               {variant === 'primary' && (
                  <StyledTypography variant="h6">{cardName}</StyledTypography>
               )}
               {!listClassName && (
                  <CardMedia component="img" image={cardImage} alt={cardName} />
               )}
            </StyledCardContent>
            {variant !== 'primary' && variant !== 'withStatusTop' && (
               <Description>
                  <Title>{variant === 'secondary' ? cardName : holiday}</Title>
                  {variant !== 'tertiary' && variant !== 'quaternary' && (
                     <Subheader
                        className={
                           variant === 'withStatusBottom' &&
                           newOrOld === 'Б/У' &&
                           'orange'
                        }
                     >
                        {variant === 'secondary' ? holiday : newOrOld}
                     </Subheader>
                  )}
               </Description>
            )}
            <CardActions>
               <Date>{card.date}</Date>
               {variant !== 'tertiary' &&
                  variant !== 'quaternary' &&
                  variant !== 'withStatusTop' && (
                     <StyledCardActionsPar1>
                        {!bookerImage && status === 'Забронирован' && (
                           <StyledAvatarIcon aria-label="recipe">
                              {bookerName.charAt(0)}
                           </StyledAvatarIcon>
                        )}
                        {bookerImage && (
                           <StyledAvatarIcon
                              alt={bookerName}
                              src={bookerImage}
                           />
                        )}
                        <span>{status}</span>
                     </StyledCardActionsPar1>
                  )}
               {variant !== 'quaternary' && <MoreHorizIcon />}
            </CardActions>
         </ContentContainer>
      </StyledCard>
   )
}

const Description = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const Title = styled('p')({
   fontSize: '0.875rem',
   fontWeight: '600',
})

const Subheader = styled('span')({
   fontSize: '0.8125rem',
   color: `${globalTheme.palette.secondary.green}`,
   '&.orange': {
      color: `${globalTheme.palette.secondary.orange}`,
   },
})

const ContentContainer = styled('div')({
   display: 'grid',
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
         img: {
            minWidth: '30%',
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
