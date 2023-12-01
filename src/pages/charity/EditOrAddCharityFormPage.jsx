import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCharity } from '../../store/charity/charityThunk'
import { WishListForm } from '../LandingPage/WishListForm'

export const EditOrAddCharityFormPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { id } = useSelector((state) => state.authLogin)
   const onCloseForm = () => navigate(-1)
   const [charity, setCharity] = useState()

   const onSubmitForm = (values, data) => {
      // uploadFile(data.file).then(({ image }) =>

      console.log(data)
      const image =
         'https://media.istockphoto.com/id/1253376435/vector/laptop-with-video-player-vector-icon-metal-laptoop-with-player-white-background.jpg?s=170667a&w=0&k=20&c=MnkWAyMmjQz7whVnzbS3dHv-31KcXA1wGsggbdmDdJY='

      dispatch(
         addCharity({ userId: id, charity: { ...values, image, navigate } })
      )
      // )
   }

   const handleDataUpdated = (event) => {
      if (event.detail.action === 'charity') {
         setCharity(event.detail.payload)
      }
   }

   useEffect(() => {
      window.addEventListener('providerEvent', handleDataUpdated)
      return () => {
         window.removeEventListener('providerEvent', handleDataUpdated)
      }
   }, [])

   return (
      <div>
         <WishListForm
            defaultValues={charity}
            variant
            onClose={onCloseForm}
            onSubmit={onSubmitForm}
         />
      </div>
   )
}
