import { styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Sidebar } from './components/UI/Sidebar'
import { UpdateProfile } from './pages/UpdateProfile'

export function App() {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      control,
   } = useForm({
      defaultValues: {
         name: 'Айзада',
         surname: 'Абдукулова',
         email: 'Aizada@gmail.com',
      },
      // resetOptions,
   })
   const onSubmint = (values) => {
      console.log(values)
   }
   console.log(errors)
   return (
      <div style={{ margin: '50px' }}>
         <Sidebar />
         <MainContainer>
            <UpdateProfile
               register={register}
               handleSubmit={handleSubmit}
               reset={reset}
               errors={errors}
               onSubmit={onSubmint}
               control={control}
            />
         </MainContainer>
      </div>
   )
}

const MainContainer = styled('div')({
   marginLeft: '18.4rem',
})
