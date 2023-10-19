import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   styled,
} from '@mui/material'
import React, { useState } from 'react'
import { Modal } from './Modal'
import { Button } from './UI/Button'

const causes = [
   'Жестокость и шокирующий контент',
   'Проявление ненависти',
   'Нелегальные действия или регламентированные товары',
   'Спам',
   'Призывы к насилию, опасные действия',
   'Сцены порнографического характера',
   'Прочее',
]

export const ComplaintModal = ({ toggleModal, isOpen, onSend }) => {
   const [cause, setCause] = useState('')
   const handleChange = (e) => setCause(e.target.value)
   return (
      <Modal isOpen={isOpen} handleClose={toggleModal} padding="30px">
         <Heading>Пожаловаться</Heading>
         <FormControl>
            <SubHeading>
               Почему вы хотите пожаловаться на эту публикацию?
            </SubHeading>
            <StyledRadioGroup value={cause} onChange={handleChange}>
               {causes.map((cause) => (
                  <FormControlLabel
                     key={cause}
                     value={cause}
                     control={
                        <Radio
                           checkedIcon={<BpCheckedIcon />}
                           icon={<BpIcon />}
                        />
                     }
                     label={cause}
                  />
               ))}
            </StyledRadioGroup>
            <ButtonActions>
               <StyledButton
                  onClick={() => {
                     toggleModal()
                     setCause('')
                  }}
               >
                  Отмена
               </StyledButton>
               <StyledButton
                  onClick={() => {
                     onSend(cause)
                     toggleModal()
                     setCause('')
                  }}
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
