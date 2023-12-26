import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
   DeleteIcon,
   ProfileFacebook,
   ProfileInstagram,
   ProfileTelegram,
   ProfileVk,
   Razblock,
   Zablock,
} from '../../../assets'
import { Button } from '../../../components/UI/Button'
import { DeleteModal } from '../../../components/UI/DeleteModal'
import { Card } from '../../../components/UI/card/Card'
import { axiosInstance } from '../../../config/axiosInstance'
import { englishCountries } from '../../../utils/constants/constants'
import { shoeSize } from '../../../utils/constants/stateAndCategory'

export const UserProfile = () => {
   const [user, setUser] = useState({})
   const [userWishes, setUserWishes] = useState([])
   const [userHolidays, setUserHolidays] = useState([])
   const [userCharities, setUserCharities] = useState([])
   const [openModal, setOpenModal] = useState(false)
   const navigate = useNavigate()

   const { userId } = useSelector((state) => state.users)

   const getUser = async () => {
      try {
         const userResponse = await axiosInstance.get(`/user/${userId}`)
         setUser(userResponse.data)
         const holidaysResponse = await axiosInstance.get(
            `/holidays/getHolidaysByUserId/${userId}`
         )
         setUserHolidays(holidaysResponse.data)
      } catch (error) {
         console.log(error)
      }
   }

   const blockUser = async () => {
      await axiosInstance.put(`/user/block/${user.userId}?block=${!user.block}`)
      getUser()
   }

   const getWishes = async () => {
      try {
         const wishesResponse = await axiosInstance.get(
            `/wishlists/user/${userId}`
         )
         setUserWishes(wishesResponse.data)
      } catch (error) {
         console.log(error)
      }
   }

   const getCharities = async () => {
      try {
         const charityResponse = await axiosInstance.get(
            `/charity/myCharities?userId=${userId}`
         )
         setUserCharities(charityResponse.data)
      } catch (error) {
         console.log(error)
      }
   }

   const handleWishChange = async (e, wish) => {
      if (
         e.target.innerText === 'Заблокировать' ||
         e.target.innerText === 'Разблокировать'
      ) {
         await axiosInstance.put(
            `/wishlists/blockOrUnblock/${wish.wishId}?block=${!wish.block}`
         )
         getWishes()
      } else if (e.target.innerText === 'Удалить') {
         await axiosInstance.delete(`/wishlists/${wish.wishId}`)
         getWishes()
      }
   }

   const handleCharityChange = async (e, charity) => {
      if (
         e.target.innerText === 'Заблокировать' ||
         e.target.innerText === 'Разблокировать'
      ) {
         await axiosInstance.put(
            `/charity/${charity.charityId}?blockCharity=${!charity.isBlock}`
         )
         getCharities()
      } else if (e.target.innerText === 'Удалить') {
         await axiosInstance.delete(`/charity?charityId=${charity.charityId}`)
         getCharities()
      }
   }
   const handleHolidayChange = async (e, id) => {
      await axiosInstance.delete(`/holidays/${id}`)
      getUser()
   }

   const deleteHandler = async () => {
      await axiosInstance.delete(`/user/deleteUser/${userId}`)
      navigate('/admin/users')
   }

   useEffect(() => {
      getUser()
      getWishes()
      getCharities()
   }, [])

   return (
      <div>
         <MainContainer>
            <div className="container">
               <div className="photo">
                  <div>
                     <img
                        width="190px"
                        height="190px"
                        src={user?.image}
                        alt=""
                     />
                     <Typography>{user?.fullName}</Typography>
                  </div>
                  <div className="messangers">
                     <a href={user?.linkFacebook} aria-label="link">
                        <ProfileFacebook />
                     </a>
                     <a href={user?.instagram} aria-label="link">
                        <ProfileInstagram />
                     </a>
                     <a href={user?.telegram} aria-label="link">
                        <ProfileTelegram />
                     </a>
                     <a href={user?.vkontakte} aria-label="link">
                        <ProfileVk />
                     </a>
                  </div>
               </div>
               <div className="mainInformation">
                  <div>
                     <p className="violetText">Основная информация</p>
                     <p className="greyText">Город:</p>
                     <p className="normalText">
                        {englishCountries[user?.country]}
                     </p>
                     <p className="greyText email">Email:</p>
                     <p className="normalText">{user?.email}</p>
                     <p className="violetText">Интересы, хобби</p>
                     <p className="greyText">Интересы, хобби:</p>
                     <p className="normalText">{user?.hobby}</p>
                     <p className="violetText">Доп. инфа</p>
                     <p className="greyText">Размер одежды:</p>
                     <p className="normalText">{user?.clothingSize}</p>
                  </div>
                  <div>
                     <p className="greyText margin">Дата рождения:</p>
                     <p className="normalText">
                        {user?.dateOfBirth?.replaceAll('-', '.')}
                     </p>
                     <p className="greyText numberPhone">Номер телефона:</p>
                     <p className="normalText">{user?.phoneNumber}</p>
                     <p className="greyText margin">Важно знать:</p>
                     <p className="normalText">{user?.important}</p>
                     <p className="greyText margin">Размер обуви:</p>
                     <p className="normalText">{shoeSize[user?.shoeSize]}</p>
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
                  onClick={() => blockUser()}
               >
                  {user.block ? 'Разблокировать' : 'Заблокировать'}
               </Button>
            </div>
         </MainContainer>
         {openModal && (
            <DeleteModal
               open={openModal}
               setOpen={setOpenModal}
               onDelete={deleteHandler}
            />
         )}
         <ReusableContainer>
            <div className="title">
               <p>Желаемые подарки</p>
               <Box onClick={() => navigate(`wishes`)}>Смотреть все</Box>
            </div>
            <div className="cards">
               {userWishes.slice(0, 3).map((wish) => {
                  return (
                     <Card
                        key={wish.wishId}
                        variant="secondary"
                        status={wish.wishStatus}
                        holiday={wish.holidayName}
                        cardName={wish.wishName}
                        date={wish.dateOfHoliday}
                        cardImage={wish.wishImage}
                        ownerImage={wish.userImage}
                        ownerName={wish.fullName}
                        isBlock={wish.block}
                        bookerImage={wish.reservoirImage}
                        showBottomBooker="true"
                        onGetThingById={() => {
                           navigate(`wishes/${wish.wishId}`)
                        }}
                        meatballsOptions={[
                           {
                              title: wish.block
                                 ? 'Разблокировать'
                                 : 'Заблокировать',
                              icon: wish.block ? <Razblock /> : <Zablock />,
                           },
                           { title: 'Удалить', icon: <DeleteIcon /> },
                        ]}
                        handleChange={(e) => handleWishChange(e, wish)}
                     />
                  )
               })}
            </div>
         </ReusableContainer>
         <ReusableContainer>
            <div className="title">
               <p>Праздники</p>
               <Box onClick={() => navigate('holidays')}>Смотреть все</Box>
            </div>
            <div className="cards">
               {userHolidays.slice(0, 3).map((holiday) => {
                  return (
                     <Card
                        key={holiday.holidayId}
                        date={holiday.dateOfHoliday}
                        cardImage={holiday.image}
                        holiday={holiday.nameHoliday}
                        variant="tertiary"
                        meatballsOptions={[
                           { title: 'Удалить', icon: <DeleteIcon /> },
                        ]}
                        handleChange={(e) =>
                           handleHolidayChange(e, holiday.holidayId)
                        }
                     />
                  )
               })}
            </div>
         </ReusableContainer>
         <ReusableContainer>
            <div className="title">
               <p>Благотворительность</p>
               <Box onClick={() => navigate('charities')}>Смотреть все</Box>
            </div>
            <div className="cards">
               {userCharities.slice(0, 3).map((charity) => {
                  return (
                     <Card
                        key={charity?.charityId}
                        date={charity?.createdAt}
                        cardImage={charity?.charityImage}
                        holiday={charity?.nameCharity}
                        status={charity?.status}
                        newOrOld={
                           charity?.condition === 'USED' ? 'Б/У' : 'Новый'
                        }
                        variant="withStatusBottom"
                        showBottomBooker="true"
                        isBlock={charity?.isBlock}
                        onGetThingById={() => {
                           navigate(`charities/${charity.charityId}`)
                        }}
                        bookerImage={charity?.bookedUserImage}
                        meatballsOptions={[
                           {
                              title: charity.isBlock
                                 ? 'Разблокировать'
                                 : 'Заблокировать',
                              icon: charity.isBlock ? (
                                 <Razblock />
                              ) : (
                                 <Zablock />
                              ),
                           },
                           { title: 'Удалить', icon: <DeleteIcon /> },
                        ]}
                        handleChange={(e) => handleCharityChange(e, charity)}
                     />
                  )
               })}
            </div>
         </ReusableContainer>
      </div>
   )
}

const ReusableContainer = styled('div')`
   width: 73vw;
   & .cards {
      display: flex;
      gap: 2.4vw;
      flex-wrap: wrap;
   }
   & .title {
      margin: 50px 0 23px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      & :first-child {
         color: var(--black, #020202);
         font-family: Inter;
         font-size: 18px;
         font-style: normal;
         font-weight: 500;
         line-height: normal;
         letter-spacing: 0.2px;
      }
      & :first-child + p {
         color: #3772ff;
         font-family: Inter;
         font-style: normal;
         letter-spacing: 0.5px;
         border-bottom: 1px solid #3772ff;
         cursor: pointer;
         &:hover {
            border-bottom: 2px solid #3772ff;
         }
      }
   }
`

const MainContainer = styled('div')`
   background-color: white;
   padding: 20px;
   width: 73vw;
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
      column-gap: 8.9vw;
      margin-left: 4.1vw;
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
