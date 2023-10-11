import { styled } from '@mui/material'
import img from '../assets/images/main-page.png'

const Div = styled('div')`
   width: 90rem;
   height: 37.625rem;
   top: 100.188rem;
   background-color: #8639b5;
   margin-top: 7.5rem;
`
const P = styled('p')`
   color: white;
   margin-left: 56.25rem;
   font-size: 2.188rem;
   font-family: Arial, Helvetica, sans-serif;
   padding-top: 9.375rem;
`
const Ps = styled('P')`
   color: white;
   padding-left: 56.25rem;
   margin-top: 1.875rem;
   margin-right: 6.25rem;
`
const Img = styled('img')`
   margin-left: 8.125rem;
   margin-top: -17.813rem;
`
const Dives = styled('div')`
   margin-left: -6.25rem;
`

export function MainContent() {
   return (
      <div>
         <Div>
            <Dives>
               <P>Благотворительность</P>
               <Ps>
                  Найти Найти удачный подарок, который принесёт радость, не
                  всегда простая задача. <br /> Благодаря нашему сервису у вас
                  есть возможность не только обрадовать подарком, но и помочь
                  другим приобрести необходимые им вещи. <br /> В разделе
                  благотворительность вы можете найти список опубликованных
                  вещей, забронировав, вы связываетесь с их обладателем.
               </Ps>
            </Dives>
            <Img src={img} alt="picture" />
         </Div>
      </div>
   )
}
