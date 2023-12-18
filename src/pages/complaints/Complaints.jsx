import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import {
   deleteWishById,
   getWishesWithComplaints,
} from '../../store/complaints-slice/complaintsThunk'
import { meatballsComplaintsOptions } from '../../utils/constants/meetballs-options'
import {
   isBlockWishById,
   isUnBlockWishById,
} from '../../store/wishesById/wishByIdThunk'

export const isBlockOptions = (isBlock) => {
   console.log(isBlock)
   if (isBlock) {
      return meatballsComplaintsOptions.isUnBlock
   }
   return meatballsComplaintsOptions.isBlock
}

export const Complaints = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const complaints = useSelector((state) => state.complaints.complaints)
   console.log(complaints)

   const array = (wishId) => {
      const newArray = complaints.find((wish) => wish.wishId === wishId)
      console.log(newArray)
      if (newArray && newArray.complaints && newArray.complaints.length > 0) {
         const sortedArray = newArray.complaints
            .slice()
            .sort(
               (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
            )
         console.log(sortedArray[0])
         return sortedArray[0] || {}
      }
      return newArray ? newArray.complaints : []
   }

   useEffect(() => {
      dispatch(getWishesWithComplaints())
   }, [])

   const openWishesInnerPage = (wishId, nameWish) => {
      providerEvent({ action: 'name', payload: nameWish })
      navigate(`${wishId}`)
   }

   const optionsChangeHandle = (e, wishId, dispatch) => {
      const selectedOption = e.target.innerText
      if (selectedOption === 'Заблокировать') {
         dispatch(isBlockWishById({ wishId, isBlock: true }))
      } else if (selectedOption === 'Разблокировать') {
         dispatch(isUnBlockWishById({ wishId, isBlock: false }))
      } else {
         dispatch(deleteWishById(wishId))
      }
   }
   return (
      <Container>
         {complaints?.map((item) => (
            <Card
               key={item.wishId}
               onGetThingById={() =>
                  openWishesInnerPage(item.wishId, item.nameWish)
               }
               ownerImage={item.ownerImage}
               ownerName={item.fullName}
               cardName={item.nameWish}
               cardImage={item.wishImage}
               date={item.dateOfHoliday}
               holiday={item.nameHoliday}
               isBlock={item.block}
               bookerImage={array(item.wishId)?.complainUserInfoImage}
               meatballsOptions={isBlockOptions(item.block)}
               status={array(item.wishId)?.textComplain}
               handleChange={(e) =>
                  optionsChangeHandle(e, item.wishId, dispatch)
               }
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
