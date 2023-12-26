import { Avatar, Paper, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
   bookingCharityThunk,
   bookingWishThunk,
   unBookingWishThunk,
   unbookingCharityThunk,
} from '../store/booking/bookingThunk'
import { Button } from './UI/Button'
import { Checkbox } from './UI/Checkbox'
import { makeEventForUpdateTheAfterMeatballs } from '../pages/charity/GetAllCharity'

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
   linkToWish,
   bookerId,
   isBlock,
   onDelete,
   onEditOrOnBlockOrUnBlock,
}) => {
   const [isBookingAnonymous, setIsBookingAnonymous] = useState(false)
   const handleCheckboxChange = (e) => setIsBookingAnonymous(e.target.checked)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { id, role } = useSelector((state) => state.authLogin)
   const onBookingOrUnbooking = () => {
      switch (type) {
         case 'WISH':
            if (bookerId) {
               dispatch(
                  unBookingWishThunk({
                     wishId: thingId,
                     userId: id,
                     getSomethingFunction: makeEventForUpdateTheAfterMeatballs,
                  })
               )
            } else {
               dispatch(
                  bookingWishThunk({
                     wishId: thingId,
                     isBookingAnonymous,
                     userId: id,
                     getSomethingFunction: makeEventForUpdateTheAfterMeatballs,
                  })
               )
            }
            break
         default:
            if (bookerId) {
               dispatch(
                  unbookingCharityThunk({
                     charityId: thingId,
                     userId: id,
                     getSomethingFunction: makeEventForUpdateTheAfterMeatballs,
                  })
               )
            } else {
               dispatch(
                  bookingCharityThunk({
                     charityId: thingId,
                     isBookingAnonymous,
                     userId: id,
                     getSomethingFunction: makeEventForUpdateTheAfterMeatballs,
                  })
               )
            }
            break
      }
      navigate(-1)
   }
   const isBooked = status?.includes('RESERVED') || bookerImage
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
                        {status === 'RESERVED' && (
                           <Avatar
                              src={bookerImage}
                              alt="Фотография забронировавшего пользователя"
                           />
                        )}
                        {status && (
                           <StyledStatus>
                              {isBooked ? 'Забронирован' : 'В ожидании'}
                           </StyledStatus>
                        )}
                     </UserContainer>
                  </UsersInfoContainer>
               )}
               {type === 'WISH' ? (
                  <StyledLinnkToWish
                     href={linkToWish}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <StyledCardName>{cardName}</StyledCardName>
                  </StyledLinnkToWish>
               ) : (
                  <StyledCardName>{cardName}</StyledCardName>
               )}
               <StyledDescription>{description}</StyledDescription>
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
                        {variant === 'mailing'
                           ? 'Дата добавления:'
                           : 'Дата праздника:'}
                        <StyledHolidayDate>{date}</StyledHolidayDate>
                     </StyledLabel>
                     {variant !== 'mailing' && type !== 'HOLIDAY' && (
                        <StyledLabel>
                           Название праздника:
                           <StyledHolidayName>{holiday}</StyledHolidayName>
                        </StyledLabel>
                     )}
                  </HolidayInfoContainer>
               )}
            </TextContainer>
         </MainContentWrapper>
         {type !== 'HOLIDAY' && variant !== 'mailing' && (
            <Actions>
               {ownerId !== id && role !== 'ADMIN' && !isBlock && (
                  <>
                     {!bookerId && status === 'PENDING' && (
                        <p>
                           <Checkbox
                              value={isBookingAnonymous}
                              onChange={handleCheckboxChange}
                           />
                           Забронировать анонимно
                        </p>
                     )}
                     {(bookerId === id || !bookerId) && (
                        <StyledCapitalizeButton
                           onClick={onBookingOrUnbooking}
                           variant="primary"
                        >
                           {bookerId === id
                              ? 'Разбронировать'
                              : 'Забронировать'}
                        </StyledCapitalizeButton>
                     )}
                  </>
               )}

               {(ownerId === id || role === 'ADMIN') && (
                  <StyledButtonActions>
                     <StyledButton onClick={onDelete} variant="outlined">
                        Удалить
                     </StyledButton>
                     {role === 'USER' && !isBlock && (
                        <StyledCapitalizeButton
                           onClick={onEditOrOnBlockOrUnBlock}
                           variant="primary"
                        >
                           {role === 'ADMIN' && isBlock && 'Разблокировать'}
                           {role === 'ADMIN' && !isBlock && 'Заблокировать'}
                           {role === 'USER' && 'Редактировать'}
                        </StyledCapitalizeButton>
                     )}
                  </StyledButtonActions>
               )}
            </Actions>
         )}
         {isBlock && role === 'USER' && (
            <StyledBlockedContentWrapper>
               Этот контент заблокирован!
            </StyledBlockedContentWrapper>
         )}
      </ContentWrapper>
   )
}

const StyledButtonActions = styled('div')({
   position: 'relative',
   zIndex: '5',
})

const StyledCapitalizeButton = styled(Button)({
   textTransform: 'uppercase',
})

const StyledButton = styled(Button)({
   border: 'none',
   backgroundColor: 'transparent',
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

const StyledDescription = styled('p')({
   overflowWrap: 'anywhere',
   whiteSpace: 'pre-wrap',
})

const StyledLinnkToWish = styled('a')({ color: '#3774D0' })

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

const StyledLabel = styled('label')({
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
   position: 'relative',
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
