import React from 'react'
import { useDispatch } from 'react-redux'
import { updateProfileThunk } from '../store/profile/profileThunk'
import { UpdateProfile } from './UpdateProfile'

export const UserUpdateProfilePage = () => {
   const dispatch = useDispatch()
   const values = (values) => dispatch(updateProfileThunk(values))
   return <UpdateProfile functionForGetValues={values} />
}
