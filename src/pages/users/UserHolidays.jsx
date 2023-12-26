import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { axiosInstance } from '../../config/axiosInstance'
import { Card } from '../../components/UI/card/Card'
import { DeleteIcon } from '../../assets'
import { DeleteModal } from '../../components/UI/DeleteModal'

export const UserHolidays = () => {
   const { userId } = useSelector((state) => state.users)
   const [openModal, setOpenModal] = useState(false)
   const [userHolidays, setUserHolidays] = useState([])
   const [holidayId, setholidayId] = useState(null)

   const getUserHolidays = async () => {
      const holidaysResponse = await axiosInstance.get(
         `/holidays/getHolidaysByUserId/${userId}`
      )
      setUserHolidays(holidaysResponse.data)
   }

   const handleChange = (id) => {
      setOpenModal(true)
      setholidayId(id)
   }

   const deleteHoliday = async () => {
      await axiosInstance.delete(`/holidays/${holidayId}`)
      setOpenModal(false)
      getUserHolidays()
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
                     { title: 'Удалить', icon: <DeleteIcon /> },
                  ]}
                  handleChange={() => handleChange(holiday.holidayId)}
               />
            )
         })}
         {openModal && (
            <DeleteModal
               open={openModal}
               setOpen={setOpenModal}
               onDelete={deleteHoliday}
            />
         )}
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   gap: 2.4vw;
   flex-wrap: wrap;
`
