// import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { InnerPageOfGiftWithAnonymousBookingAndMailing } from '../../components/InnerPageOfGiftWithAnonymousBookingAndMailing'
// import { axiosInstance } from '../../config/axiosInstance'

export const GetWishFromFeedById = () => {
   const { wishId } = useParams()
   const { feeds } = useSelector((state) => state.feedSlice)
   const feed = feeds.find((feed) => feed.id === +wishId)
   console.log(feed)

   // const [testData, setTestData] = useState({})
   // useEffect(() => {
   //    const getAllPhotos = async () => {
   //       try {
   //          const response = await axiosInstance.get(`/photos/${wishId}`)
   //          setTestData(response.data)
   //       } catch (error) {
   //          console.log(error)
   //       }
   //    }
   //    getAllPhotos()
   // }, [])

   // const feed = feeds.find((feed) => feed.wish.wishId === +wishId)
   return (
      <InnerPageOfGiftWithAnonymousBookingAndMailing
      // description={feed.wish.description}
      // cardImage={testData.thumbnailUrl}
      // cardName={testData.title}
      // holiday={feed.wish.holiday.nameHoliday}
      // holidayDate={feed.wish.holiday.dateOfHoliday}
      // ownerName={feed?.name}
      // ownerImage={testData.url}
      // bookerImage={feed.bookedUser.image}
      />
      /*  <InnerPageOfGiftWithAnonymousBookingAndMailing
            description={feed.wish.description}
            cardImage={feed.wish.image}
            cardName={feed.wish.wishName}
            holiday={feed.wish.holiday.nameHoliday}
            holidayDate={feed.wish.holiday.dateOfHoliday}
            ownerName={feed.ownerUser.fullName}
            ownerImage={feed.ownerUser.image}
            bookerImage={feed.bookedUser.image}
         /> */
   )
}
