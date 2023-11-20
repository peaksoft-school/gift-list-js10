import { styled } from '@mui/material'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { CancelIcon, UploadImageIcon } from '../assets'

export const UploadImage = ({
   preview = { file: '', url: '' },
   setPreview,
}) => {
   const onDrop = useCallback((acceptedFiles) => {
      const file = new FileReader()
      file.onload = () => {
         setPreview({ file: acceptedFiles[0], url: file.result })
      }
      file.readAsDataURL(acceptedFiles[0])
   }, [])
   const { getRootProps, getInputProps } = useDropzone({ onDrop })
   return (
      <StyledContainer {...getRootProps()}>
         <input {...getInputProps()} />
         {!preview?.url && (
            <>
               <UploadImageIcon />
               <p>Нажмите для добавления фотографии</p>
            </>
         )}
         {preview?.url && (
            <>
               <img src={preview.url} alt="test" />
               <StyledCancelIcon
                  onClick={(e) => {
                     e.stopPropagation()
                     setPreview(null)
                  }}
               />
            </>
         )}
      </StyledContainer>
   )
}

const StyledCancelIcon = styled(CancelIcon)({
   position: 'absolute',
   top: '0',
   right: '0',
})

const StyledContainer = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#F6F6F9',
   border: '1px solid #DCDCE4',
   textAlign: 'center',
   gap: '20px',
   height: '27vh',
   borderRadius: '9px',
   position: 'relative',
   img: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
   },
})
