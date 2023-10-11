import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import FacebookIcon from '../../assets/icons/facebook-con.svg'
import VkIcon from '../../assets/icons/vk-icon.svg'
import InstagramIcon from '../../assets/icons/instagram-icon.svg'

export const MainPage = () => {
   return (
      <StyledMuiMainPage component="div">
         <MainPageContainer component="header">
            <MainPageNav component="nav">
               <AboutProjectAndCharityTitle variant="p">
                  О проекте
               </AboutProjectAndCharityTitle>
               <ProjectTitle variant="h1">GIFT LIST</ProjectTitle>
               <AboutProjectAndCharityTitle variant="p">
                  Благотворительность
               </AboutProjectAndCharityTitle>
            </MainPageNav>
            <SocialMediasContainer>
               <img src={FacebookIcon} alt="facebook" />
               <img src={VkIcon} alt="vk" />
               <img src={InstagramIcon} alt="instagram" />
            </SocialMediasContainer>
            <ProjectInfo component="div">
               <MainTitle variant="h1">
                  Социальная сеть нового поколения
               </MainTitle>
               <Description>
                  Всегда подскажет, что подарить близким и осуществит твои
                  желания
               </Description>
               <ButtonsContainer component="div">
                  <Button
                     style={{ backgroundColor: '#F91C3D' }}
                     variant="contained"
                  >
                     Войти
                  </Button>
                  <Button
                     style={{ border: '1px solid white' }}
                     variant="contained"
                  >
                     Регистрация
                  </Button>
               </ButtonsContainer>
            </ProjectInfo>
         </MainPageContainer>
      </StyledMuiMainPage>
   )
}

const StyledMuiMainPage = styled(Box)`
   background-color: #8639b5;
   color: white;
`

const MainPageContainer = styled(Box)`
   padding-top: 1.5rem;
   width: 73rem;
   margin: 0 auto;
`

const MainPageNav = styled(Box)`
   display: flex;
   justify-content: space-between;
`

const ProjectTitle = styled(Typography)`
   font-size: 1.5rem;
   font-weight: 700;
`
const AboutProjectAndCharityTitle = styled(Typography)`
   font-size: 1rem;
   font-weight: 500;
`
const SocialMediasContainer = styled(Box)`
   width: 1.375rem;
   height: 7.875rem;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   img {
      width: 100%;
      height: 1.375rem;
   }
`

const ProjectInfo = styled(Box)`
   width: 33.875rem;
   height: 22.0625rem;
   border: solid;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`

const MainTitle = styled(Typography)`
   text-align: center;
   font-size: 3.375rem;
   font-family: Inter;
`

const Description = styled(Typography)`
   width: 21rem;
   text-align: center;
   font-size: 1rem;
   font-weight: 400;
   font-family: Inter;
`

const ButtonsContainer = styled(Box)`
   width: 18.1875rem;
   height: 5.9375rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
