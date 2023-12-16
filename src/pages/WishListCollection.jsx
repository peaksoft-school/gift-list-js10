import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/UI/card/Card'
import { deleteWish, getAllWishes, getWishById } from '../store/wish/wishThunk'
import { wishOptions } from '../utils/helpers/constants'
import { EmptyComponent } from './LandingPage/EmptyComponent'

export const WishListCollection = ({ isList }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { wishes, wish } = useSelector((state) => state.wish)
   const { id } = useSelector((state) => state.authLogin)
   const [wishId, setWishId] = useState(null)
   const handleChange = async (e, wishId) => {
      if (e.target.innerText === 'Удалить') {
         dispatch(deleteWish({ wishId, userId: id }))
      } else if (e.target.innerText === 'Редактировать') {
         setWishId(wishId)
         dispatch(getWishById(wishId))
            .unwrap()
            .then(() => navigate(`putWish/${wishId}`, { state: { wish } }))
      }
   }
   const cardPage = (wishId) => {
      navigate(`${wishId}`)
   }
   const onAddWish = () => {
      navigate('addWish')
   }

   useEffect(() => {
      dispatch(getAllWishes(id))
      if (wishId) {
         return () => {
            navigate(`putWish/${wishId}`, { state: { wish } })
         }
      }
      return () => {}
   }, [dispatch])
   return (
      <>
         <Cards>
            {wishes.map((wish) => (
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
         {!wishes.length && <EmptyComponent onAddSomething={onAddWish} />}
      </>
   )
}

const Cards = styled('div')({
   justifyContent: 'start',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})
