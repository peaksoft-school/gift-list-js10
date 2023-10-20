import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { MainContent } from './MainContent'
import { MainDisIcon, MainLike, MainLoyIcon } from '../assets'

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
`

const PartStage = styled('div')`
   display: flex;
   justify-content: space-between;
`

const Block = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 4rem;
`

const Label = styled('p')`
   font-size: 0.875rem;
`

const Value = styled('p')`
   color: #8639b5;
   font-size: 2.675rem;
`

const BlockStage = styled('div')`
   display: flex;
   justify-content: center;
   padding: 1rem;
`

const Feature = styled('div')`
   text-align: center;
   margin: 2rem;
`

const Icon = styled('img')`
   margin: 2rem;
   margin-left: -15%;
   display: block;
`

const Title = styled('b')`
   font-size: 1.5rem;
   display: flex;
`

const Description = styled('li')`
   font-size: 1rem;
   margin: 1rem;
   display: flex;
   margin-top: 1rem;
`
const Conter = styled('div')`
   margin-top: -5rem;
   padding: 0.5rem;
`

const Button = styled('button')`
   width: 18.188rem;
   padding: 0.625rem;
   background-color: #8639b5;
   color: white;
   border: none;
   border-radius: 0.313rem;
   margin: 7rem;
   cursor: pointer;
   &:hover {
      background-color: #6a1f99;
   }
`

export function MainPage() {
   const [userCount, setUserCount] = useState(0)
   const [giftCount, setGiftCount] = useState(0)
   const [donationCount, setDonationCount] = useState(0)
   const [checkCount, setCheckCount] = useState(0)

   const targetUserCount = 100
   const targetGiftCount = 10
   const targetDonationCount = 15
   const targetCheckCount = 9

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
                  <Description>Находи своих близких</Description>
                  <Description>Просматривай их списки желаний</Description>
                  <Description>Узнавай о ближайших мероприятиях</Description>
               </Conter>
            </Feature>
            <Feature>
               <Icon src={MainDisIcon} alt="like" />
               <Conter>
                  <Title>Удобство в использовании</Title>
                  <Description>
                     Создавай неограниченное количество желаний
                  </Description>
                  <Description>
                     Добавляй подарки которые ты действительно хочешь
                  </Description>
                  <Description>Делись своими желаниями с другими</Description>
               </Conter>
            </Feature>
            <Feature>
               <Icon src={MainLoyIcon} alt="brush" />
               <Conter>
                  <Title>Твори добро</Title>
                  <Description>Дари благотворительные подарки</Description>
                  <Description>Делись своими вещами</Description>
                  <Description>
                     Помогай другим приобрести необходимое
                  </Description>
               </Conter>
            </Feature>
         </BlockStage>
         <Button type="button">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
         <MainContent />
      </Container>
   )
}
