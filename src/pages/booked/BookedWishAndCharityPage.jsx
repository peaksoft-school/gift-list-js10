import React from 'react'
import { useSelector } from 'react-redux'

export const BookedWishAndCharityPage = () => {
   const bookedWish = useSelector((state) => console.log(state))
   console.log(bookedWish)
   return (
      <div>
         <div>
            <h2>Желания</h2>
         </div>
         <div>
            <h2>Благотворительность</h2>
         </div>
      </div>
   )
}
