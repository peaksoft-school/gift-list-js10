import React, { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { MeatBalls } from '../../components/UI/MeatBalls'
import { DeleteIcon, Razblock, Zablock } from '../../assets'
import { providerEvent } from '../../events/customEvents'
import { usersSlice } from '../../store/slices/users/users-slice'
import { DeleteModal } from '../../components/UI/DeleteModal'

const UsersPage = () => {
   const [users, setUsers] = useState([])
   const [openModal, setOpenModal] = useState(false)
   const navigate = useNavigate()
   const [userID, setUserID] = useState(null)
   const dispatch = useDispatch()

   const getUsers = async () => {
      try {
         const response = await axiosInstance.get('/user/getAllUsers')
         setUsers(response.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getUsers()
   }, [])

   const handleChange = async (e, user) => {
      if (e.target.innerText === 'Удалить') {
         setOpenModal(true)
         setUserID(user.userId)
      } else {
         await axiosInstance.put(
            `/user/block/${user.userId}?block=${!user.block}`
         )
         getUsers()
      }
   }

   const deleteUser = async () => {
      try {
         setOpenModal(false)
         await axiosInstance.delete(`/user/deleteUser/${userID}`)
         getUsers()
      } catch (error) {
         console.log(error)
      }
   }

   const goToUserProfile = (userId, name) => {
      providerEvent({ action: 'name', payload: name })
      navigate(`${userId}`)
      dispatch(usersSlice.actions.addUserId(userId))
   }

   return (
      <div>
         <Container>
            {users.map((user) => {
               return (
                  <UserCard key={user.userId}>
                     <Box
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
                     </Box>
                     <div className="meatBallsContainer">
                        <MeatBalls
                           options={[
                              {
                                 title: user.block
                                    ? 'Разблокировать'
                                    : 'Заблокировать',
                                 icon: user.block ? <Razblock /> : <Zablock />,
                              },
                              { title: 'Удалить', icon: <DeleteIcon /> },
                           ]}
                           handleChange={(e) => handleChange(e, user)}
                        />
                     </div>
                  </UserCard>
               )
            })}
         </Container>
         {openModal && (
            <DeleteModal
               open={openModal}
               onDelete={deleteUser}
               setOpen={setOpenModal}
            />
         )}
      </div>
   )
}

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
