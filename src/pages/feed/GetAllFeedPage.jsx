import { Paper, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { getFeedsThunk } from '../../store/slices/feed/feedThunk'
import { meetballsFeedOptions } from '../../utils/constants/meatballs-options'

export const cards = [
   {
      id: 1,
      owner: {
         name: 'John Doe',
         image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
      },
      holiday: 'День рождения',
      name: 'Письма Элджертона',
      image: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      status: 'Забронирован',
      date: '12.04.22',
      newOrOld: 'Б/У',
      booker: {
         name: 'Anybody',
         image: 'https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg',
      },
   },
   {
      id: 2,
      owner: {
         name: 'John Doe',
         image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
      },
      holiday: 'День рождения',
      name: 'Письма Элджертона',
      image: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      status: 'Забронирован',
      date: '12.04.22',
      newOrOld: 'Б/У',
      booker: {
         name: 'Anybody',
         image: 'https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg',
      },
   },
   {
      id: 3,
      owner: {
         name: 'John Doe',
         image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
      },
      holiday: 'День рождения',
      name: 'Письма Элджертона',
      image: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      status: 'Забронирован',
      date: '12.04.22',
      newOrOld: 'Б/У',
      booker: {
         name: 'Anybody',
         image: 'https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg',
      },
   },
   {
      id: 4,
      owner: {
         name: 'John Doe',
         image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
      },
      holiday: 'День рождения',
      name: 'Письма Элджертона',
      image: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      status: 'Забронирован',
      date: '12.04.22',
      newOrOld: 'Б/У',
      booker: {
         name: 'Anybody',
         image: 'https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg',
      },
   },
   {
      id: 5,
      owner: {
         name: 'John Doe',
         image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
      },
      holiday: 'День рождения',
      name: 'Письма Элджертона',
      image: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      status: 'Забронирован',
      date: '12.04.22',
      newOrOld: 'Б/У',
      booker: {
         name: 'Anybody',
         image: 'https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg',
      },
   },
   {
      id: 6,
      owner: {
         name: 'John Doe',
         image: 'https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg',
      },
      holiday: 'День рождения',
      name: 'Письма Элджертона',
      image: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      status: 'Забронирован',
      date: '12.04.22',
      newOrOld: 'Б/У',
      booker: {
         name: 'Anybody',
         image: 'https://www.shutterstock.com/image-vector/mustache-man-say-anybody-here-260nw-546597766.jpg',
      },
   },
]

export const GetAllFeedPage = ({ isList }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const getById = (id) => {
      navigate(`${id}`)
   }

   useEffect(() => {
      dispatch(getFeedsThunk())
   }, [])
   return (
      <StyledPaper>
         {cards.map((card) => (
            <Card
               onClick={() => getById(card.id)}
               key={card.id}
               list={isList}
               card={card}
               meetballsOptions={meetballsFeedOptions.isWishFree}
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
