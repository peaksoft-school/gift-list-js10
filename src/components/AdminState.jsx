import { Button } from '@mui/material'

import { ShirtIcon, UserDataIcon } from '../assets'

export function AdminState() {
   return (
      <div>
         <img src={ShirtIcon} alt="shirt" />
         <img src={UserDataIcon} alt="user-data" />
         <span>Аида Каримова</span>
         <span>+996 705 86 95 44</span>
         <div>
            <b>Рубашка</b>
            <p>
               Рубашка с технологией ProMotion и быстрым, плавным откликом.
               Грандиозный апгрейд системы камер, открывающий совершенно новые
               возможности. Исключительная прочность. A15 Bionic — самый быстрый
               чип для iPhone. И впечатляющее время работы без подзарядки. Всё
               это Pro.
            </p>
         </div>
         <p>Категория:</p>
         <p>Школьные</p>
         <p>Состояние:</p>
         <p>Б/У</p>
         <p>Подкатегория:</p>
         <p>Сумка</p>
         <p>Дата добавления:</p>
         <p>12.04.2022</p>
         <div>
            <Button  type="button">Удалить</Button>
            <Button type="button">Заблокировать</Button>
         </div>
      </div>
   )
}
