import React, { useEffect, useState } from 'react'
import { Typography, styled } from '@mui/material'
import { axiosInstance } from '../../../config/axiosInstance'
import { Button } from '../../../components/UI/Button'
import {
   ProfileFacebook,
   ProfileInstagram,
   ProfileTelegram,
   ProfileVk,
   RedDeleteIcon,
} from '../../../assets'
import { Modal } from '../../../components/Modal'

export const UserProfile = () => {
   const [user, setUser] = useState([])
   const [openModal, setOpenModal] = useState(false)

   const getUser = async () => {
      const response = await axiosInstance.get('/user/2')
      setUser(response.data)
   }

   useEffect(() => {
      getUser()
   }, [])
   console.log(user)

   return (
      <div>
         <MainContainer>
            <div className="container">
               <div className="photo">
                  <div>
                     <img
                        width="190px"
                        height="190px"
                        src={user.image}
                        alt=""
                     />
                     <Typography>{user.fullName}</Typography>
                  </div>
                  <div className="messangers">
                     <a href="@">
                        <ProfileFacebook />
                     </a>
                     <a href="@">
                        <ProfileInstagram />
                     </a>
                     <a href="@">
                        <ProfileTelegram />
                     </a>
                     <a href="@">
                        <ProfileVk />
                     </a>
                  </div>
               </div>
               <div className="mainInformation">
                  <div>
                     <p className="violetText">Основная информация</p>
                     <p className="greyText">Город:</p>
                     <p className="normalText">{user.country}</p>
                     <p className="greyText email">Email:</p>
                     <p className="normalText">{user.email}</p>
                     <p className="violetText">Интересы, хобби</p>
                     <p className="greyText">Интересы,хобби:</p>
                     <p className="normalText">{user.hobby}</p>
                     <p className="violetText">Доп. инфа</p>
                     <p className="greyText">Размер одежды:</p>
                     <p className="normalText">{user.clothingSize}</p>
                  </div>
                  <div>
                     <p className="greyText margin">Дата рождения:</p>
                     <p className="normalText">{user.dateOfBirth}</p>
                     <p className="greyText numberPhone">Номер телефона:</p>
                     <p className="normalText">{user.phoneNumber}</p>
                     <p className="greyText margin">Важно знать:</p>
                     <p className="normalText">{user.important}</p>
                     <p className="greyText margin">Размер обуви:</p>
                     <p className="normalText">{user.shoeSize}</p>
                  </div>
               </div>
            </div>

            <div className="buttons">
               <Button
                  style={{ border: 'none', height: '36px' }}
                  variant="outlined"
                  type="submit"
                  onClick={() => setOpenModal(true)}
               >
                  Удалить
               </Button>
               <Button
                  style={{ border: 'none', height: '36px' }}
                  variant="primary"
                  type="submit"
               >
                  Заблокировать
               </Button>
            </div>
         </MainContainer>
         {openModal && (
            <Modal isOpen={openModal} handleClose={() => setOpenModal(false)}>
               <ModalContainer>
                  <div className="blabla">
                     <div>
                        <RedDeleteIcon />
                     </div>
                     <div className="deleteandquestion">
                        <p className="delete">Удаление</p>
                        <p>Вы уверены что хотите удалить ? </p>
                     </div>
                  </div>
                  <div className="buttons">
                     <Button
                        style={{ height: '37px', width: '232px' }}
                        variant="outlined"
                        onClick={() => setOpenModal(false)}
                     >
                        Отмена
                     </Button>
                     <Button
                        style={{
                           background: '#E53535',
                           height: '37px',
                           width: '232px',
                        }}
                        variant="contained"
                        onMouseOver={(e) => {
                           e.target.style.backgroundColor = '#DD0B37'
                        }}
                        onMouseOut={(e) => {
                           e.target.style.backgroundColor = '#E53535'
                        }}
                     >
                        Удалить
                     </Button>
                  </div>
               </ModalContainer>
            </Modal>
         )}
      </div>
   )
}

const MainContainer = styled('div')`
   max-width: 1160px;
   background-color: white;
   padding: 20px;
   border-radius: 10px;
   .container {
      display: flex;
   }
   .buttons {
      margin-top: 56px;
      width: 100%;
      text-align: end;
      & :first-child {
         margin-right: 16px;
      }
   }
   .photo {
      text-align: center;
      & img {
         border-radius: 8px;
      }
      & p {
         color: var(--black, #020202);
         font-family: Inter;
         font-size: 18px;
         font-style: normal;
         font-weight: 500;
         line-height: normal;
         letter-spacing: 0.2px;
         margin-top: 16px;
      }
      .messangers {
         display: flex;
         column-gap: 20px;
         margin-top: 24px;
      }
   }
   .mainInformation {
      display: flex;
      column-gap: 129px;
      margin-left: 60px;
      .violetText {
         color: var(--Violet, #8639b5);
         font-family: Inter;
         font-size: 18px;
         font-style: normal;
         font-weight: 500;
         line-height: normal;
         letter-spacing: 0.2px;
         margin-bottom: 13px;
         margin-top: 30px;
      }
      .greyText {
         color: #5c5c5c;
         font-family: Inter;
         font-size: 14px;
         font-style: normal;
         font-weight: 400;
         line-height: 130%;
         margin-bottom: 6px;
      }
      .normalText {
         color: #000;
         font-family: Inter;
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
         line-height: 130%;
      }
      .margin {
         margin-top: 65px;
      }
      .numberPhone {
         margin-top: 16px;
      }
      .email {
         margin-top: 16px;
      }
   }
`
const ModalContainer = styled('div')`
   padding: 20px 32px 20px 32px;
   .blabla {
      display: flex;
      .deleteandquestion {
         margin-left: 20px;
      }
      & .delete {
         color: var(--color-dark-dark, #23262f);
         font-family: Inter;
         font-size: 24px;
         font-style: normal;
         font-weight: 400;
         line-height: 24px;
      }
      & .delete + p {
         margin-top: 8px;
         color: var(--color-dark-dark-2, #87898e);
         font-family: Inter;
         font-size: 14px;
         font-style: normal;
         font-weight: 400;
         line-height: 16px;
      }
   }
   .buttons {
      margin-top: 24px;
      & :first-child {
         margin-right: 16px;
      }
   }
`
