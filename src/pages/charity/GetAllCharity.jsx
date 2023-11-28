import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import { getAllCharity } from '../../store/charity/charityThunk'
import { bookingOptions } from '../../utils/constants/meatballsOptions'
import { convertDateFormat } from '../../utils/helpers/constants'

export const GetAllCharity = () => {
   const dispatch = useDispatch()
   const { charities, pending } = useSelector((state) => state.charity)
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getAllCharity())
   }, [])

   if (pending) {
      return 'Loading...'
   }

   const handleMeatballsValue = (event) => {
      // TODO: ACTIONS RELATIVE MEATBALLS INNER_TEXT
      if (event.target.innerText === 'Забронировать')
         console.log(event.target.innerText)
      else console.log(event.target.innerText)
   }

   const onGetById = (charityId, ownerId, charityName) => {
      providerEvent({ action: 'name', payload: charityName })
      navigate(`${charityId}/${ownerId}`)
   }

   return (
      <StyledCharityWrapper>
         {charities.map((charity) => (
            <Card
               key={charity.nameCharity}
               onClick={() => onGetById(1, 2, charity.nameCharity)}
               variant="withStatusTop"
               card={{
                  owner: {
                     name: `${charity.firstName} ${charity.lastName}`,
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
               handleChange={handleMeatballsValue}
               meatballsOptions={bookingOptions}
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
