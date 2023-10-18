import axios from 'axios'
import { notifyTypes, notifyWithPromise } from './utils/helpers/notify'

export function App() {
   const getAllUsers = async () => {
      try {
         const response = await notifyWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Users successfully taken',
            'Success mesage',
            'Error',
            axios('https://jsonplaceholder.typicode.com/users')
         )
         console.log(response)
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <div className="App">
         <button type="button" onClick={getAllUsers}>
            Get all users
         </button>
      </div>
   )
}
