import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import Macbookpro from '../assets/images/Device - Macbook Pro.png'
import { OurTeacher } from './OurTeacher'

import Manager from '../assets/images/manager.jpg'
import ProjectManager from '../assets/images/project-manager.jpg'
import FullStackDeveloper from '../assets/images/fullstack-developer.jpg'
import SeniorDeveloper from '../assets/images/senior-developer.jpg'
import MiddleDeveloper from '../assets/images/middle-developer.jpg'
import JuniorDeveloper from '../assets/images/junior-developer.jpg'

const teachers = [
   {
      id: 1,
      url: Manager,
      styles: {
         borderRadius: '0px 0px 0px 100px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      name: 'Рон',
      special: 'Менеджер Headers Market',
   },
   {
      id: 2,
      url: FullStackDeveloper,
      styles: {
         borderRadius: '100px 0px 100px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      name: 'Джамал',
      special: 'Фуллстек Central Media',
   },
   {
      id: 3,
      url: SeniorDeveloper,
      styles: {
         borderRadius: '0px 0px 75px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      name: 'Брюс',
      special: 'Старший разработчик LeadCompany',
   },
   {
      id: 4,
      url: MiddleDeveloper,
      styles: {
         borderRadius: '100px 0px 0px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      name: 'Линь-Сяо',
      special: 'Разработчик Just Journal',
   },
   {
      id: 5,
      url: JuniorDeveloper,
      styles: {
         borderRadius: '100px 0px 100px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      name: 'Джек',
      special: 'Младший разработчик Yamail',
   },
   {
      id: 6,
      url: ProjectManager,
      styles: {
         borderRadius: '0px 100px 0px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      name: 'Кайла',
      special: 'Проект менеджер',
   },
]

export const AboutProject = () => {
   return (
      <AboutProjectPart component="div">
         <AboutProjectInfo component="div">
            <AboutProjectMainTitleAndDiscripton component="div">
               <AboutProjectMainTitle variant="h1">
                  О проекте
               </AboutProjectMainTitle>
               <AboutProjectDescription component="div">
                  <AboutProjectDescriptionText variant="p">
                     Найти удачный подарок, который принесёт радость, не всегда
                     простая задача.
                  </AboutProjectDescriptionText>
                  <AboutProjectDescriptionText variant="p">
                     Благодаря нашему сервису у вас есть возможность не только
                     обрадовать подарком, но и помочь другим приобрести
                     необходимые им вещи.
                  </AboutProjectDescriptionText>
                  <AboutProjectDescriptionText variant="p">
                     В разделе благотворительность вы можете найти список
                     опубликованных вещей, забронировав, вы связываетесь с их
                     обладателем.
                  </AboutProjectDescriptionText>
               </AboutProjectDescription>
            </AboutProjectMainTitleAndDiscripton>
            <AboutProjectImageContainer component="div">
               <img src={Macbookpro} alt="Macbookpro" />
            </AboutProjectImageContainer>
         </AboutProjectInfo>
         <Teachers component="div">
            {teachers.map((teacher) => (
               <OurTeacher key={teacher.id} teacher={teacher} />
            ))}
         </Teachers>
      </AboutProjectPart>
   )
}

const AboutProjectPart = styled(Box)`
   margin: 0 auto;
   width: 73rem;
   font-family: 'Inter';
   font-weight: 500;
`

const AboutProjectInfo = styled(Box)`
   width: 100%;
   display: flex;
   gap: 11rem;
`

const AboutProjectMainTitleAndDiscripton = styled(Box)``

const AboutProjectMainTitle = styled(Typography)`
   font-size: 3rem;
   margin-bottom: 2rem;
`

const AboutProjectDescriptionText = styled(Typography)`
   font-size: 1rem;
   font-weight: 400;
`

const AboutProjectDescription = styled(Box)`
   width: 31.25rem;
   display: flex;
   flex-direction: column;
   gap: 1.2rem;
`
const AboutProjectImageContainer = styled(Box)`
   width: 33rem;
`

const Teachers = styled(Box)`
   width: 100%;
   display: flex;
   gap: 1.88rem;
   margin-top: 7.5rem;
`
