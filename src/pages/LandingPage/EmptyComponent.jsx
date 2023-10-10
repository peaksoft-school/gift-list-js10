import {
   Typography,
   Button,
   CardMedia,
   CardContent,
   styled,
   Box,
} from '@mui/material'

import Empty from '../../assets/images/Empty.png'

export const EmptyComponent = ({ variant }) => {
   return (
      <Container>
         <Typography variant="h6">
            {variant ? 'Список желаний' : 'Название праздника'}
         </Typography>

         <EmptyContent>
            <CardMedia
               image={Empty}
               title="empty-image"
               component="img"
               alt="empty-image"
            />

            <CardContent>
               {variant
                  ? 'Вы пока не добавили желание!'
                  : ' Вы пока не добавили желаемый подарок на этот праздник'}
            </CardContent>
            <Button variant="contained">+ Добавить желание</Button>
            {/* // azyryncha mui button koshup turdum kiyin Button componneta merge
         bolgondo oshonu chakyryp koiobuz// */}
         </EmptyContent>
      </Container>
   )
}

const EmptyContent = styled(Box)({
   width: '600px',
   margin: '0 auto',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '33px',
   alignItems: 'center',
})

const Container = styled('div')({
   background: '#F7F8FA',
   padding: '20px',
})
