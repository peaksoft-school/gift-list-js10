import React from 'react'
import { styled } from '@mui/material'
import { UploadImage } from '../../components/UploadImage'
import { SelectComponent } from '../../components/UI/SelectComponent'
import { TextArea } from '../../components/UI/TextArea'
import { options } from '../../utils/constants/options'
import { Button } from '../../components/UI/Button'
import { Input } from '../../components/UI/input/Input'
import { DateInput } from '../../components/UI/input/DateInput'

export const WishListForm = ({ onClose, onClick }) => {
   return (
      <Container>
         <BlockOne>
            <UploadImage />
         </BlockOne>
         <BlockTwo>
            <h3>Добавление желаемого подарка</h3>

            <InputContainer>
               <Input
                  labelText="Название подарка"
                  placeholder="Введите название подарка"
               />
               <Input
                  labelText="Ссылка на подарок"
                  placeholder="Вставьте ссылку на подарок"
               />
               <SelectComponent
                  data={options}
                  label="Праздник"
                  isButton="true"
                  placeholder="Выберите праздник "
                  value=""
               />
               <DateInput
                  label="Дата праздника"
                  placeholder="Укажите дату праздника"
               />
            </InputContainer>

            <TextArea
               placeholder="Введите описание подарка"
               labelText="Описание подарка"
            />
            <ButtonContainer>
               <Button onClick={onClose}>Отмена</Button>
               <Button onClick={onClick}>Добавить</Button>
            </ButtonContainer>
         </BlockTwo>
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   padding: '20px',
   gap: '20px',
})

const BlockOne = styled('div')({
   width: '16%',
})

const BlockTwo = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
   width: '80%',
   '& > h3': {
      fontSize: '1.125rem',
      fontWeight: 400,
   },
})

const InputContainer = styled('div')({
   display: 'grid',
   gap: '16px',
   gridTemplateColumns: '1fr 1fr',
})

const ButtonContainer = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
   paddingTop: '36px',
   '& > Button': {
      borderRadius: '10px',
      background: 'white',
   },
})
