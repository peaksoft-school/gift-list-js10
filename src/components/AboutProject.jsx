import React from 'react'
import styled from 'styled-components'

export const AboutProject = () => {
   return (
      <AboutProjectPart>
         <h1>О проекте</h1>
         <AboutProjectDescription>
            Найти удачный подарок, который принесёт радость, не всегда простая
            задача. <br /> Благодаря нашему сервису у вас есть возможность не
            только обрадовать подарком, но и помочь другим приобрести
            необходимые им вещи. <br /> В разделе благотворительность вы можете
            найти список опубликованных вещей, забронировав, вы связываетесь с
            их обладателем.
         </AboutProjectDescription>
      </AboutProjectPart>
   )
}

const AboutProjectPart = styled.div`
   margin: 0 auto;
   width: 73rem;
   background-color: aqua;
   font-family: 'Inter';
   font-weight: 500;
`

const AboutProjectDescription = styled.p`
   font-size: 1rem;
   width: 31.25rem;
`
