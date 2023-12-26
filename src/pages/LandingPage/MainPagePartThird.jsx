import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import Macbookpro from '../../assets/images/Device - Macbook Pro.png'
import { OurTeacher } from './OurTeacher'
import { MainPageFooter } from './MainPageFooter'
import KatyaDesigner from '../../assets/images/Katya_designer.png'
import MarinaMarketer from '../../assets/images/Marina_marketer.png'
import SavaPRmanager from '../../assets/images/Sava_PR_manager.png'
import PashaFounder from '../../assets/images/Pasha_founder.png'
import SashaChiefEditor from '../../assets/images/Sasha_chief_editor.png'
import LenyaDeveloper from '../../assets/images/Lenya_developer.png'

const teachers = [
   {
      id: 1,
      url: KatyaDesigner,
      styles: {
         borderRadius: '0px 0px 0px 100px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      nameAndSpecial: 'Катя, ведущий',
      company: 'дизайнер TailGroup',
   },
   {
      id: 2,
      url: MarinaMarketer,
      styles: {
         borderRadius: '100px 0px 100px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      nameAndSpecial: 'Марина, маркетолог',
      company: 'Headers Market',
   },
   {
      id: 3,
      url: SavaPRmanager,
      styles: {
         borderRadius: '0px 0px 75px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      nameAndSpecial: 'Сава, PR-менеджер',
      company: 'Central-Media',
   },
   {
      id: 4,
      url: PashaFounder,
      styles: {
         borderRadius: '100px 0px 0px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      nameAndSpecial: 'Паша, Основатель ',
      company: 'LeadCompany',
   },
   {
      id: 5,
      url: SashaChiefEditor,
      styles: {
         borderRadius: '100px 0px 100px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      nameAndSpecial: 'Саша, главный редактор',
      company: 'Just Journal',
   },
   {
      id: 6,
      url: LenyaDeveloper,
      styles: {
         borderRadius: '0px 100px 0px 0px',
         marginBottom: '0.94rem',
         width: '10.625rem',
         height: '10.625rem',
      },
      nameAndSpecial: 'Лёня, ведущий',
      company: 'разработчик Ymail',
   },
]

export const MainPagePartThird = () => {
   return (
      <AboutProjectPart component="div">
         <AboutProjectInfo component="div">
            <div>
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
            </div>
            <AboutProjectImageContainer component="div">
               <img src={Macbookpro} alt="Macbookpro" />
            </AboutProjectImageContainer>
         </AboutProjectInfo>
         <Teachers component="div">
            {teachers.map((teacher) => (
               <OurTeacher key={teacher.id} teacher={teacher} />
            ))}
         </Teachers>
         <MainPageFooter />
      </AboutProjectPart>
   )
}

const AboutProjectPart = styled(Box)`
   width: 100%;
   font-family: 'Inter';
   font-weight: 500;
   padding-top: 130px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const AboutProjectInfo = styled(Box)`
   width: 80%;
   display: flex;
   gap: 11rem;
   justify-content: center;
`

const AboutProjectMainTitle = styled(Typography)`
   font-size: 3rem;
   margin-bottom: 2rem;
   display: flex;
`

const AboutProjectDescriptionText = styled(Typography)`
   font-size: 1rem;
   font-weight: 400;
   text-align: start;
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
   width: 80%;
   display: flex;
   gap: 1.88rem;
   margin-top: 7.5rem;
   justify-content: center;
`
