import React from 'react'
import { Typography, styled } from '@mui/material'
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { UploadImage } from '../../components/UploadImage'
import { SelectComponent } from '../../components/UI/SelectComponent'
import { TextArea } from '../../components/UI/TextArea'
import { options } from '../../utils/constants/options'
import { Button } from '../../components/UI/Button'

export const WishListForm = () => {
   return (
      <Container>
         <BlockOne>
            <UploadImage />
         </BlockOne>
         <BlockTwo>
            <Typography>Добавление желаемого подарка</Typography>

            <div>
               <input type="text" placeholder="Введите название подарка" />{' '}
               <input type="text" placeholder="Вставьте ссылку на подарок" />
               <SelectComponent data={options} label="Праздник" />
               {/* <LocalizationProvider>
                  <DatePicker label="Укажите дату праздника" />
               </LocalizationProvider> */}
               <TextArea
                  placeholder="Введите описание подарка"
                  labelText="Описание подарка"
               />
               <Button>Отмена</Button>
               <Button>Добавить</Button>
            </div>
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
   // width: '217px',
   width: '16%',
})

const BlockTwo = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   width: '80%',
   '& > Button': {
      borderRadius: '10px',
   },
})
