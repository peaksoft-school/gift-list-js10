import React from 'react'
import { Modal } from '../../components/Modal'
import { UploadImage } from '../../components/UploadImage'
import { Input } from '../../components/UI/input/Input'
import { Button } from '../../components/UI/Button'

export const CreateMailingModal = () => {
   return (
      <Modal>
         <form>
            <h2>Создание рассылки</h2>
            <UploadImage />
            <Input
               labelText="Тема"
               placeholder="Введите тему рассылки"
               name="mailing"
            />
            <Input
               labelText="Текст рассылки"
               placeholder="Введите текст рассылки"
               name="mailingText"
            />
            <div>
               <Button variant="outlined">Отмена</Button>
               <Button variant="primaty">Отправить</Button>
            </div>
         </form>
      </Modal>
   )
}
