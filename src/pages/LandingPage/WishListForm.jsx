import React from 'react'
import { Typography } from '@mui/material'
import { UploadImage } from '../../components/UploadImage'
import { SelectComponent } from '../../components/UI/SelectComponent'
import { TextArea } from '../../components/UI/TextArea'
import { options } from '../../utils/constants/options'

export const WishListForm = () => {
   return (
      <div>
         <div>
            <UploadImage />
         </div>
         <div>
            <Typography>Добавление желаемого подарка</Typography>
            <input type="text" placeholder="Введите название подарка" />
            <input type="text" placeholder="Вставьте ссылку на подарок" />
            <SelectComponent data={options} label="Праздник" />
            <input type="date" />
            <TextArea
               placeholder="Введите описание подарка"
               label="Описание подарка"
            />
         </div>
      </div>
   )
}
