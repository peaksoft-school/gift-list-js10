import { styled } from '@mui/material'
import { Sidebar } from '../components/UI/Sidebar'
import { TransitionIcon, SecondTransitionIcon } from '../assets'

export const WishListCollection = () => {
   return (
      <div>
         <Sidebar />
         <SecondContainer>
            <IconContainer>
               <ButtonIcon type="button">
                  <img src={TransitionIcon} alt="transition-icon" />
               </ButtonIcon>
               <ButtonIcon type="button">
                  <img
                     src={SecondTransitionIcon}
                     alt="second-transition-icon"
                  />
               </ButtonIcon>
            </IconContainer>
            <ButtonContainer>
               <ButtonComponent type="button">
                  + Добавить желание
               </ButtonComponent>
            </ButtonContainer>
         </SecondContainer>
      </div>
   )
}

const SecondContainer = styled('div')({
   display: 'flex',
   justifyContent: 'end',
})

const ButtonIcon = styled('button')({
   border: 'none',
   cursor: 'pointer',
   borderRadius: '5px',
})

const IconContainer = styled('div')({})

const ButtonContainer = styled('div')({
   paddingTop: '20px',
})

const ButtonComponent = styled('button')({
   width: '219px',
   height: '35px',
   color: 'white',
   backgroundColor: '#8639B5',
   borderRadius: '5px',
   border: 'none',
   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#6a1f99',
   },
})
