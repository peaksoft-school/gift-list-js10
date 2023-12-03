import { Avatar, Paper, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
   bookingCharityThunk,
   bookingWishThunk,
} from '../store/booking/bookingThunk'
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
   date,
   thingId,
   status,
   ownerId,
   type,
   category,
   subcategory,
   newOrOld,
}) => {
   const [isBookingAnonymous, setIsBookingAnonymous] = useState(false)
   const handleCheckboxChange = (e) => setIsBookingAnonymous(e.target.checked)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const id = useSelector((state) => state.authLogin.id)
   const onBooking = () => {
      switch (type) {
         case 'WISH':
            dispatch(
               bookingWishThunk({
                  wishId: thingId,
                  isBookingAnonymous,
                  userId: id,
               })
            )
            break
         default:
            dispatch(
               bookingCharityThunk({
                  charityId: thingId,
                  isBookingAnonymous,
                  userId: id,
               })
            )
            break
      }
      navigate(-1)
   }
   const isBooked = status === 'RESERVED_ANONYMOUSLY' || bookerImage
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
                     <UserContainer>
                        {bookerImage && (
                           <Avatar
                              src={bookerImage}
                              alt="Фотография забронировавшего пользователя"
                           />
                        )}
                        <StyledStatus>
                           {isBooked ? 'Забронирован' : 'В ожидании'}
                        </StyledStatus>
                     </UserContainer>
                  </UsersInfoContainer>
               )}
               <StyledCardName>{cardName}</StyledCardName>
               <p>{description}</p>
               {type === 'CHARITY' && (
                  <StyledCharityInfoContainer>
                     {[
                        { label: 'Категория:', value: category },
                        { label: 'Состояние:', value: newOrOld },
                        { label: 'Подкатегория:', value: subcategory },
                        { label: 'Дата добавления:', value: date },
                     ].map((content) => (
                        <StyledLabel key={content.label}>
                           {content.label}
                           <StyledValue>{content.value}</StyledValue>
                        </StyledLabel>
                     ))}
                  </StyledCharityInfoContainer>
               )}
               {type !== 'CHARITY' && (
                  <HolidayInfoContainer>
                     <StyledLabel>
                        Дата праздника:
                        <StyledHolidayDate>{date}</StyledHolidayDate>
                     </StyledLabel>
                     {variant !== 'mailing' && (
                        <StyledLabel>
                           Название праздника:
                           <StyledHolidayName>{holiday}</StyledHolidayName>
                        </StyledLabel>
                     )}
                  </HolidayInfoContainer>
               )}
            </TextContainer>
         </MainContentWrapper>
         {type !== 'HOLIDAY' &&
            id !== ownerId &&
            !isBooked &&
            variant !== 'mailing' &&
            !bookerImage && (
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

const StyledCharityInfoContainer = styled('div')({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '20px',
   paddingTop: '20px',
})

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
   objectFit: 'contain',
})

const StyledHolidayDate = styled('span')({ color: 'black' })

const StyledHolidayName = styled('span')({ color: '#0BA360' })

const StyledLabel = styled('p')({
   color: '#5C5C5C',
   display: 'flex',
   flexDirection: 'column',
   gap: '5px',
   fontSize: '0.875rem',
   fontWeight: '400',
})

const StyledValue = styled('p')({
   color: '#000000',
   fontSize: '1rem',
   fontWeight: '400',
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
