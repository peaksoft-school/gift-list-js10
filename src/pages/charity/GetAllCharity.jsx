import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import {
   getAllCharity,
   getAllCharityByUserId,
} from '../../store/charity/charityThunk'
import { convertDateFormat } from '../../utils/helpers/constants'
import { EmptyComponent } from '../LandingPage/EmptyComponent'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'

export const GetAllCharity = () => {
   const dispatch = useDispatch()
   const { charities, pending } = useSelector((state) => state.charity)
   const { id, role } = useSelector((state) => state.authLogin)
   const navigate = useNavigate()

   useEffect(() => {
      if (role === 'USER') {
         dispatch(getAllCharityByUserId(id))
      }
      if (role === 'ADMIN') {
         dispatch(getAllCharity())
      }
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
         {charities.length === 0 &&
            (role === 'USER' ? (
               <EmptyComponent />
            ) : (
               <SecondEmptyComponent text="Пользователи еще не добавляли благотворительностей" />
            ))}
      </StyledCharityWrapper>
   )
}

const StyledCharityWrapper = styled('div')({
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
})
