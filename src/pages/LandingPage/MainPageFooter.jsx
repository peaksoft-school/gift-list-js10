import { styled } from '@mui/material'
import {
   FacebookImg,
   InstagramImg,
   MainPageFooterMailingIcon,
   VkImg,
} from '../../assets'
import { Input } from '../../components/UI/input/Input'
import {
   scrollToAboutProjectComponentHandler,
   scrollToMainPagePartOneComponentHandler,
} from './MainPagePartFirst'

export const MainPageFooter = () => {
   return (
      <FooterContainer>
         <FooterIcon>
            <FooterText>
               <Paragraph>GIFT LIST</Paragraph>
               <ParagraphCol>Социальная сеть нового поколения</ParagraphCol>
               <ImgContainer>
                  <a
                     href="https://www.facebook.com/groups/amigoscode"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Facebook"
                  >
                     <FacebookImg />
                  </a>
                  <a
                     href="https://id.vk.com/auth?v=1.46.0&app_id=7934655&uuid=f15f37cfaa&redirect_uri=https%3A%2F%2Fm.vk.com%2F%3Fact%3Dclient_url_proxy%26_to%3DaHR0cHM6Ly9tLnZrLmNvbS9sb2dpbj90bz1abVZsWkEtLQ%26_proxy%3Did_auth%26_openBrowser%3D1&app_settings=W10%3D&action=eyJuYW1lIjoibm9fcGFzc3dvcmRfZmxvdyIsInBhcmFtcyI6eyJ0eXBlIjoic2lnbl9pbiIsIndpdGhfdmthcHAiOnRydWV9fQ%3D%3D&scheme=space_gray"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="VK"
                  >
                     <VkImg />
                  </a>
                  <a
                     href="https://www.instagram.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="INSTAGRAM"
                  >
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
                  {/* <InputStyle
                     placeholder="Введите ваш Email"
                     icon={
                        <ButtonContainer>
                           <IconButtonComponent type="button">
                           </IconButtonComponent>
                           </ButtonContainer>
                        }
                     /> */}
                  <InputStyle placeholder="Введите ваш Email" />
                  <ButtonContainer>
                     <StyledMainPageFooterMailingIcon />
                  </ButtonContainer>
               </InputContainer>
            </div>
         </FooterIcon>
         <FooterEnding>
            <p>Peaksoft © 2023 Все права защищены</p>
         </FooterEnding>
      </FooterContainer>
   )
}

const StyledMainPageFooterMailingIcon = styled(MainPageFooterMailingIcon)({
   height: '47px',
   width: '47px',
})

const ButtonContainer = styled('div')({
   paddingTop: '5.5px',
   position: 'absolute',
   top: '-11px',
   right: '-5px',
   cursor: 'pointer',
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
   ':hover': {
      color: '#999999',
   },
})

const InputContainer = styled('div')({
   display: 'flex',
   position: 'relative',
})
const ImgContainer = styled('div')({
   gap: '0.938rem',
   display: 'flex',
   paddingTop: '0.938rem',
   svg: {
      fill: '#808080',
   },
   'svg:hover': {
      fill: '#999999',
   },
})
