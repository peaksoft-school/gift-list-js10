import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { axiosInstance } from '../../config/axiosInstance'
import { Card } from '../../components/UI/card/Card'
import { DeleteIcon, EditIcon } from '../../assets'
import { DeleteModal } from '../../components/UI/DeleteModal'

export const UserHolidays = () => {
   const { userId } = useSelector((state) => state.users)
   const [openModal, setOpenModal] = useState(false)
   const [userHolidays, setUserHolidays] = useState([])

   const getUserHolidays = async () => {
      const holidaysResponse = await axiosInstance.get(
         `/holidays/getHolidaysByUserId/${userId}`
      )
      setUserHolidays(holidaysResponse.data)
   }

   const handleChange = (e) => {
      if (e.target.innerText === 'Редактировать') {
         console.log('edit')
      } else if (e.target.innerText === 'Удалить') {
         setOpenModal(true)
      }
   }

   useEffect(() => {
      getUserHolidays()
   }, [])
   return (
      <Container>
         {userHolidays.map((holiday) => {
            return (
               <Card
                  key={holiday.holidayId}
                  date={holiday.dateOfHoliday}
                  cardImage={holiday.image}
                  holiday={holiday.nameHoliday}
                  variant="tertiary"
                  meatballsOptions={[
                     { title: 'Редактировать', icon: <EditIcon /> },
                     { title: 'Удалить', icon: <DeleteIcon /> },
                  ]}
                  handleChange={(e) => handleChange(e, holiday.id)}
               />
            )
         })}
         {openModal && <DeleteModal open={openModal} setOpen={setOpenModal} />}
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   gap: 2.4vw;
   flex-wrap: wrap;
`
