import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Button } from '../../components/UI/Button'
import {
   ProfileFacebook,
   ProfileInstagram,
   ProfileTelegram,
   ProfileVk,
} from '../../assets/index'

export const Profile = ({
   variant,
   id,
   userName,
   userPicture,
   facebook,
   instagram,
   telegram,
   vk,
   city,
   email,
   birthdate,
   phoneNumber,
   interesAndHobbies,
   importantToKnow,
   clothSize,
   shoesSize,
   onClickFirstButton,
   onClickSecondButton,
}) => {
   return (
      <ProfileContainer component="div">
         {
            <React.Fragment key={id}>
               <UserProfilePictureAndUserNameAndSocialsMediaContainer component="div">
                  <UserProfilePictureContainer component="div">
                     <img src={userPicture} alt={userName} />
                  </UserProfilePictureContainer>
                  <UserName variant="p">{userName}</UserName>
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
                                    <StyledButton variant="primary">
                                       Принять заявку
                                    </StyledButton>
                                    <StyledButton variant="outlined">
                                       Отклонить
                                    </StyledButton>
                                 </ApplicationToFriendsContainer>
                              )
                           case 'removeFromFriends':
                              return (
                                 <StyledButton variant="outlined">
                                    Удалить из друзей
                                 </StyledButton>
                              )
                           default:
                              return (
                                 <StyledButton variant="primary">
                                    Добавить в друзья
                                 </StyledButton>
                              )
                        }
                     })()}
                  {/* {variant !== 'emptyProfile' && ( */}
                  <UserSocialMediaContainer component="div">
                     {facebook && (
                        <a href={facebook} target="blank">
                           <ProfileFacebook />
                        </a>
                     )}
                     {instagram && (
                        <a href={instagram} target="blank">
                           <ProfileInstagram />
                        </a>
                     )}
                     {telegram && (
                        <a href={telegram} target="blank">
                           <ProfileTelegram />
                        </a>
                     )}
                     {vk && (
                        <a href={vk} target="blank">
                           <ProfileVk />
                        </a>
                     )}
                  </UserSocialMediaContainer>
                  {/* )} */}
               </UserProfilePictureAndUserNameAndSocialsMediaContainer>

               <UserInfoContainer component="div">
                  {/* basic information */}
                  <InformationText variant="p">
                     Основная информация
                  </InformationText>
                  <BasicInformation component="div">
                     {/* baic information left part */}
                     <InformationLeftPart component="div">
                        {/* user's city */}
                        {city && (
                           <UserOneInformationContainer component="div">
                              <UserInformationArea variant="p">
                                 Город:
                              </UserInformationArea>
                              <UserInformationTitle variant="p">
                                 {city}
                              </UserInformationTitle>
                           </UserOneInformationContainer>
                        )}

                        {/* user's email */}
                        {email && (
                           <UserOneInformationContainer component="div">
                              <UserInformationArea variant="p">
                                 Email:
                              </UserInformationArea>
                              <UserInformationTitle variant="p">
                                 {email}
                              </UserInformationTitle>
                           </UserOneInformationContainer>
                        )}
                     </InformationLeftPart>

                     {/* basic information right part */}

                     {/* {variant !== 'emptyProfile' && ( */}
                     <InformationRightPart component="div">
                        {/* user birthdate */}
                        {birthdate && (
                           <UserOneInformationContainer component="div">
                              <UserInformationArea variant="p">
                                 Дата рождения:
                              </UserInformationArea>
                              <UserInformationTitle variant="p">
                                 {birthdate}
                              </UserInformationTitle>
                           </UserOneInformationContainer>
                        )}

                        {/* user's phone number */}

                        {phoneNumber && (
                           <UserOneInformationContainer component="div">
                              <UserInformationArea variant="p">
                                 Номер телефона:
                              </UserInformationArea>
                              <UserInformationTitle variant="p">
                                 {phoneNumber}
                              </UserInformationTitle>
                           </UserOneInformationContainer>
                        )}
                     </InformationRightPart>
                     {/* )} */}
                  </BasicInformation>
                  {/* user's interest and hobbies */}
                  {(interesAndHobbies ||
                     importantToKnow ||
                     clothSize ||
                     shoesSize) && (
                     <>
                        <InformationText variant="p">
                           Интересы, хобби
                        </InformationText>
                        <InteresAndHobbiesInformation component="div">
                           {/* interest and hobbies left part */}
                           {interesAndHobbies && (
                              <InformationLeftPart component="div">
                                 <UserOneInformationContainer component="div">
                                    <UserInformationArea variant="p">
                                       Интересы, хобби:
                                    </UserInformationArea>
                                    <UserInformationTitle variant="p">
                                       {interesAndHobbies}
                                    </UserInformationTitle>
                                 </UserOneInformationContainer>
                              </InformationLeftPart>
                           )}

                           {/* interes and hobbies right part */}

                           {importantToKnow && (
                              <InformationRightPart component="div">
                                 {/* important to know */}

                                 <UserOneInformationContainer component="div">
                                    <UserInformationArea variant="p">
                                       Важно знать:
                                    </UserInformationArea>
                                    <UserInformationTitle variant="p">
                                       {importantToKnow}
                                    </UserInformationTitle>
                                 </UserOneInformationContainer>
                              </InformationRightPart>
                           )}
                        </InteresAndHobbiesInformation>
                        {/* additional information */}
                        {(clothSize || shoesSize) && (
                           <>
                              <InformationText variant="p">
                                 Доп.инфа
                              </InformationText>
                              <AdditionalInformation>
                                 {/* additional information left part */}

                                 {clothSize && (
                                    <InformationLeftPart component="div">
                                       {/* user's clothes size */}
                                       <UserOneInformationContainer>
                                          <UserInformationArea variant="p">
                                             Размер одежды:
                                          </UserInformationArea>
                                          <UserInformationTitle variant="p">
                                             {clothSize}
                                          </UserInformationTitle>
                                       </UserOneInformationContainer>
                                    </InformationLeftPart>
                                 )}
                                 {/* additional information right part */}

                                 {shoesSize && (
                                    <InformationRightPart component="div">
                                       {/* user's shoes size */}

                                       <UserOneInformationContainer>
                                          <UserInformationArea variant="p">
                                             Размер обуви:
                                          </UserInformationArea>
                                          <UserInformationTitle variant="p">
                                             {shoesSize}
                                          </UserInformationTitle>
                                       </UserOneInformationContainer>
                                    </InformationRightPart>
                                 )}
                              </AdditionalInformation>
                           </>
                        )}
                     </>
                  )}
                  {variant === 'roleAdmin' && (
                     <RemoveOrBlockContainer component="div">
                        <RemoveButton variant="outlined">Удалить</RemoveButton>
                        <StyledButton variant="primary">
                           Заблокировать
                        </StyledButton>
                     </RemoveOrBlockContainer>
                  )}
               </UserInfoContainer>
            </React.Fragment>
         }
      </ProfileContainer>
   )
}

const ProfileContainer = styled(Box)({
   // margin: '0 auto',
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

const BasicInformation = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   width: '33.313rem',
   marginBottom: '1.875rem',
})

const InformationText = styled(Typography)({
   color: '#8639B5',
   letterSpacing: '0.013rem',
   fontWeight: '500',
   fontSize: '1.125rem',
   marginBottom: '1rem',
})

const UserInformationArea = styled(Typography)({
   fontSize: '0.875rem',
   fontWeight: '400',
   color: '#5C5C5C',
})

const UserInformationTitle = styled(Typography)({})

const InteresAndHobbiesInformation = styled(Box)({
   width: '39.188rem',
   gap: '292px',
   display: 'flex',
   // justifyContent: 'space-between',
   marginBottom: '1.875rem',
})

const AdditionalInformation = styled(Box)({
   width: '32.063rem',
   display: 'flex',
   justifyContent: 'space-between',
})

const InformationLeftPart = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',
})

const InformationRightPart = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',
})

const UserOneInformationContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.5rem',
})

const ApplicationToFriendsContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
})
