import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { EmptyComponent } from '../LandingPage/EmptyComponent'
import { getAllWishesByHolidayId } from '../../store/holiday/holidayThunk'
import { convertDateFormat } from '../../utils/constants/formatedDate'
import { Card } from '../../components/UI/card/Card'

export const HolidayInnerPage = () => {
   const wishes = useSelector((state) => state.holiday.wishesByHolidayId)
   const dispatch = useDispatch()
   const { holidayId } = useParams()

   useEffect(() => {
      dispatch(getAllWishesByHolidayId(holidayId))
   }, [])
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
               // TODO
               //    meatballsOptions={}
               // handleChange={() => }
            />
         ))}
         {!wishes.length && (
            <EmptyComponent
               // TODO: buttonOnClick Ariet should navigate to add wish component
               cardText="Вы пока не добавили желаемый подарок на этот праздник"
               buttonText="Добавить желание"
            />
         )}
      </div>
   )
}
