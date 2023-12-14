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
      if (e.target.innerText === 'Удалить') {
         dispatch(deleteWish({ wishId, userId: id }))
      } else if (e.target.innerText === 'Редактировать') {
         navigate(`putWish/${wishId}`)
      }
   }
   const cardPage = (wishId) => {
      navigate(`${wishId}`)
   }

   useEffect(() => {
      dispatch(getAllWishes(id))
   }, [dispatch])
   return (
      <Cards>
         {result.map((wish) => (
            <Card
               key={wish.wishId}
               cardImage={wish.wishImage}
               cardName={wish.wishName}
               ownerName={wish.fullName}
               ownerImage={wish.userImage}
               holiday={wish.holidayName}
               status={wish.wishStatus}
               date={wish.dateOfHoliday}
               variant="secondary"
               list={isList}
               meatballsOptions={wishOptions}
               handleChange={(e) => handleChange(e, wish.wishId)}
               showBottomBooker="true"
               onGetThingById={() => cardPage(wish.wishId)}
            />
         ))}
      </Cards>
   )
}

const Cards = styled('div')({
   justifyContent: 'start',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})
