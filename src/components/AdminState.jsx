import { styled } from '@mui/material'
import { useState } from 'react'
import { ShirtIcon, UserDataIcon, UserWait } from '../assets'
import { Field } from './Field'

const Container = styled('div')({
   display: 'flex',
   alignItems: 'flex-start',
   position: 'fixed',
})

const Icon = styled('img')({
   width: '21.438rem',
   height: '21.438rem',
   flexShrink: '0',
   borderRadius: '0.5rem',
   padding: '1.25rem',
})

const Image = styled('img')({
   width: '2.5rem',
   height: '2.5rem',
   flexShrink: '0',
   borderRadius: '2.5rem',
   marginTop: '2.5rem',
})

const MainContext = styled('p')({
   fontSize: '1.25rem',
})

const Main = styled('div')({
   marginTop: '-1.875rem',
})

const Span = styled('span')({
   color: '#5c5c5c',
})

const FrowContent = styled('div')({
   margin: '3.438rem',
   marginTop: '-2.188rem',
})

const FieldText = styled('p')({
   marginTop: '1.25rem',
})

const Title = styled('span')({
   color: '#3774d0',
   margin: '7.5rem',
   cursor: 'pointer',
})

const Img = styled('img')({
   marginLeft: '15rem',
})
const ContainerIcon = styled('div')({
   marginTop: '-1.25rem',
})

export function AdminState() {
   const [isState, setIsState] = useState('Забронировано')
   const [isIcon, setIsIcon] = useState(true)

   const toggleState = () => {
      if (isState === 'Забронировано') {
         setIsState('В ожидании')
      } else {
         setIsState('Забронировано')
      }
      setIsIcon(!isIcon)
   }

   return (
      <Container>
         <Icon src={ShirtIcon} alt="shirt" />
         <div>
            <Image src={UserDataIcon} alt="user-data" />
            <FrowContent>
               <span>Аида Каримова</span>
               <div>
                  <Span>+996 705 86 95 44</Span>
                  <Title onClick={toggleState}>{isState}</Title>
                  <ContainerIcon>
                     {isIcon && <Img src={UserWait} alt="user-wait" />}
                  </ContainerIcon>
               </div>
            </FrowContent>
            <Main>
               <MainContext>Рубашка</MainContext>
               <div>
                  <FieldText>
                     Рубашка с технологией ProMotion и быстрым, плавным
                     откликом. Грандиозный апгрейд системы камер, открывающий
                     совершенно новые возможности. Исключительная прочность. A15
                     Bionic — самый быстрый чип для iPhone. И впечатляющее время
                     работы без подзарядки. Всё это Pro.
                  </FieldText>
               </div>
            </Main>
         </div>
         <Field />
      </Container>
   )
}
