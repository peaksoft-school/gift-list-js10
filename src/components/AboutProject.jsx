import React from 'react'
import styled from 'styled-components'
import Macbookpro from '../assets/images/Device - Macbook Pro.png'
import { teachers } from '../utils/constants/teachers'
import { OurTeachers } from './OurTeachers'

export const AboutProject = () => {
   return (
      <AboutProjectPart>
         <AboutProjectInfo>
            <AboutProjectMainTitleAndDiscripton>
               <AboutProjectMainTitle>О проекте</AboutProjectMainTitle>
               <AboutProjectDescription>
                  <p>
                     Найти удачный подарок, который принесёт радость, не всегда
                     простая задача.
                  </p>
                  <br />
                  <p>
                     Благодаря нашему сервису у вас есть возможность не только
                     обрадовать подарком, но и помочь другим приобрести
                     необходимые им вещи.
                  </p>
                  <br />
                  <p>
                     В разделе благотворительность вы можете найти список
                     опубликованных вещей, забронировав, вы связываетесь с их
                     обладателем.
                  </p>
               </AboutProjectDescription>
            </AboutProjectMainTitleAndDiscripton>
            <AboutProjectImageContainer>
               <MacbookImage src={Macbookpro} alt="macbook" />
            </AboutProjectImageContainer>
         </AboutProjectInfo>
         <Teachers>
            {teachers.map((teacher) => (
               <OurTeachers key={teacher.id} teacher={teacher} />
            ))}
         </Teachers>
      </AboutProjectPart>
   )
}

const AboutProjectPart = styled.div`
   margin: 0 auto;
   width: 73rem;
   font-family: 'Inter';
   font-weight: 500;
`

const AboutProjectInfo = styled.div`
   width: 100%;
   display: flex;
   gap: 11rem;
`

const AboutProjectMainTitleAndDiscripton = styled.div``

const AboutProjectMainTitle = styled.h1`
   margin-bottom: 2rem;
`

const AboutProjectDescription = styled.div`
   font-size: 1rem;
   width: 31.25rem;
   font-weight: 400;
`
const AboutProjectImageContainer = styled.div`
   width: 33rem;
`

const MacbookImage = styled.img`
   width: 100%;
`

const Teachers = styled.div`
   width: 100%;
   display: flex;
   gap: 1.88rem;
   margin-top: 7.5rem;
`
