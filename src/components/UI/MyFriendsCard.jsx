import { Box, Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import CardImage from '../../assets/images/CardImage.png'

const myFriends = [
   {
      name: 'Annette Black',
      img: CardImage,
      wish: 12,
      textWish: 'Желаний',
      holidays: 10,
      textHolidays: 'Праздников',
   },
]

export const MyFriendsCard = () => {
   //    const [counter, setCounter] = useState(0)
   //    const [count, setCount] = useState(0)
   return (
      <div>
         {myFriends.map((item) => {
            return (
               <Card>
                  <CardMedia image={item.img} />
                  <CardContent>{item.name}</CardContent>
                  <Box>
                     <p>{item.wish}</p>
                     <p>{item.textWish}</p>
                  </Box>
                  <Box>
                     <p>{item.holidays}</p>
                     <p>{item.textHolidays}</p>
                  </Box>
               </Card>
            )
         })}
      </div>
   )
}
