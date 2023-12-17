import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import {
   ProfileFacebook,
   ProfileInstagram,
   ProfileTelegram,
   ProfileVk,
} from '../../assets/index'
import { Button } from '../../components/UI/Button'

export const Profile = ({
   variant,
   image,
   fullName,
   phoneNumber,
   facebook,
   telegram,
   instagram,
   vk,
   city,
   email,
   shoesSize,
   clothSize,
   interesAndHobbies,
   birthdate,
   importantToKnow,
   onDelete,
   onAcceptFriend,
   onRejectFriend,
   onClickFirstButton,
   onClickSecondButton,
   onClick,
}) => {
   return (
      <ProfileContainer component="div">
         <UserProfilePictureAndUserNameAndSocialsMediaContainer component="div">
            <UserProfilePictureContainer component="div">
               <img src={image} alt={fullName} />
            </UserProfilePictureContainer>
            <UserName variant="p">{fullName}</UserName>
            {variant !== 'roleAdmin' &&
               (() => {
                  switch (variant) {
                     case 'emptyProfile':
                        return (
                           <ApplicationToFriendsContainer>
                              <StyledButton
                                 variant="primary"
                                 onClick={onClickFirstButton}
                              >
                                 Расскажите о себе
                              </StyledButton>
                              <StyledButton
                                 onClick={onClickSecondButton}
                                 variant="outlined"
                              >
                                 Сменить пароль
                              </StyledButton>
                           </ApplicationToFriendsContainer>
                        )
                     case 'myProfile':
                        return (
                           <ApplicationToFriendsContainer>
                              <StyledButton
                                 variant="primary"
                                 onClick={onClickFirstButton}
                              >
                                 Редактировать
                              </StyledButton>
                              <StyledButton
                                 onClick={onClickSecondButton}
                                 variant="outlined"
                              >
                                 Сменить пароль
                              </StyledButton>
                           </ApplicationToFriendsContainer>
                        )
                     case 'applicationToFriends':
                        return (
                           <ApplicationToFriendsContainer>
                              <StyledButton
                                 variant="primary"
                                 onClick={onAcceptFriend}
                              >
                                 Принять заявку
                              </StyledButton>
                              <StyledButton
                                 variant="outlined"
                                 onClick={onRejectFriend}
                              >
                                 Отклонить
                              </StyledButton>
                           </ApplicationToFriendsContainer>
                        )
                     case 'removeFromFriends':
                        return (
                           <StyledButton variant="outlined" onClick={onDelete}>
                              Удалить из друзей
                           </StyledButton>
                        )
                     default:
                        return (
                           <StyledButton variant="primary" onClick={onClick}>
                              Добавить в друзья
                           </StyledButton>
                        )
                  }
               })()}
            <UserSocialMediaContainer component="div">
               {facebook && (
                  <a href={facebook} target="blank" aria-label="facebook">
                     <ProfileFacebook />
                  </a>
               )}
               {instagram && (
                  <a href={instagram} target="blank" aria-label="Insatgram">
                     <ProfileInstagram />
                  </a>
               )}
               {telegram && (
                  <a href={telegram} target="blank" aria-label="Telegram">
                     <ProfileTelegram />
                  </a>
               )}
               {vk && (
                  <a href={vk} target="blank" aria-label="Vk">
                     <ProfileVk />
                  </a>
               )}
            </UserSocialMediaContainer>
         </UserProfilePictureAndUserNameAndSocialsMediaContainer>

         <UserInfoContainer component="div">
            {/* basic information */}
            <InformationText>Основная информация</InformationText>
            <StyledContentWrapper>
               <StyledBlockOne>
                  <UserInformationAreaBlockOne>
                     Город: <StyledContent>{city}</StyledContent>
                  </UserInformationAreaBlockOne>
                  <UserInformationAreaBlockOne>
                     Email: <StyledContent>{email}</StyledContent>
                  </UserInformationAreaBlockOne>
                  <div>
                     <InformationText>Интересы, хобби</InformationText>
                     <UserInformationAreaBlockOne>
                        Интересы,хобби:
                        <StyledContent>{interesAndHobbies}</StyledContent>
                     </UserInformationAreaBlockOne>
                  </div>
                  <div>
                     <InformationText>Доп. инфа</InformationText>
                     <UserInformationAreaBlockOne>
                        Размер одежды:
                        <StyledContent>{clothSize}</StyledContent>
                     </UserInformationAreaBlockOne>
                  </div>
               </StyledBlockOne>
               <StyledBlockTwo>
                  <UserInformationAreaBlockOne>
                     Дата рождения:
                     <StyledContent>{birthdate}</StyledContent>
                  </UserInformationAreaBlockOne>
                  <UserInformationAreaBlockOne>
                     Номер телефона:
                     <StyledContent>{phoneNumber}</StyledContent>
                  </UserInformationAreaBlockOne>
                  <UserInformationAreaBlockTwo className="important">
                     Важно знать:
                     <StyledContent>{importantToKnow}</StyledContent>
                  </UserInformationAreaBlockTwo>
                  <UserInformationAreaBlockTwo>
                     Размер обуви:
                     <StyledContent>{shoesSize}</StyledContent>
                  </UserInformationAreaBlockTwo>
               </StyledBlockTwo>
            </StyledContentWrapper>
            {variant === 'roleAdmin' && (
               <RemoveOrBlockContainer component="div">
                  <RemoveButton variant="outlined">Удалить</RemoveButton>
                  <StyledButton variant="primary">Заблокировать</StyledButton>
               </RemoveOrBlockContainer>
            )}
         </UserInfoContainer>
      </ProfileContainer>
   )
}

const StyledBlockTwo = styled('div')({
   display: 'flex',
   gap: '20px',
   flexDirection: 'column',
   width: '50%',
   '&.important': { height: '8.9vh', width: '23vw' },
})

const StyledBlockOne = styled('div')({
   display: 'flex',
   gap: '20px',
   flexDirection: 'column',
   width: '50%',
})

const StyledContentWrapper = styled('div')({
   display: 'flex',
   width: '100%',
})

const StyledContent = styled('p')({
   color: 'black',
   fontSize: '1rem',
   paddingTop: '8px',
})

const ProfileContainer = styled(Box)({
   padding: '20px',
   paddingTop: '20px',
   display: 'flex',
   backgroundColor: '#fff',
   height: '72vh',
})

const UserProfilePictureAndUserNameAndSocialsMediaContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width: '16rem',
   gap: '20px',
   textAlign: 'center',
})

const StyledButton = styled(Button)({
   textTransform: 'none',
})

const RemoveButton = styled(Button)({
   backgroundColor: '#fff',
   textTransform: 'none',
   border: 'none',
   ':hover': {
      border: 'none',
   },
})

const UserProfilePictureContainer = styled(Box)({
   width: '11.898rem',
   height: '11.875rem',
   img: {
      width: '100%',
      height: '100%',
      borderRadius: '5px',
   },
})

const UserName = styled(Typography)({
   display: 'block',
   fontWeight: '500',
   fontSize: '1.125rem',
})

const UserSocialMediaContainer = styled(Box)({
   width: '95%',
   display: 'flex',
   justifyContent: 'space-between',
})

// user information

const UserInfoContainer = styled(Box)({
   padding: '48px 70px 0px 68px',
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
})

const RemoveOrBlockContainer = styled(Box)({
   marginTop: '1rem',
   display: 'flex',
   justifyContent: 'end',
   width: '100%',
   gap: '0.625rem',
})
const UserInformationAreaBlockTwo = styled('div')({
   fontSize: '0.875rem',
   fontWeight: '400',
   color: '#5C5C5C',
   paddingTop: '37px',
})

const InformationText = styled('p')({
   color: '#8639B5',
   letterSpacing: '0.013rem',
   fontWeight: '500',
   fontSize: '1.125rem',
   marginBottom: '1rem',
})

const UserInformationAreaBlockOne = styled('div')({
   fontSize: '0.875rem',
   fontWeight: '400',
   color: '#5C5C5C',
})

const ApplicationToFriendsContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
})
