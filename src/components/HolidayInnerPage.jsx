import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllWishesByHolidayId } from '../store/holiday/holidayThunk'
import { convertDateFormat } from '../utils/constants/formatedDate'
import { Card } from './UI/card/Card'

export const HolidayInnerPage = () => {
   const wishes = useSelector((state) => state.holidaySlice.wishesByHolidayId)
   const dispatch = useDispatch()
   const { holidayId } = useParams()

   useEffect(() => {
      dispatch(getAllWishesByHolidayId(holidayId))
   }, [])
   console.log(wishes)
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
      </div>
   )
}
