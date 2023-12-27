import { Button, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Field } from './GiftInnerContentFooter'

export function GiftInnerContent({
   image,
   ownerImage,
   ownerName,
   bookerImage,
   status,
   wishName,
   description,
   ownerPhoneNumber,
   onDeleteWishById,
   linkToWish,
   complaints,
   onBlockedOrUnblockWishById,
   isBlock,
   onPutChange,
   variant,
}) {
   const { role } = useSelector((state) => state.authLogin)
   const isBooked = status?.includes('RESERVED')
   return (
      <Container>
         <Icon src={image} alt={wishName} />
         <SecondContainer>
            <FrowContent>
               <BlockContent>
                  <Image src={ownerImage} alt="user-data" />
                  <OwnerContent>
                     <span>{ownerName}</span>
                     <Span>{ownerPhoneNumber}</Span>
                  </OwnerContent>
               </BlockContent>
               <UserContainer>
                  {status === 'RESERVED' && (
                     <div>
                        <Img src={bookerImage} alt="user-wait" />
                     </div>
                  )}
                  <Title>{isBooked ? 'Забронирован' : 'В ожидании'}</Title>
               </UserContainer>
            </FrowContent>
            <Main>
               <StyledLinnkToWish
                  href={linkToWish}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <StyledCardName>{wishName}</StyledCardName>
               </StyledLinnkToWish>
               <FieldText>{description}</FieldText>
            </Main>
            <StyledFooter>
               <Field variant={variant} role={role} complaints={complaints} />
               {status === 'PENDING' && (
                  <ButtonContainer>
                     <StyledButton
                        className="delete"
                        type="button"
                        onClick={onDeleteWishById}
                     >
                        Удалить
                     </StyledButton>
                     {role === 'USER' ? (
                        <StyledButton
                           variant="contained"
                           onClick={onPutChange}
                           type="button"
                        >
                           Редактировать
                        </StyledButton>
                     ) : (
                        <StyledButton
                           variant="contained"
                           type="button"
                           onClick={onBlockedOrUnblockWishById}
                        >
                           {isBlock ? 'Разблокировать' : 'Заблокировать'}
                        </StyledButton>
                     )}
                  </ButtonContainer>
               )}
            </StyledFooter>
         </SecondContainer>
         {isBlock && (
            <StyledBlockedContentWrapper>
               Этот контент заблокирован!
            </StyledBlockedContentWrapper>
         )}
      </Container>
   )
}

const StyledLinnkToWish = styled('a')({ color: '#3774D0' })

const StyledCardName = styled('p')({
   fontSize: '1.5rem',
   fontWeight: '500',
})
const StyledBlockedContentWrapper = styled('div')({
   color: '#ffff',
   position: 'absolute',
   background: 'rgba(10, 10, 10, 0.2)',
   height: '100%',
   width: '100%',
   display: 'flex',
   padding: '20px',
   justifyContent: 'center',
   alignItems: 'end',
   fontSize: '2rem',
   top: '0',
   left: '0',
})

const Container = styled('div')({
   display: 'flex',
   alignItems: 'flex-start',
   backgroundColor: '#fff',
   paddingRight: '25px',
   position: 'relative',
})

const Icon = styled('img')({
   width: '21.438rem',
   height: '21.438rem',
   flexShrink: '0',
   borderRadius: '1.8rem',
   padding: '1.2rem',
})

const Image = styled('img')({
   width: '3rem',
   height: '3rem',
   flexShrink: '0',
   borderRadius: '50%',
})

const Main = styled('div')({
   display: 'flex',
   flexDirection: 'column',
})

const Span = styled('span')({
   color: '#5c5c5c',
   paddingTop: '0.3rem',
})

const FrowContent = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

const FieldText = styled('p')({
   paddingTop: '1.25rem',
   paddingRight: '3.438rem',
})

const Title = styled('span')({
   color: '#3774d0',
   cursor: 'pointer',
})

const Img = styled('img')({
   width: '1.25rem',
   height: '1.25rem',
   borderRadius: '50%',
})

const ButtonContainer = styled('div')({
   display: 'flex',
   gap: '0.625rem',
   paddingTop: '10rem',
})

const BlockContent = styled('div')({
   display: 'flex',
   gap: '1rem',
   paddingTop: '1rem',
})

const OwnerContent = styled('div')({
   display: 'flex',
   flexDirection: 'column',
})

const SecondContainer = styled('div')({
   paddingTop: '1rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '2.5rem',
   width: '-webkit-fill-available',
})

const UserContainer = styled('div')({
   display: 'flex',
   gap: '0.625rem',
})

const StyledFooter = styled('div')({
   display: 'grid',
   gridTemplateColumns: '3fr 1fr',
})

const StyledButton = styled(Button)({
   height: 'fit-content',
   padding: '0.625rem 0.938rem',
   '&.delete': {
      color: '#5c5c5c',
      border: 'solid gray 1px',
      '&:hover': {
         backgroundColor: '#948a8a',
         color: 'white',
      },
   },
   borderRadius: '0.5rem',
})
