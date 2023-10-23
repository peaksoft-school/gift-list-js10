import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Button } from '../../components/UI/Button'
import {
   ProfileFacebook,
   ProfileInstagram,
   ProfilePicture,
   ProfileTelegram,
   ProfileVk,
} from '../../assets/index'

const userInfo = [
   {
      id: 1,
      userName: 'Аида Каримова',
      userPicture: ProfilePicture,
      socialMedias: {
         facebook: 'https://www.facebook.com/',
         instagram: 'https://www.instagram.com/',
         telegram: 'https://web.telegram.org/',
         vk: 'https://vk.com/feed',
      },
      city: 'Бишкек',
      email: 'Aika1998@gmail.com',
      birthdate: '12.04.1998',
      phoneNumber: '+9967052364',
      interesAndHobbies: 'Танцы, иностранные языки, готовка',
      importantToKnow: 'Против спиртных напитков',
      clothSize: 'S',
      shoesSize: '36',
   },
]

export const Profile = ({ variant }) => {
   return (
      <ProfileContainer component="div">
         {userInfo.map((user) => (
            // eslint-disable-next-line react/jsx-fragments
            <React.Fragment key={user.id}>
               <UserProfilePictureAndUserNameAndSocialsMediaContainer component="div">
                  <UserProfilePictureContainer component="div">
                     <img src={user.userPicture} alt={user.userName} />
                  </UserProfilePictureContainer>
                  <UserName variant="p">{user.userName}</UserName>
                  {variant !== 'roleAdmin' &&
                     (() => {
                        switch (variant) {
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
                  <UserSocialMediaContainer component="div">
                     <a href={user.socialMedias.facebook} target="blank">
                        <ProfileFacebook />
                     </a>
                     <a href={user.socialMedias.instagram} target="blank">
                        <ProfileInstagram />
                     </a>
                     <a href={user.socialMedias.telegram} target="blank">
                        <ProfileTelegram />
                     </a>
                     <a href={user.socialMedias.vk} target="blank">
                        <ProfileVk />
                     </a>
                  </UserSocialMediaContainer>
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
                        <UserOneInformationContainer component="div">
                           <UserInformationArea variant="p">
                              Город:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.city}
                           </UserInformationTitle>
                        </UserOneInformationContainer>

                        {/* user's email */}
                        <UserOneInformationContainer component="div">
                           <UserInformationArea variant="p">
                              Email:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.email}
                           </UserInformationTitle>
                        </UserOneInformationContainer>
                     </InformationLeftPart>

                     {/* basic information right part */}

                     <InformationRightPart component="div">
                        {/* user birthdate */}
                        <UserOneInformationContainer component="div">
                           <UserInformationArea variant="p">
                              Дата рождения:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.birthdate}
                           </UserInformationTitle>
                        </UserOneInformationContainer>

                        {/* user's phone number */}

                        <UserOneInformationContainer component="div">
                           <UserInformationArea variant="p">
                              Номер телефона:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.phoneNumber}
                           </UserInformationTitle>
                        </UserOneInformationContainer>
                     </InformationRightPart>
                  </BasicInformation>
                  {/* user's interest and hobbies */}
                  <InformationText variant="p">Интересы, хобби</InformationText>
                  <InteresAndHobbiesInformation component="div">
                     {/* interest and hobbies left part */}
                     <InformationLeftPart component="div">
                        <UserOneInformationContainer component="div">
                           <UserInformationArea variant="p">
                              Интересы, хобби:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.interesAndHobbies}
                           </UserInformationTitle>
                        </UserOneInformationContainer>
                     </InformationLeftPart>

                     {/* interes and hobbies right part */}

                     <InformationRightPart component="div">
                        {/* important to know */}

                        <UserOneInformationContainer component="div">
                           <UserInformationArea variant="p">
                              Важно знать:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.importantToKnow}
                           </UserInformationTitle>
                        </UserOneInformationContainer>
                     </InformationRightPart>
                  </InteresAndHobbiesInformation>
                  {/* additional information */}
                  <InformationText variant="p">Доп.инфа</InformationText>
                  <AdditionalInformation>
                     {/* additional information left part */}

                     <InformationLeftPart component="div">
                        {/* user's clothes size */}
                        <UserOneInformationContainer>
                           <UserInformationArea variant="p">
                              Размер одежды:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.clothSize}
                           </UserInformationTitle>
                        </UserOneInformationContainer>
                     </InformationLeftPart>
                     {/* additional information right part */}

                     <InformationRightPart component="div">
                        {/* user's shoes size */}

                        <UserOneInformationContainer>
                           <UserInformationArea variant="p">
                              Размер обуви:
                           </UserInformationArea>
                           <UserInformationTitle variant="p">
                              {user.shoesSize}
                           </UserInformationTitle>
                        </UserOneInformationContainer>
                     </InformationRightPart>
                  </AdditionalInformation>
                  {variant === 'roleAdmin' && (
                     <RemoveOrBlockContainer component="div">
                        <StyledButton variant="outlined">Удалить</StyledButton>
                        <StyledButton variant="primary">
                           Заблокировать
                        </StyledButton>
                     </RemoveOrBlockContainer>
                  )}
               </UserInfoContainer>
            </React.Fragment>
         ))}
      </ProfileContainer>
   )
}

const RemoveOrBlockContainer = styled(Box)({
   marginTop: '1rem',
   display: 'flex',
   gap: '0.625rem',
   justifyContent: 'end',
})

const ProfileContainer = styled(Box)({
   width: '73rem',
   margin: '0 auto',
   paddingTop: '20px',
   display: 'flex',
})

const UserProfilePictureAndUserNameAndSocialsMediaContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width: '13rem',
   gap: '20px',
   textAlign: 'center',
})

const StyledButton = styled(Button)({
   textTransform: 'none',
})

const UserProfilePictureContainer = styled(Box)({
   width: '11.688rem',
   height: '11.875rem',
   img: {
      width: '100%',
      height: '100%',
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
   padding: '48px 0px 0px 68px',

   display: 'flex',
   flexDirection: 'column',
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
   marginBottom: '2rem',
})

const UserInformationArea = styled(Typography)({
   fontSize: '0.875rem',
   fontWeight: '400',
   color: '#5C5C5C',
})

const UserInformationTitle = styled(Typography)({})

const InteresAndHobbiesInformation = styled(Box)({
   width: '39.188rem',

   display: 'flex',
   justifyContent: 'space-between',
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
