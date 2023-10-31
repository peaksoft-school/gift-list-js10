import * as yup from 'yup'

export const wishListSchema = yup.object().shape({
   wishName: yup.string().required('Название подарка'),
})
