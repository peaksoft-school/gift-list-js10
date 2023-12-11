import { Box, CardContent, CardMedia, Typography, styled } from '@mui/material'
import React from 'react'
import { Button } from './Button'

export const FriendCard = ({
   name,
   wish,
   holidays,
   image,
   variant,
   onClick,
   onAcceptFriend,
   onRejectFriend,
}) => {
   return (
      <Container onClick={onClick}>
         <CardContainer variant={variant}>
            {image ? (
               <Image image={image} component="img" alt={name} />
            ) : (
               <StyledName variant="h1" component="div">
                  {name.charAt(0).toUpperCase()}
               </StyledName>
            )}

            <CardContent>{name}</CardContent>
            <Text>
               <Holidays>
                  <Span>{wish}</Span>
                  <Span2>желаний</Span2>
               </Holidays>
               <Holidays>
                  <Span>{holidays}</Span>
                  <Span2>праздников</Span2>
               </Holidays>
            </Text>
            {variant ? (
               <BtnContainer onClick={(e) => e.stopPropagation()}>
                  <Button variant="primary" onClick={onAcceptFriend}>
                     Принять заявку
                  </Button>
                  <Button variant="outlined" onClick={onRejectFriend}>
                     Отклонить
                  </Button>
               </BtnContainer>
            ) : null}
         </CardContainer>
      </Container>
   )
}

const Container = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   width: '100%',
   gap: '1.25rem',
   borderRadius: '0.5rem',
   background: '#F7F8FA',
})
const BtnContainer = styled('div')({
   width: '90%',
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
   height: '3vh',
   paddingTop: '24px',
   paddingBottom: '47px',
   '&> Button': {
      height: '4vh !important',
      padding: '10px',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: '0.75rem',
   },
})

const CardContainer = styled(CardMedia)(({ variant }) => ({
   width: '15vw',
   height: variant ? '50vh' : '40vh',
   margin: '1rem',
   boxShadow: 'none',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '16px',
   backgroundImage:
      'linear-gradient(to bottom,rgba(134, 57, 181, 0.20) 40%, #fff 10% )',
}))

const Image = styled(CardMedia)({
   width: '130px',
   height: '130px',
   margin: '0 auto',
   borderRadius: '50%',
})

const StyledName = styled(Typography)({
   background: '#8639b5',
   color: '#fff',
   borderRadius: '50%',
   width: '130px',
   height: '130px',
   textAlign: 'center',
})

const Text = styled('div')({
   display: 'flex',
   gap: '1.625rem',
   marginTop: '0.625rem',
})

const Holidays = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const Span = styled('span')({
   fontSize: '1rem',
   color: '#000',
})

const Span2 = styled('span')({
   color: '#606060',
   fontSize: '0.75rem',
})
