import { styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { deleteWish, getAllWishesByUserId } from '../../store/wish/wishThunk'
import { wishOptions } from '../../utils/helpers/constants'
import { EmptyComponent } from '../LandingPage/EmptyComponent'
import { providerEvent } from '../../events/customEvents'

export const handleEditOrDeleteWishMeatballsChange = async (
   e,
   wishId,
   dispatch,
   userId,
   navigate
) => {
   if (e.target.innerText === 'Удалить') {
      dispatch(deleteWish({ wishId, userId }))
   } else if (e.target.innerText === 'Редактировать') {
      navigate(`putWish`, { state: { wishId } })
   }
}
export const WishListCollection = ({ isList }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { wishes } = useSelector((state) => state.wish)
   const { id } = useSelector((state) => state.authLogin)
   const cardPage = (wishId, wishName) => {
      providerEvent({ action: 'name', payload: wishName })
      navigate(`${wishId}`)
   }
   const onAddWish = () => {
      navigate('addWish')
   }

   useEffect(() => {
      dispatch(getAllWishesByUserId(id))
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
                  meatballsOptions={
                     wish.wishStatus === 'PENDING' ? wishOptions : []
                  }
                  handleChange={(e) =>
                     handleEditOrDeleteWishMeatballsChange(
                        e,
                        wish.wishId,
                        dispatch,
                        id,
                        navigate
                     )
                  }
                  showBottomBooker="true"
                  onGetThingById={() => cardPage(wish.wishId, wish.wishName)}
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
