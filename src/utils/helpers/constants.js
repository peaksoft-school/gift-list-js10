import dayjs from 'dayjs'
import { SamatOkenov, Ellipse, Aida, Askar } from '../../assets'
import { notifyTypes, toastWithoutPromise } from './toast'
import { axiosInstanceMultiPartFormData } from '../../config/axiosInstanceWithMultipartFormDataType'

export const notifications = [
   {
      name: 'Самат Окенов',
      id: '1',
      image: SamatOkenov,
      description: ' добавил желаемый подарок',
      date: '25.05.2022',
   },
   {
      name: 'Название подарка ',
      id: '2',
      image: Ellipse,
      description: ' было забронировано анонимным пользователем',
      date: '25.05.2022',
   },
   {
      name: 'Название подарка',
      id: '3',
      image: Aida,
      description: ' было забронировано Аида Мамытбек',
      date: '25.05.2022',
   },
   {
      name: 'Аскар Оморов ',
      id: '4',
      image: Askar,
      description: 'отправил запрос в друзья',
      date: '25.05.2022',
   },
   {
      name: 'Аскар Оморов ',
      id: '5',
      image: Askar,
      description: 'отправил запрос в друзья',
      date: '25.05.2022',
   },
   {
      name: 'Аскар Оморов ',
      id: '6',
      image: Askar,
      description: 'отправил запрос в друзья',
      date: '25.05.2022',
   },
]

export const isValidDateFormat = (formattedDate) => {
   const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/
   return dateRegex.test(formattedDate)
}

export const formatDate = (date) => {
   return dayjs(date).format('YYYY-MM-DD')
}

export const uploadFile = async (file) => {
   try {
      const formData = new FormData()
      formData.set('file', file)
      const response = await axiosInstanceMultiPartFormData.post(
         '/storages/upload',
         formData
      )
      return response.data
   } catch (error) {
      toastWithoutPromise(
         notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
         'Error while upload file',
         error
      )
      return error
   }
}
