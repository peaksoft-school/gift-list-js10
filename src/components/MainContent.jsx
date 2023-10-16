import React from 'react'
import { styled } from '@mui/material'
import { MainPageIcon } from '../assets'

const Div = styled('div')`
   width: 100%;
   height: 37.625rem;
   background-color: #8639b5;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 7.5rem 0;
`

const TextContainer = styled('div')`
   flex: 1;
   padding: 2rem;
`

const P = styled('p')`
   color: white;
   font-size: 2.188rem;
`

const Ps = styled('p')`
   color: white;
   margin-top: 1.875rem;
   margin-right: 6.25rem;
`

const Img = styled('img')`
   max-width: 100%;
   max-height: 100%;
   padding: 5rem;
   margin-left: 90px;
`

export function MainContent() {
   return (
      <Div>
         <Img src={MainPageIcon} alt="children" />
         <TextContainer>
            <P>Благотворительность</P>
            <Ps>
               Найти удачный подарок, который принесёт радость, не всегда
               простая задача. <br />
               Благодаря нашему сервису у вас есть возможность не только
               обрадовать подарком, но и помочь другим приобрести необходимые им
               вещи. <br /> В разделе благотворительность вы можете найти список
               опубликованных вещей, забронировав, вы связываетесь с их
               обладателем.
            </Ps>
         </TextContainer>
      </Div>
   )
}
