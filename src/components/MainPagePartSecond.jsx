import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDisIcon, MainLike, MainLoyIcon } from '../assets'
import { MainPagePartThird } from '../pages/LandingPage/MainPagePartThird'
import { MainContent } from './MainContent'

export function MainPagePartSecond() {
   const [userCount, setUserCount] = useState(0)
   const [giftCount, setGiftCount] = useState(0)
   const [donationCount, setDonationCount] = useState(0)
   const [checkCount, setCheckCount] = useState(0)

   const targetUserCount = 100
   const targetGiftCount = 10
   const targetDonationCount = 15
   const targetCheckCount = 9

   const navigate = useNavigate()

   const onSignUp = () => {
      navigate('/main-page/registration')
   }

   useEffect(() => {
      const userInterval = setInterval(() => {
         if (userCount < targetUserCount) {
            setUserCount(userCount + 10)
         }
      }, 100)

      const giftInterval = setInterval(() => {
         if (giftCount < targetGiftCount) {
            setGiftCount(giftCount + 1)
         }
      }, 100)

      const donationInterval = setInterval(() => {
         if (donationCount < targetDonationCount) {
            setDonationCount(donationCount + 1)
         }
      }, 100)

      const checkInterval = setInterval(() => {
         if (checkCount < targetCheckCount) {
            setCheckCount(checkCount + 1)
         }
      }, 100)

      const handleScroll = () => {
         if (window.scrollY === 0) {
            setUserCount(0)
            setGiftCount(0)
            setDonationCount(0)
            setCheckCount(0)
         }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
         clearInterval(userInterval)
         clearInterval(giftInterval)
         clearInterval(donationInterval)
         clearInterval(checkInterval)
         window.removeEventListener('scroll', handleScroll)
      }
   }, [userCount, giftCount, donationCount])

   return (
      <Container>
         <PartStage>
            <Block>
               <Value>{userCount} K+</Value>
               <Label>Пользоватей</Label>
            </Block>
            <Block>
               <Value>{giftCount} K+</Value>
               <Label>Размещение подарков</Label>
            </Block>
            <Block>
               <Value>{donationCount} K+</Value>
               <Label>Подаренных подарков</Label>
            </Block>
            <Block>
               <Value>{checkCount} K+</Value>
               <Label>Реализованный благотворительной помощи</Label>
            </Block>
         </PartStage>
         <BlockStage>
            <Feature>
               <Icon src={MainLike} alt="heart" />
               <Conter>
                  <Title>Дари то, что необходимо</Title>
                  <UlContainer>
                     <Description>Находи своих близких</Description>
                     <Description>Просматривай их списки желаний</Description>
                     <Description>Узнавай о ближайших мероприятиях</Description>
                  </UlContainer>
               </Conter>
            </Feature>
            <Feature>
               <Icon src={MainDisIcon} alt="like" />
               <Conter>
                  <Title>Удобство в использовании</Title>
                  <UlContainer>
                     <Description>
                        Создавай неограниченное количество желаний
                     </Description>
                     <Description>
                        Добавляй подарки которые ты действительно хочешь
                     </Description>
                     <Description>
                        Делись своими желаниями с другими
                     </Description>
                  </UlContainer>
               </Conter>
            </Feature>
            <Feature>
               <Icon src={MainLoyIcon} alt="brush" />
               <Conter>
                  <Title>Твори добро</Title>
                  <UlContainer>
                     <Description>Дари благотворительные подарки</Description>
                     <Description>Делись своими вещами</Description>
                     <Description>
                        Помогай другим приобрести необходимое
                     </Description>
                  </UlContainer>
               </Conter>
            </Feature>
         </BlockStage>
         <Button type="button" onClick={onSignUp}>
            ЗАРЕГИСТРИРОВАТЬСЯ
         </Button>
         <MainContent />
         <MainPagePartThird />
      </Container>
   )
}

const Container = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',
   width: '100%',
})

const PartStage = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const Block = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding: '4rem',
})

const Label = styled('p')({
   fontSize: '0.875rem',
})

const Value = styled('p')({
   color: '#8639b5',
   fontSize: '2.675rem',
})

const BlockStage = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   padding: '1rem',
   gap: '1.25rem',
})

const Feature = styled('div')({
   textAlign: 'start',
   display: 'flex',
   alignItems: 'start',
   gap: '0.313rem',
   padding: '2rem',
})

const Icon = styled('img')({
   marginLeft: '-2%',
   display: 'block',
})

const Title = styled('b')({
   fontSize: '1.5rem',
   display: 'flex',
   paddingBottom: '0.938rem',
})

const Description = styled('li')({
   fontSize: '1rem',
   marginTop: '1rem',
   display: 'list-item',
})
const Conter = styled('div')({
   padding: '0.5rem',
})

const Button = styled('button')({
   width: '18.188rem',
   padding: '0.625rem',
   backgroundColor: '#8639b5',
   color: 'white',
   border: 'none',
   borderRadius: '0.313rem',
   margin: '7rem',
   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#6a1f99',
   },
})
const UlContainer = styled('ul')({
   display: 'flex',
   flexDirection: 'column',
})
