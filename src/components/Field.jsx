import { Button, styled } from '@mui/material'

const Display = styled('div')({
   display: 'flex',
})

const Around = styled('div')({
   display: 'flex',
})

const FLowContent = styled('div')({
   padding: '12.5rem',
   marginTop: '1.25rem',
   marginLeft: '-1.875rem',
})
const DefContent = styled('div')({
   marginLeft: '-52.25rem',
})
const Paragraph = styled('p')({
   padding: '1.25rem',
   marginTop: '1.25rem',
   color: '#5c5c5c',
})
const ButtonContainer = styled('div')({
   display: 'flex',
})
const TextFeature = styled('p')({
   color: '#000',
})

export function Field() {
   return (
      <div>
         <FLowContent>
            <DefContent>
               <Display>
                  <Paragraph>
                     Категория: <TextFeature>Школьные</TextFeature>
                  </Paragraph>
                  <Paragraph>
                     Состояние: <TextFeature>Б/У</TextFeature>
                  </Paragraph>
               </Display>
               <Around>
                  <Paragraph>
                     Подкатегория: <TextFeature>Сумка</TextFeature>
                  </Paragraph>
                  <Paragraph>
                     Дата добавления: <TextFeature>12.04.2022</TextFeature>
                  </Paragraph>
               </Around>
            </DefContent>
            <ButtonContainer>
               <Button variant="text" type="button">
                  Удалить
               </Button>
               <Button variant="contained" type="button">
                  Заблокировать
               </Button>
            </ButtonContainer>
         </FLowContent>
      </div>
   )
}
