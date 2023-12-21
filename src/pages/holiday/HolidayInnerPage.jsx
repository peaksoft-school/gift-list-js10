import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EmptyComponent } from '../LandingPage/EmptyComponent'
import { getAllWishesByHolidayId } from '../../store/holiday/holidayThunk'
import { convertDateFormat } from '../../utils/constants/formatedDate'
import { Card } from '../../components/UI/card/Card'
import { meatballsDeleteAndEditOptions } from '../../utils/constants/meatballs-options'
import { handleEditOrDeleteWishMeatballsChange } from '../wishes/WishListCollection'

export const HolidayInnerPage = () => {
   const wishes = useSelector((state) => state.holiday.wishesByHolidayId)
   const { id } = useSelector((state) => state.authLogin)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { holidayId } = useParams()

   useEffect(() => {
      dispatch(getAllWishesByHolidayId(holidayId))
   }, [])

   const onAddWish = () => navigate(`addWish`, { state: { holidayId } })
   return (
      <div>
         {wishes.map((wish) => (
            <Card
               variant="secondary"
               cardName={wish.wishName}
               cardImage={wish.wishImage}
               date={convertDateFormat(wish.dateOfHoliday)}
               holiday={wish.holidayName}
               status={wish.wishStatus}
               showBottomBooker="true"
               meatballsOptions={meatballsDeleteAndEditOptions}
               handleChange={(e) =>
                  handleEditOrDeleteWishMeatballsChange(
                     e,
                     wish.wishId,
                     dispatch,
                     id,
                     navigate
                  )
               }
            />
         ))}
         {!wishes.length && (
            <EmptyComponent
               buttonOnClick={onAddWish}
               cardText="Вы пока не добавили желаемый подарок на этот праздник"
               buttonText="Добавить желание"
            />
         )}
      </div>
   )
}
