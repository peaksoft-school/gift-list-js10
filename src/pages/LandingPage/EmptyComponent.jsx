import { Box, CardContent, CardMedia, styled } from '@mui/material'

import Empty from '../../assets/images/Empty.png'
import { Button } from '../../components/UI/Button'

export const EmptyComponent = ({
   variant,
   title = 'Вы пока не добавили желание!',
   buttonText = 'Добавить желание',
   onClick,
}) => {
   return (
      <Container>
         <EmptyContent>
            <CardMedia
               image={Empty}
               title="empty-image"
               component="img"
               alt="empty-image"
            />

            <CardContent>
               {variant ? 'Вы пока не добавили желание!' : title}
            </CardContent>
            <Button onClick={onClick} variant="primary">
               + {buttonText}
            </Button>
         </EmptyContent>
      </Container>
   )
}

const EmptyContent = styled(Box)({
   width: '600px',
   // margin: '0 auto',
   // height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '33px',
   alignItems: 'center',
})

const Container = styled('div')({
   background: '#F7F8FA',
   padding: '20px',
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
})
