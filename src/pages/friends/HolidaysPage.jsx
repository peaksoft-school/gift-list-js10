import React from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { Card } from '../../components/UI/card/Card'

export const HolidaysPage = () => {
   const holidays = useSelector((state) => state.holiday.holidays)
   return (
      <Container>
         <h2>Праздники</h2>
         <CardContainer>
            {holidays.map((holiday) => (
               <Card
                  key={holiday.holidayId}
                  date={holiday.dateOfHoliday}
                  cardImage={holiday.image}
                  holiday={holiday.nameHoliday}
                  ownerName={holiday.fullName}
                  ownerImage={holiday.friendImage}
               />
            ))}
         </CardContainer>
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
})

const CardContainer = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   width: '100%',
   gap: '20px',
})
