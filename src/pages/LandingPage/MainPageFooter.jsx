import { styled } from '@mui/material'
import { FacebookImg, VkImg, InstagramImg, IconButton } from '../../assets'
import { Input } from '../../components/UI/input/Input'

export const MainPageFooter = () => {
   const scrollToMainPagePartOneComponentHandler = () => {
      window.scrollTo({
         top: 1690,
         behavior: 'smooth',
      })
   }
   const scrollToAboutProjectComponentHandler = () => {
      window.scrollTo({
         top: 2600,
         behavior: 'smooth',
      })
   }
   return (
      <FooterContainer>
         <FooterIcon>
            <FooterText>
               <Paragraph>GIFT LIST</Paragraph>
               <ParagraphCol>Социальная сеть нового поколения</ParagraphCol>
               <ImgContainer>
                  <a href="https://www.facebook.com/" target="blank">
                     <FacebookImg />
                  </a>
                  <a href="https://vk.com/" target="blank">
                     <VkImg />
                  </a>
                  <a href="https://www.instagram.com/" target="blank">
                     <InstagramImg />
                  </a>
               </ImgContainer>
            </FooterText>
            <FooterText>
               <Paragraph>Навигация</Paragraph>
               <ParagraphSt onClick={scrollToAboutProjectComponentHandler}>
                  О проекте
               </ParagraphSt>
               <ParagraphSt onClick={scrollToMainPagePartOneComponentHandler}>
                  Благотворительность
               </ParagraphSt>
            </FooterText>
            <div>
               <Paragraph>Подписатся на рассылку </Paragraph>
               <InputContainer>
                  <InputStyle
                     placeholder="Введите ваш Email"
                     icon={
                        <ButtonContainer>
                           <IconButtonComponent type="button">
                              <img src={IconButton} alt="icon" />
                           </IconButtonComponent>
                        </ButtonContainer>
                     }
                  />
               </InputContainer>
            </div>
         </FooterIcon>
         <FooterEnding>
            <p>Peaksoft © 2022 Все права защищены</p>
         </FooterEnding>
      </FooterContainer>
   )
}
const ButtonContainer = styled('div')({
   paddingTop: '5.5px',
})

const FooterContainer = styled('div')({
   paddingTop: '7rem',
   width: '100%',
})

const FooterIcon = styled('div')({
   justifyContent: 'center',
   alignItems: 'center',
   display: 'flex',
   gap: '15rem',
   border: ' 0.063rem solid grey',
   padding: '2rem',
})

const Paragraph = styled('p')({
   fontSize: '1.25rem',
   paddingBottom: '0.625rem',
   textAlign: 'start',
})

const ParagraphCol = styled('p')({
   color: 'gray',
})

const FooterText = styled('div')({
   textAlign: 'start',
})

const InputStyle = styled(Input)({
   input: {
      height: '0.625rem',
      paddingRight: 0,
      width: '250px',
   },
   '.css-1s9x1kt-MuiInputBase-root-MuiOutlinedInput-root': {
      paddingRight: '0',
   },
   '.css-1d3z3hw-MuiOutlinedInput-notchedOutline ': {
      borderRight: 'none',
   },
})

const FooterEnding = styled('div')({
   padding: '2rem',
})
const ParagraphSt = styled('p')({
   paddingBottom: '0.625rem',
   cursor: 'pointer',
})

const IconButtonComponent = styled('button')({
   borderRadius: '1.563rem',
   border: 'none',
   cursor: 'pointer',
   width: '30px',
})

const InputContainer = styled('div')({
   display: 'flex',
})
const ImgContainer = styled('div')({
   gap: '0.938rem',
   display: 'flex',
   paddingTop: '0.938rem',
})
