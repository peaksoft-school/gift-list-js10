import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WishListForm } from '../LandingPage/WishListForm'

export const AddCharityFormPage = () => {
   const navigate = useNavigate()
   const onCloseForm = () => navigate(-1)
   const onSubmitForm = (values, data) => {
      // TODO: write post request to save values plus data and
      // second post request to convert image file to link
      console.log(values, data)
   }

   return (
      <div>
         <WishListForm variant onClose={onCloseForm} onSubmit={onSubmitForm} />
      </div>
   )
}
