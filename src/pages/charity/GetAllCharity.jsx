import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import { getAllCharityByUserId } from '../../store/charity/charityThunk'
import { convertDateFormat } from '../../utils/helpers/constants'

export const GetAllCharity = () => {
   const dispatch = useDispatch()
   const { charities, pending } = useSelector((state) => state.charity)
   const { id } = useSelector((state) => state.authLogin)
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getAllCharityByUserId(id))
   }, [])

   if (pending) {
      return 'Loading...'
   }

   const onGetById = (charityId, charityName) => {
      providerEvent({ action: 'name', payload: charityName })
      navigate(`${charityId}`)
   }

   return (
      <StyledCharityWrapper>
         {charities.map((charity) => (
            <Card
               key={charity.nameCharity}
               onClick={() => onGetById(charity.charityId, charity.nameCharity)}
               variant="withStatusTop"
               card={{
                  owner: {
                     name: charity.fullName,
                     image: charity.userImage,
                  },
                  name: charity.nameCharity,
                  image: charity.charityImage,
                  status:
                     charity.status === 'PENDING' ? 'Ожидание' : 'Забронирован',
                  date: convertDateFormat(charity.createdAt),
                  newOrOld: charity.condition === 'USED' ? 'Б/У' : 'Новый',
                  booker: {
                     image: charity.bookedUserImage,
                  },
               }}
               showBottomBooker="true"
            />
         ))}
      </StyledCharityWrapper>
   )
}

const StyledCharityWrapper = styled('div')({
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
})
