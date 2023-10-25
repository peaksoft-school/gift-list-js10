import { styled } from '@mui/material'

import { HumanIcon } from '../assets'

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
   marginLeft: '-67.25rem',
})
const Paragraph = styled('p')({
   padding: '1.25rem',
   marginTop: '1.25rem',
   color: '#5c5c5c',
})

const TextFeature = styled('p')({
   color: '#000',
})
const IconContainer = styled('div')({
   marginLeft: '-55.625rem',
   marginTop: '-12.5rem',
})

const SpanContent = styled('div')({
   marginTop: '-2.5rem',
   marginLeft: '3.438rem',
})

const Span = styled('span')({
   color: '#fd5200',
})

const user = {
   role: 'user',
}

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
         </FLowContent>
         {user.role === 'user' && (
            <IconContainer>
               <img src={HumanIcon} alt="human" />
               <SpanContent>
                  <span>Аида Каримова</span>
                  <div>
                     <Span>Причина жалобы</Span>
                  </div>
               </SpanContent>
            </IconContainer>
         )}
      </div>
   )
}
