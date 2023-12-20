import { Box, Button, CardContent, CardMedia, styled } from '@mui/material'

import Empty from '../../assets/images/Empty.png'

export const EmptyComponent = ({
   variant,
   cardText,
   buttonOnClick,
   buttonText,
}) => {
   return (
      <EmptyContent>
         <CardMedia
            image={Empty}
            title="empty-image"
            component="img"
            alt="empty-image"
         />

         <CardContent>
            {variant ? 'Вы пока не добавили желание!' : cardText}
         </CardContent>
         <Button variant="contained" onClick={buttonOnClick}>
            + {buttonText}
         </Button>
      </EmptyContent>
   )
}

const EmptyContent = styled(Box)({
   width: '600px',
   margin: '0 auto',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '33px',
   alignItems: 'center',
})
