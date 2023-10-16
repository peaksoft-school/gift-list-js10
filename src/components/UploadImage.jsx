import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button } from './UI/Button'

export const UploadImage = () => {
   const [file, setFile] = useState()
   async function handlOnSubmit(e) {
      e.preventDefault()
      if (typeof file === 'undefined') return
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'test-react-uploads-unsigned')
      formData.append('api_key', process.env.VITE_CLOUDINARY_API_KEY)
      const results = await fetch(
         'https://api.cloudinary.com/v1_1/dglxnavah/image/upload',
         {
            method: 'POST',
            body: formData,
         }
      ).then((r) => r.json())
      console.log('results', results)
   }
   function handleOnChange(e) {
      const {
         target: { files },
      } = e
      setFile(files[0])
   }
   return (
      <>
         <TextField
            type="file"
            name="image"
            className="image"
            onChange={(e) => handleOnChange(e)}
            multiline
         />
         <Button onClick={(e) => handlOnSubmit(e)}>Trasnform</Button>
      </>
   )
}
