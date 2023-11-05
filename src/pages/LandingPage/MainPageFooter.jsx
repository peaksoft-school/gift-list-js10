import { styled } from '@mui/material'
import { FacebookImg, VkImg, InstagramImg, IconButton } from '../../assets'
import { Input } from '../../components/UI/input/Input'

export const MainPageFooter = () => {
   return (
      <FooterContainer>
         <FooterIcon>
            <FooterText>
               <Paragraph>GIFT LIST</Paragraph>
               <ParagraphCol>Социальная сеть нового поколения</ParagraphCol>
               <ImgContainer>
                  <FacebookImg />
                  <VkImg />
                  <InstagramImg />
               </ImgContainer>
            </FooterText>
            <FooterText>
               <Paragraph>Навигация</Paragraph>
               <ParagraphSt>О проекте</ParagraphSt>
               <p>Благотворительность</p>
            </FooterText>
            <div>
               <Paragraph>Подписатся на рассылку </Paragraph>
               <InputContainer>
                  <InputStyle />
                  <IconButtonComponent type="button">
                     <img src={IconButton} alt="icon" />
                  </IconButtonComponent>
               </InputContainer>
            </div>
         </FooterIcon>
         <FooterEnding>
            <p>Peaksoft © 2022 Все права защищены</p>
         </FooterEnding>
      </FooterContainer>
   )
}

const FooterContainer = styled('div')({
   padding: '0.5rem',
   paddingTop: '7rem',
   width: '102.8rem',
   marginLeft: '-12rem',
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
})

const ParagraphCol = styled('p')({
   color: 'gray',
})

const FooterText = styled('div')({
   textAlign: 'start',
})

const InputStyle = styled(Input)({
   input: { height: '0.625rem' },
})

const FooterEnding = styled('div')({
   padding: '2rem',
})
const ParagraphSt = styled('p')({
   paddingBottom: '0.625rem',
})

const IconButtonComponent = styled('button')({
   borderRadius: '1.563rem',
   border: 'none',
})

const InputContainer = styled('div')({
   display: 'flex',
})
const ImgContainer = styled('div')({
   gap: '0.938rem',
   display: 'flex',
   paddingTop: '0.938rem',
})
