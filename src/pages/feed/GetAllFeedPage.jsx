import { Paper, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { nameEvent } from '../../events/nameEvent'
import { meetballsFeedOptions } from '../../utils/constants/meatballs-options'
import { getFeedsThunk } from '../../store/feed/feedThunk'
import { ComplaintModal } from '../../components/ComplaintModal'

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
   const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false)
   const toggleCompolaintModal = () => setIsComplaintModalOpen((prev) => !prev)

   const onSendComplaint = (complaintCause) => console.log(complaintCause)

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

   const handleMeetaballsOption = (e) => {
      const selectedOption = e.target.innerText
      console.log(selectedOption)
      switch (selectedOption) {
         case 'Пожаловаться':
            toggleCompolaintModal()
            break
         case 'Добавить в мои подарки':
            break
         default:
            break
      }
   }
   return (
      <>
         <StyledPaper>
            {feeds.map((feed) => (
               <Card
                  handleChange={handleMeetaballsOption}
                  onClick={() => getById(feed.id, feed.name)}
                  key={feed.id}
                  list={isList}
                  bookerImage="https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg"
                  cardImage="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
                  cardName="Письма Элджертона"
                  date="12.04.22"
                  holiday="День рождения"
                  ownerImage="https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg"
                  ownerName="John Doe"
                  meetballsOptions={isWishBooked(true, id)}
               />
            ))}
            {/* {feeds.map((feed) => (
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
         ))} */}
         </StyledPaper>
         <ComplaintModal
            toggleModal={toggleCompolaintModal}
            isOpen={isComplaintModalOpen}
            onSend={onSendComplaint}
         />
      </>
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
