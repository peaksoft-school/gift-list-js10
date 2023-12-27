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
import { meatballsComplaintsOptions } from '../../utils/constants/meatballs-options'
import { isBlockWishById, isUnBlockWishById } from '../../store/wish/wishThunk'
import { complaintsWithEnglishPropertiesName } from '../../utils/constants/options'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'

export const isBlockOptions = (isBlock) => {
   if (isBlock) {
      return meatballsComplaintsOptions.isUnBlock
   }
   return meatballsComplaintsOptions.isBlock
}

export const Complaints = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const complaints = useSelector((state) => state.complaints.complaints)

   const handleForSortedWithDate = (wishId) => {
      const findWish = complaints.find((wish) => {
         return wish.wishId === wishId
      })
      if (findWish && findWish.complaints && findWish.complaints.length > 0) {
         const sortedComplaints = findWish.complaints.toSorted((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt)
         })
         return sortedComplaints[0]
      }
      return findWish.complaints
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
         dispatch(isBlockWishById({ wishId, isBlock: true, variant: true }))
      } else if (selectedOption === 'Разблокировать') {
         dispatch(isUnBlockWishById({ wishId, isBlock: false, variant: true }))
      } else {
         dispatch(deleteWishById(wishId))
      }
   }
   return (
      <Container>
         {complaints.length === 0 && (
            <SecondEmptyComponent text="У вас пока нет жалоб" />
         )}
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
               showBookerImage
               bookerImage={
                  handleForSortedWithDate(item.wishId)?.complainUserInfoImage
               }
               meatballsOptions={isBlockOptions(item.block)}
               status={
                  complaintsWithEnglishPropertiesName[
                     handleForSortedWithDate(item.wishId)?.statusComplaint
                  ]
               }
               handleChange={(e) =>
                  optionsChangeHandle(e, item.wishId, dispatch)
               }
               showBottomBooker
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
