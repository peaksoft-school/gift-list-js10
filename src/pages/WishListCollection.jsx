import { styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/UI/card/Card'
import { deleteWish, getAllWishes } from '../store/wish/wishThunk'
import { wishOptions } from '../utils/helpers/constants'

export const WishListCollection = ({ isList }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const result = useSelector((state) => state.wish.wishes)
   const { id } = useSelector((state) => state.authLogin)
   const handleChange = (e, wishId) => {
      console.log(e.target.innerText)
      if (e.target.innerText === 'Удалить') {
         dispatch(deleteWish({ wishId, userId: id }))
      } else if (e.target.innerText === 'Редактировать') {
         navigate(`putWish/${wishId}`)
      }
   }

   useEffect(() => {
      dispatch(getAllWishes(id))
   }, [dispatch])
   return (
      <Cards>
         {result.map((item) => (
            <Card
               key={item.wishId}
               cardImage={item.wishImage}
               cardName={item.wishName}
               ownerName={item.fullName}
               ownerImage={item.userImage}
               holiday={item.holidayName}
               status={item.wishStatus}
               date={item.dateOfHoliday}
               variant="secondary"
               list={isList}
               meatBallsOptions={wishOptions}
               handleChange={(e) => handleChange(e, item.wishId)}
            />
         ))}
      </Cards>
   )
}
const Cards = styled('div')({
   justifyContent: 'center',
   display: 'flex',
   flexWrap: 'wrap',
})
