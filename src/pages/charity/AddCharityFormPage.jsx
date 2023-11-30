import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCharity } from '../../store/charity/charityThunk'
import { WishListForm } from '../LandingPage/WishListForm'

export const AddCharityFormPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { id } = useSelector((state) => state.charity)
   const onCloseForm = () => navigate(-1)

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

   return (
      <div>
         <WishListForm variant onClose={onCloseForm} onSubmit={onSubmitForm} />
      </div>
   )
}
