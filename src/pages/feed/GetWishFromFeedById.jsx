import React from 'react'
import { useParams } from 'react-router-dom'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
import { cards } from './GetAllFeedPage'

export const getWishById = (id) => {
   return cards.find((card) => card.id === id)
}

export const GetWishFromFeedById = () => {
   const { wishId } = useParams()
   return (
      <InnerPageOfGiftWithAnonymousBookingAndMailing
         data={getWishById(+wishId)}
      />
   )
}
