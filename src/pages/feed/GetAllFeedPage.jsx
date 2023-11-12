import { Paper, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { nameEvent } from '../../events/nameEvent'
import { meetballsFeedOptions } from '../../utils/constants/meatballs-options'
import { getFeedsThunk } from '../../store/feed/feedThunk'

const isWishBooked = (book, myId) => {
   if (!book) {
      return meetballsFeedOptions.isWishFree
   }
   if (book.userReservoirId === myId) {
      return meetballsFeedOptions.iBookThisWish
   }
   return meetballsFeedOptions.strangersBook
}

export const GetAllFeedPage = ({ isList }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {
      feedSlice: { feeds },
      authLogin: { id },
   } = useSelector((state) => state)

   const getById = (id, wishName) => {
      nameEvent(wishName)
      navigate(`${id}`)
   }

   useEffect(() => {
      dispatch(getFeedsThunk())
   }, [])
   return (
      <StyledPaper>
         {feeds.map((feed) => (
            <Card
               onClick={() => getById(feed.wish.wishId, feed.wish.wishName)}
               key={feed.wish?.wishId}
               list={isList}
               bookerImage={feed?.bookedUser?.image}
               cardImage={feed.wish?.image}
               cardName={feed.wish?.wishName}
               date={feed.wish?.wishDate}
               holiday={feed.holiday?.nameHoliday}
               ownerImage={feed.ownerUser.image}
               ownerName={feed.ownerUser.fullName}
               meetballsOptions={isWishBooked(feed.bookedUser, id)}
            />
         ))}
      </StyledPaper>
   )
}

const StyledPaper = styled(Paper)({
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
   backgroundColor: 'transparent',
   border: 'none',
   boxShadow: 'none',
})
