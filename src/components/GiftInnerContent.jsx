import { Button, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Field } from './GiftInnerContentFooter'

export function AdminState({
   image,
   ownerImage,
   ownerName,
   bookerImage,
   status,
   wishName,
   description,
   ownerPhoneNumber,
   onDeleteWishById,
   complaints,
   onBlockedWishById,
}) {
   const { role } = useSelector((state) => state.authLogin)
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
                  {status && (
                     <div>
                        <Img src={bookerImage} alt="user-wait" />
                     </div>
                  )}
                  <Title>{status ? 'Забронирован' : 'В ожидании'}</Title>
               </UserContainer>
            </FrowContent>
            <Main>
               <MainContext>{wishName}</MainContext>
               <FieldText>{description}</FieldText>
            </Main>
            <StyledFooter>
               <Field role={role} complaints={complaints} />
               <ButtonContainer>
                  <StyledButton
                     className="delete"
                     variant="text"
                     type="button"
                     onClick={onDeleteWishById}
                  >
                     Удалить
                  </StyledButton>
                  <StyledButton
                     variant="contained"
                     type="button"
                     onClick={onBlockedWishById}
                  >
                     {role === 'user' ? 'Редактировать' : 'Заблокировать'}
                  </StyledButton>
               </ButtonContainer>
            </StyledFooter>
         </SecondContainer>
      </Container>
   )
}

const Container = styled('div')({
   display: 'flex',
   alignItems: 'flex-start',
   backgroundColor: '#fff',
   height: '72vh',
   paddingRight: '25px',
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

const MainContext = styled('p')({
   fontSize: '1.25rem',
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
})

const UserContainer = styled('div')({
   display: 'flex',
   gap: '0.625rem',
   paddingRight: '3.438rem',
})

const StyledFooter = styled('div')({
   display: 'grid',
   gridTemplateColumns: '3fr 1fr',
})

const StyledButton = styled(Button)({
   height: 'fit-content',
   padding: '0.625rem 0.938rem',
   '&.delete': {
      color: '#8D949E',
   },
})
