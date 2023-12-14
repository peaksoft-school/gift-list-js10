import { Button, styled } from '@mui/material'
import React from 'react'
import { Field } from './GiftInnerContentFooter'

export function GiftInnerContent({
   role = 'user',
   complaint,
   variant,
   // onDelete,
   // onEditOrOnBlock,
}) {
   return (
      <Container>
         <Icon src={complaint.image} alt={complaint.title} />
         <SecondContainer>
            <FrowContent>
               <BlockContent>
                  <Image src={complaint.owner.image} alt="user-data" />
                  <OwnerContent>
                     <span>{complaint.owner.userName}</span>
                     <Span>{complaint.owner.phoneNumber}</Span>
                  </OwnerContent>
               </BlockContent>
               <UserContainer>
                  {complaint.status && (
                     <div>
                        <Img src={complaint.buker.image} alt="user-wait" />
                     </div>
                  )}
                  <Title>
                     {complaint.status ? 'Забронирован' : 'В ожидании'}
                  </Title>
               </UserContainer>
            </FrowContent>
            <Main>
               <MainContext>{complaint.name}</MainContext>
               <FieldText>{complaint.text}</FieldText>
            </Main>
            <StyledFooter>
               {!variant && <Field role={role} {...complaint} />}
               <ButtonContainer>
                  <StyledButton className="delete" variant="text" type="button">
                     Удалить
                  </StyledButton>
                  <StyledButton variant="contained" type="button">
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
})

const ButtonContainer = styled('div')({
   display: 'flex',
   gap: '0.625rem',
   paddingTop: '10rem',
   paddingLeft: '30rem',
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
