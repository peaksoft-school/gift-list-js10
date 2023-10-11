import React, { useState, useEffect } from 'react'

import { styled } from '@mui/material'

import { MainContent } from './MainContent'

import img from '../assets/images/main-like.png'

import images from '../assets/images/main-dis.png'

import image from '../assets/images/main-loy.png'

const DivContainer = styled('div')`
   display: flex;
`
const DivContent = styled('div')`
   display: flex;
`
const DivContext = styled('div')`
   display: flex;
`

const Img = styled('img')`
   margin-left: -8.125rem;
   margin-top: -20px;
`
const Image = styled('img')`
   margin-left: 2.313rem;
   margin-top: -20px;
`
const Images = styled('img')`
   margin-left: -1.875rem;
   margin-top: -20px;
`

const Button = styled('button')`
   width: 18.188rem;
   padding: 0.438rem 1.5rem 0.438rem 1.5rem;
   background-color: #8639b5;
   color: white;
   border: none;
   border-radius: 0.313rem;
   margin-left: 34.375rem;
   margin-top: 9.375rem;
   height: 2.438rem;
   &:hover {
      background-color: #6a1f99;
      cursor: pointer;
   }
`
const Paragraph = styled('p')`
   margin-top: 0.625rem;
   padding-left: 16.875rem;
   margin-left: -13.125rem;
`
const Paragrap = styled('p')`
   margin-left: 11.875rem;
   font-size: 1.063rem;
   margin-top: 0.625rem;
`
const Par = styled('p')`
   color: #8639b5;
   font-size: 2.5rem;
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 5.625rem;
   padding-right: 3.125rem;
`
const Pteg = styled('p')`
   color: #8639b5;
   font-size: 2.5rem;
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 5.625rem;
   padding-right: 6.25rem;
`
const Para = styled('p')`
   color: #8639b5;
   font-size: 2.5rem;
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 11.875rem;
`

const Div = styled('div')`
   justify-content: center;
   display: flex;
   padding: 1.25rem 3.125rem 1.25rem 3.125rem;
   margin-right: 70px;
`
const DivBlock = styled('div')`
   justify-content: center;
   display: flex;
   margin-top: 9.375rem;
   margin-left: 10.525rem;
`

const B = styled('b')`
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 0.5rem;
   font-size: 1.438rem;
`
const Bo = styled('b')`
   font-family: Arial, Helvetica, sans-serif;
   margin-left: -3.613rem;
   font-size: 1.438rem;
   margin-top: -1.45rem;
`
const Bl = styled('b')`
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 0.625rem;
   font-size: 1.438rem;
`
const Li = styled('li')`
   margin-top: 1.875rem;
   margin-left: -2.75rem;
   padding: 3.75rem -3.75rem 3.75rem 3.75rem;
`
const Lis = styled('li')`
   margin-top: 1.875rem;
   margin-left: 2.125rem;
   padding: 3.75rem -3.75rem 3.75rem 3.75rem;
`
const Liss = styled('li')`
   margin-top: 1.875rem;
   margin-left: 1.75rem;
   padding: 3.75rem -3.75rem 3.75rem 3.75rem;
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
      <div>
         <Div>
            <div>
               <Para>{userCount} K+</Para>
               <Paragrap>Пользоватей</Paragrap>
            </div>
            <div>
               <Par>{giftCount} K+</Par>
               <Paragraph>Размещение подарков</Paragraph>
            </div>
            <div>
               <Pteg>{donationCount} K+</Pteg>
               <Paragraph>Подаренных подарков</Paragraph>
            </div>
            <div>
               <Par>{checkCount} K+</Par>
               <Paragraph>Реализованный благотворительной помощи</Paragraph>
            </div>
         </Div>
         <DivBlock>
            <DivContainer>
               <div>
                  <Img src={img} alt="" />
               </div>
               <ul>
                  <Bo>Дари то что, необходимо</Bo>
                  <Li>Находи своих близких</Li>
                  <Li>Просматривай их списки желаний</Li>
                  <Li>Узнавай о ближайших мероприятиях</Li>
               </ul>
            </DivContainer>
            <div>
               <Image src={images} alt="" />
            </div>
            <DivContent>
               <ul>
                  <B>Удобство в использовании</B>
                  <Liss>Создавай неограниченное колчичество желаний </Liss>
                  <Liss>Добавляй подарки которые ты действительно хочешь</Liss>
                  <Liss>Делись с своими желаниями с другими</Liss>
               </ul>
            </DivContent>
            <DivContext>
               <div>
                  <Images src={image} alt="" />
               </div>
               <ul>
                  <Bl>Твори добро</Bl>
                  <Lis>Дари благотворительные подарки</Lis>
                  <Lis>Делись своими вещами</Lis>
                  <Lis>Помогай другим приобрести необходимое</Lis>
               </ul>
            </DivContext>
         </DivBlock>
         <Button type="button">ЗАРЕГЕСТРИРОВАТСЯ</Button>
         <MainContent />
      </div>
   )
}
