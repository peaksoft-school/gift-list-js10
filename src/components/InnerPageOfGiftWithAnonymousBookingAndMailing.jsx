import { Avatar, Paper, styled } from '@mui/material'
import React from 'react'
import { Button } from './UI/Button'
import { Checkbox } from './UI/Checkbox'

const customFields = {
   description: `Дисплей Super Retina XDR с технологией ProMotion и быстрым, плавным откликом. Грандиозный апгрейд системы камер, открывающий совершенно новые возможности. Исключительная прочность. A15 Bionic — самый быстрый чип для iPhone. И впечатляющее время работы без подзарядки. Всё это Pro.`,
   holidayDate: '12.04.222',
}
// variants: mailing, ''

export const InnerPageOfGiftWithAnonymousBookingAndMailing = ({
   data,
   variant = '',
}) => {
   const {
      owner: { name: ownerName, image: ownerImage },
      status,
      holiday,
      name: cardName,
      image: cardImage,
      booker: { name: bookerName, image: bookerImage },
   } = data
   const { description, holidayDate } = customFields
   return (
      <ContentWrapper>
         <MainContentWrapper>
            <StyledImage src={cardImage} alt={cardName} />
            <TextContainer>
               {variant !== 'mailing' && (
                  <UsersInfoContainer>
                     <UserContainer>
                        <Avatar src={ownerImage} alt={ownerName} />
                        <StyledOwnerName>{ownerName}</StyledOwnerName>
                     </UserContainer>
                     {status !== 'В ожидании' ? (
                        <UserContainer>
                           <Avatar src={bookerImage} alt={bookerName} />
                           <StyledStatus>Забронировано</StyledStatus>
                        </UserContainer>
                     ) : (
                        <p>В ожидании</p>
                     )}
                  </UsersInfoContainer>
               )}
               <StyledCardName>{cardName}</StyledCardName>
               <p>{description}</p>
               <HolidayInfoContainer>
                  <StyledHolidayDataTitle>
                     Дата праздника:
                     <StyledHolidayDate>{holidayDate}</StyledHolidayDate>
                  </StyledHolidayDataTitle>
                  {variant !== 'mailing' && (
                     <StyledHolidayDataTitle>
                        Название праздника:
                        <StyledHolidayName>{holiday}</StyledHolidayName>
                     </StyledHolidayDataTitle>
                  )}
               </HolidayInfoContainer>
            </TextContainer>
         </MainContentWrapper>
         {variant !== 'mailing' && (
            <Actions>
               <p>
                  <Checkbox />
                  Забронировать анонимно
               </p>
               <Button variant="primary">Забронировать</Button>
            </Actions>
         )}
      </ContentWrapper>
   )
}

const StyledOwnerName = styled('p')({
   fontWeight: '500',
})

const StyledCardName = styled('p')({
   fontSize: '1.5rem',
   fontWeight: '500',
})

const StyledImage = styled('img')({
   width: '21.438rem',
   height: '21.438rem',
   borderRadius: '10px',
})

const StyledHolidayDate = styled('span')({ color: 'black' })

const StyledHolidayName = styled('span')({ color: '#0BA360' })

const StyledHolidayDataTitle = styled('p')({
   color: '#5C5C5C',
   display: 'flex',
   flexDirection: 'column',
   gap: '5px',
})

const HolidayInfoContainer = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledStatus = styled('p')({
   color: '#3774D0',
   fontSize: '0.875rem',
})

const UserContainer = styled('div')({
   display: 'flex',
   gap: '10px',
   alignItems: 'center',
})

const UsersInfoContainer = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const TextContainer = styled('div')({
   padding: '15px',
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
})

const MainContentWrapper = styled('div')({
   display: 'grid',
   gridTemplateColumns: '1fr 10fr',
})

const ContentWrapper = styled(Paper)({
   padding: '20px',
})

const Actions = styled('div')({
   display: 'flex',
   gap: '20px',
   alignItems: 'center',
   label: {
      marginRight: '0',
   },
   justifyContent: 'end',
})
