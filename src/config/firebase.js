import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyDE3skqRL33Poggohfa0wjtL93lU50VO50',
   authDomain: 'giftlist-f3dbd.firebaseapp.com',
   projectId: 'giftlist-f3dbd',
   storageBucket: 'giftlist-f3dbd.appspot.com',
   messagingSenderId: '375627835481',
   appId: '1:375627835481:web:79888dca67892cb99ce948',
   measurementId: 'G-JTNBJHD2FL',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
