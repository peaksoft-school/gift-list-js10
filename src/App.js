import { notifyTypes, notifyWithPromise } from './utils/helpers/notify'

export function App() {
   // eslint-disable-next-line no-promise-executor-return
   const resolvePromise = () =>
      // eslint-disable-next-line no-promise-executor-return
      new Promise((resolve) => setTimeout(resolve, 3000))
   const rejectPromise = () =>
      // eslint-disable-next-line no-promise-executor-return
      new Promise((resolve, reject) => setTimeout(reject, 3000))
   const sendNotifyInfo = () => {
      notifyWithPromise(
         notifyTypes.NOTIFY_TYPE_INFO,
         resolvePromise,
         'Инофрмация',
         'Текст соощения'
      )
   }
   const sendNotifyError = () => {
      notifyWithPromise(
         notifyTypes.NOTIFY_TYPE_ERROR,
         rejectPromise,
         'Ошибка',
         'Текст соощения'
      )
   }
   const sendNotifyWarning = () => {
      notifyWithPromise(
         notifyTypes.NOTIFY_TYPE_WARNING,
         rejectPromise,
         'Внимание',
         'Текст соощения'
      )
   }
   const sendNotifySuccess = () => {
      notifyWithPromise(
         notifyTypes.NOTIFY_TYPE_SUCCESS,
         resolvePromise,
         'Спасибо что сообщили нам об этом',
         'Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной средой для всех.'
      )
   }
   return (
      <div className="App">
         <button type="button" onClick={sendNotifyInfo}>
            Click for info
         </button>
         <button type="button" onClick={sendNotifyError}>
            Click for error
         </button>
         <button type="button" onClick={sendNotifyWarning}>
            Click for warning
         </button>
         <button type="button" onClick={sendNotifySuccess}>
            Click for success
         </button>
      </div>
   )
}
