import React from 'react'
import { styled } from '@mui/material'
import { MainPageIcon } from '../assets'

const MainContainer = styled('div')`
   width: 100%;
   height: 100%;
   background-color: #8639b5;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const TextContainer = styled('div')`
   flex: 1;
   padding: 10rem;
`

const Paragraph = styled('p')`
   color: white;
   font-size: 2.188rem;
`

const Tile = styled('p')`
   color: white;
   padding: 2rem;
`

const Img = styled('img')`
   width: 50%;
   height: 100%;
   padding: 5rem;
`

export function MainContent() {
   return (
      <MainContainer>
         <Img src={MainPageIcon} alt="children" />
         <TextContainer>
            <Paragraph>Благотворительность</Paragraph>
            <Tile>
               Найти удачный подарок, который принесёт радость, не всегда
               простая задача. <br />
               Благодаря нашему сервису у вас есть возможность не только
               обрадовать подарком, но и помочь другим приобрести необходимые им
               вещи. <br /> В разделе благотворительность вы можете найти список
               опубликованных вещей, забронировав, вы связываетесь с их
               обладателем.
            </Tile>
         </TextContainer>
      </MainContainer>
   )
}
