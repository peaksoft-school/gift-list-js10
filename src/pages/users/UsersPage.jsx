/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { MeatBalls } from '../../components/UI/MeatBalls'
import { DeleteIcon, RedDeleteIcon, Zablock } from '../../assets'
import { Modal } from '../../components/Modal'
import { Button } from '../../components/UI/Button'
import { providerEvent } from '../../events/customEvents'
import { usersSlice } from '../../store/slices/users/users-slice'

const UsersPage = () => {
   const [users, setUsers] = useState([])
   const [openModal, setOpenModal] = useState(false)
   const navigate = useNavigate()
   const [userID, setUserID] = useState(null)
   const dispatch = useDispatch()

   const getUsers = async () => {
      const response = await axiosInstance.get('/user/getAllUsers')
      setUsers(response.data)
   }
   useEffect(() => {
      getUsers()
   }, [])
   console.log(users)

   const handleChange = (e, id) => {
      if (e.target.innerText === 'Удалить') {
         setOpenModal(true)
         setUserID(id)
      }
   }

   const deleteUser = async () => {
      await axiosInstance.delete(`/user/deleteUser/${userID}`)
      setOpenModal(false)
      getUsers()
   }

   const options = [
      { title: 'Заблокировать', icon: <Zablock /> },
      { title: 'Удалить', icon: <DeleteIcon /> },
   ]

   const goToUserProfile = (userId, name) => {
      providerEvent({ action: 'name', payload: name })
      dispatch(usersSlice.actions.addUserId(userId))
      navigate(`user-profile/${userId}`)
   }

   return (
      <div>
         <Container>
            {users.map((user) => {
               return (
                  <UserCard key={user.userId}>
                     <div
                        className="userData"
                        onClick={() =>
                           goToUserProfile(user.userId, user.fullName)
                        }
                     >
                        <div className="imgdiv">
                           <img
                              width="130px"
                              height="130px"
                              src={
                                 user.image ||
                                 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'
                              }
                              alt="user"
                           />
                        </div>
                        <Typography className="userName">
                           {user.fullName}
                        </Typography>
                        <div className="wish">{user.wishSum}</div>
                        <Typography>желаемых</Typography>
                        <Typography>подарков</Typography>
                     </div>
                     <div className="meatBallsContainer">
                        <MeatBalls
                           options={options}
                           handleChange={(e) => handleChange(e, user.userId)}
                        />
                     </div>
                  </UserCard>
               )
            })}
         </Container>
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
                        onClick={deleteUser}
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
const Container = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 26px;
   /* justify-content: space-evenly; */
`

const UserCard = styled('div')`
   width: 257px;
   height: 300px;
   border-radius: 8px;
   &:hover {
      box-shadow: 0px 0px 43px -10px rgba(209, 209, 209, 1);
      transition-duration: 0.6s;
   }
   background: linear-gradient(
      to bottom,
      rgba(134, 57, 181, 0.2) 36%,
      #ffffff 36%,
      #ffffff 100%
   );
   .meatBallsContainer {
      text-align: end;
      padding: 0 10px 50px 0;
   }
   .userData {
      text-align: center;
      cursor: pointer;
      img {
         border-radius: 130px;
         margin-top: 26px;
      }
      .userName {
         color: var(--black, #020202);
         font-family: Inter;
         font-size: 16px;
         font-weight: 500;
         letter-spacing: 0.32px;
         margin-top: 18px;
      }
      .wish {
         margin-top: 16px;
      }
      p {
         color: #606060;
         text-align: center;
         font-family: Inter;
         font-size: 12px;
         font-weight: 400;
         line-height: normal;
         letter-spacing: 0.24px;
      }
   }
`

export default UsersPage
