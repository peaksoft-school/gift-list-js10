import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'

export const GetWishFromFeedById = () => {
   const params = useParams()
   const { feeds } = useSelector((state) => state.feedSlice)

   const feed = feeds.find(
      (feed) => String(feed.wish.wishId) === params?.wishId
   )

   return (
      <InnerPageOfGiftWithAnonymousBookingAndMailing
         description={feed?.wish.description}
         cardImage={feed?.wish?.image}
         cardName={feed?.wish.wishName}
         holiday={feed?.wish.holiday.nameHoliday}
         holidayDate={feed?.wish.holiday.dateOfHoliday}
         ownerName={feed?.ownerUser.fullName}
         ownerImage={feed?.ownerUser?.image}
         bookerImage={feed?.bookedUser?.image}
      />
   )
}
