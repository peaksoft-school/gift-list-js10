import { Avatar, Paper, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookingWishThunk } from '../store/booking/bookingThunk'
import { Button } from './UI/Button'
import { Checkbox } from './UI/Checkbox'

// variants: mailing, ''

export const InnerPageOfGiftWithAnonymousBookingAndMailing = ({
   variant = '',
   ownerName,
   ownerImage,
   holiday,
   cardName,
   cardImage,
   bookerImage,
   description,
   holidayDate,
}) => {
   const [isBookingAnonymous, setIsBookingAnonymous] = useState(false)
   const handleCheckboxChange = (e) => setIsBookingAnonymous(e.target.checked)
   const dispatch = useDispatch()
   const bookerId = useSelector((state) => state.authLogin.id)
   const onBooking = () => {
      dispatch(bookingWishThunk({ bookerId, isBookingAnonymous }))
   }
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
                     {bookerImage ? (
                        <UserContainer>
                           <Avatar
                              src={bookerImage}
                              alt="Фотография забронировавшего пользователя"
                           />
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
         {variant !== 'mailing' && !bookerImage && (
            <Actions>
               <p>
                  <Checkbox
                     value={isBookingAnonymous}
                     onChange={handleCheckboxChange}
                  />
                  Забронировать анонимно
               </p>
               <Button onClick={onBooking} variant="primary">
                  Забронировать
               </Button>
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
   width: 'fit-content',
   gap: '70px',
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
