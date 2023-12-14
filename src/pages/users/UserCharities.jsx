import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { axiosInstance } from '../../config/axiosInstance'
import { Card } from '../../components/UI/card/Card'
import { DeleteIcon, EditIcon } from '../../assets'
import { DeleteModal } from '../../components/UI/DeleteModal'

export const UserCharities = () => {
   const { userId } = useSelector((state) => state.users)
   const [openModal, setOpenModal] = useState(false)
   const [userCharities, setUserCharities] = useState([])

   const getUserCharities = async () => {
      const charityResponse = await axiosInstance.get(
         `/charity/myCharities?userId=${userId}`
      )
      setUserCharities(charityResponse.data)
   }

   const handleChange = (e) => {
      if (e.target.innerText === 'Редактировать') {
         console.log('edit')
      } else if (e.target.innerText === 'Удалить') {
         setOpenModal(true)
      }
   }

   useEffect(() => {
      getUserCharities()
   }, [])

   return (
      <Container>
         {userCharities.map((charity) => {
            return (
               <Card
                  key={charity?.charityId}
                  date={charity?.createdAt}
                  cardImage={charity?.charityImage}
                  holiday={charity?.nameCharity}
                  status={charity?.status}
                  newOrOld={charity?.condition === 'USED' ? 'Б/У' : 'Новый'}
                  variant="withStatusBottom"
                  showBottomBooker="true"
                  isBlock={charity?.isBlock}
                  bookerImage={charity?.bookedUserImage}
                  meatballsOptions={[
                     { title: 'Редактировать', icon: <EditIcon /> },
                     { title: 'Удалить', icon: <DeleteIcon /> },
                  ]}
                  handleChange={(e) => handleChange(e, charity.id)}
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
