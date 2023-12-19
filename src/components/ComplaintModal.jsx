import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   styled,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Modal } from './Modal'
import { Button } from './UI/Button'
import { TextArea } from './UI/TextArea'

export const causes = [
   {
      complaintId: 1,
      textComplaint: 'Жестокость и шокирующий контент',
      textInEnglish: 'CRUELTY_AND_SHOCKING_CONTENT',
   },
   {
      complaintId: 2,
      textComplaint: 'Проявление ненависти',
      textInEnglish: 'MANIFESTATION_OF_HATRED',
   },
   {
      complaintId: 3,
      textComplaint: 'Нелегальные действия или регламентированные товары',
      textInEnglish: 'ILLEGAL_ACTIVITIES_OR_REGULATED_PRODUCTS',
   },
   {
      complaintId: 4,
      textComplaint: 'Спам',
      textInEnglish: 'SPAM',
   },
   {
      complaintId: 5,
      textComplaint: 'Призывы к насилию, опасные действия',
      textInEnglish: 'CALLS_TO_VIOLENCE_DANGEROUS_ACTIONS',
   },
   {
      complaintId: 6,
      textComplaint: 'Сцены порнографического характера',
      textInEnglish: 'SCENES_OF_A_PORNOGRAPHIC_NATURE',
   },
   {
      complaintId: 7,
      textComplaint: 'Прочее',
      textInEnglish: 'OTHER',
   },
]

export const ComplaintModal = ({ toggleModal, isOpen, onSend }) => {
   const [cause, setCause] = useState(0)
   const [newCause, setNewCause] = useState('')
   const isNewCauseValid = newCause.trim().length >= 10
   const handleReadyCause = (e) => setCause(+e.target.value)
   const handleNewCause = (e) => setNewCause(e.target.value)
   useEffect(() => {
      if (cause !== 7) {
         setNewCause('')
      }
   }, [cause])
   const handleClickToggleModalAndClearStates = () => {
      toggleModal()
      setCause(0)
      setNewCause('')
   }
   return (
      <Modal isOpen={isOpen} handleClose={toggleModal} padding="30px">
         <Heading>Пожаловаться</Heading>
         <FormControl>
            <SubHeading>
               Почему вы хотите пожаловаться на эту публикацию?
            </SubHeading>
            <StyledRadioGroup value={cause} onChange={handleReadyCause}>
               {causes.map(({ complaintId, textComplaint }) => (
                  <FormControlLabel
                     key={complaintId}
                     value={complaintId}
                     control={
                        <Radio
                           checkedIcon={<BpCheckedIcon />}
                           icon={<BpIcon />}
                        />
                     }
                     label={textComplaint}
                  />
               ))}
            </StyledRadioGroup>
            {cause === 7 && (
               <TextArea
                  helperText={
                     !isNewCauseValid &&
                     `Длина причины жалобы должна быть больше 10 букв.`
                  }
                  placeholder="Введите причину жалобы сюда..."
                  error={!isNewCauseValid}
                  value={newCause}
                  onChange={handleNewCause}
               />
            )}
            <ButtonActions>
               <StyledButton
                  onClick={() => {
                     handleClickToggleModalAndClearStates()
                  }}
               >
                  Отмена
               </StyledButton>
               <StyledButton
                  onClick={() => {
                     onSend(isNewCauseValid ? newCause : cause)
                     handleClickToggleModalAndClearStates()
                  }}
                  disabled={cause === 7 && !isNewCauseValid}
                  variant="primary"
               >
                  Отправить
               </StyledButton>
            </ButtonActions>
         </FormControl>
      </Modal>
   )
}

const BpIcon = styled('span')(({ theme }) => ({
   borderRadius: '50%',
   width: 16,
   height: 16,
   boxShadow:
      theme.palette.mode === 'dark'
         ? '0 0 0 1px rgb(16 22 26 / 40%)'
         : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
}))

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
   backgroundColor: theme.palette.primary.main,
   '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
   },
   'input:hover ~ &': {
      backgroundColor: '#890fd4',
   },
}))

const StyledRadioGroup = styled(RadioGroup)({
   display: 'flex',
   gap: '10px',
   'label:last-of-type': {
      paddingBottom: '15px',
   },
   fontSize: '0.875rem',
})

const StyledButton = styled(Button)(({ variant }) => ({
   fontSize: '1rem',
   padding: '0.30rem 5rem',
   textTransform: 'inherit',
   ':hover': {
      border: variant !== 'primary' && '1px solid #612386',
   },
   ':active': {
      border: variant !== 'primary' && '1px solid #612386',
   },
}))

const ButtonActions = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   paddingTop: '20px',
})

const Heading = styled('p')({
   fontSize: '1.5rem',
   fontWeight: '500',
   paddingBottom: '25px',
})

const SubHeading = styled(FormLabel)({
   fontSize: '0.875rem',
   fontWeight: '500',
   color: '#23262F',
   '&.Mui-focused': {
      color: '#23262F',
   },
   paddingBottom: '10px',
})
