import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import { meatballsComplaintsOptions } from '../../utils/constants/meetballs-options'
import { getWishesWithComplaints } from '../../store/complaints-slice/complaintsThunk'

export const Complaints = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const complaints = useSelector((state) => state.complaints.complaints)
   console.log(complaints)

   useEffect(() => {
      dispatch(getWishesWithComplaints())
   }, [])

   const openWishesInnerPage = (wishId, nameWish) => {
      providerEvent({ action: 'name', payload: nameWish })
      navigate(`${wishId}`)
   }

   // const optionsChangeHandle = (e, wishId, dispatch) => {
   //    const selectedOption = e.target.innerText
   //    if (selectedOption === 'Заблокировать') {
   //       dispatch(bookingWishThunk(wishId))
   //    } else {
   //       dispatch()
   //    }
   // }
   return (
      <Container>
         {complaints?.map((item, index) => (
            <Card
               key={[index]}
               onGetThingById={() =>
                  openWishesInnerPage(item.wishId, item.nameWish)
               }
               ownerImage={item.ownerImage}
               ownerName={item.fullName}
               cardName={item.nameWish}
               cardImage={item.wishImage}
               date={item.dateOfHoliday}
               holiday={item.nameHoliday}
               meatballsOptions={meatballsComplaintsOptions}

               // handleChange={(e) =>
               //    optionsChangeHandle(e, item.wishId, dispatch)
               // }
            />
         ))}
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
   '&>div': {
      border: '1px solid #FD5200',
   },
})
