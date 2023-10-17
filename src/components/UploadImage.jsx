import { Container, styled } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from './UI/Button'
import { UploadImageIcon } from '../assets'

export const UploadImage = () => {
   const [preview, setPreview] = useState(null)
   const onDrop = useCallback((acceptedFiles) => {
      const file = new FileReader()
      file.onload = function () {
         setPreview(file.result)
      }
      file.readAsDataURL(acceptedFiles[0])
   }, [])
   const { getRootProps, getInputProps } = useDropzone({ onDrop })
   return (
      <>
         <StyledContainer {...getRootProps()}>
            <input {...getInputProps()} /* accept="images/*" */ />
            {/* <Content> */}
            {!preview && (
               <>
                  <UploadImageIcon />
                  <p>Нажмите для добавления фотографии</p>
               </>
            )}
            {/* </Content> */}
            {preview && <img src={preview} alt="test" />}
         </StyledContainer>
         <Button onClick={() => setPreview(null)}>Delete</Button>
      </>
   )
}

const StyledContainer = styled(Container)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#F6F6F9',
   border: '1px solid #DCDCE4',
   textAlign: 'center',
   gap: '20px',
   width: '17%',
   height: '25vh',
   borderRadius: '9px',
   img: {
      width: '100%',
   },
})

/* 

upbload image 
   const [file, setFile] = useState(null)
   function handleOnChange(e) {
      const {
         target: { files },
      } = e
      setFile(files[0])
   }
   async function handlOnSubmit(e) {
      handleOnChange()
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
         <Button onClick={(e) => handlOnSubmit(e)}>Trasnform</Button>


*/
