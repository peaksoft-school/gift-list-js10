import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { axiosInstance } from '../../../config/axiosInstance'
import { Button } from '../../../components/UI/Button'
import { DeleteModal } from '../../../components/UI/DeleteModal'

export const Wish = () => {
   const [wish, setWish] = useState({})
   const [openModal, setOpenModal] = useState(false)
   const { wishId } = useParams()
   const navigate = useNavigate()

   const getWish = async () => {
      try {
         const response = await axiosInstance.get(`/wishlists/${wishId}`)
         setWish(response.data)
      } catch (error) {
         console.log(error)
      }
   }
   const deleteWish = async () => {
      await axiosInstance.delete(`/wishlists/${wishId}`)
      navigate(-1)
   }

   const blockWish = async () => {
      await axiosInstance.put(
         `/wishlists/blockOrUnblock/${wishId}?block=${!wish.block}`
      )
      getWish()
   }

   useEffect(() => {
      getWish()
   }, [])

   return (
      <div>
         <MainContainer>
            <div className="contentContainer">
               <div className="imgDiv">
                  <img
                     width="343px"
                     height="343px"
                     src={wish.wishImage}
                     alt="wish"
                  />
               </div>

               <div>
                  <div className="nameContainer">
                     <div>
                        <img
                           width="36px"
                           height="36px"
                           src={wish.userImage}
                           alt="userimage"
                        />
                        <span className="userName"> {wish.fullName}</span>
                     </div>
                     <p className="status">
                        {(() => {
                           switch (wish.wishStatus) {
                              case 'PENDING':
                                 return 'В ожидании'
                              case 'RESERVED':
                                 return 'Забронирован'
                              default:
                                 return 'Забронирован анонимно'
                           }
                        })()}
                     </p>
                  </div>
                  <div>
                     <a href={wish.linkToWish} target="blank">
                        <p className="wishName">{wish.wishName}</p>
                     </a>
                     <p>{wish.description}</p>
                  </div>
                  <div className="dateAndNameHolidayContainer">
                     <div>
                        <p className="greyText">Дата праздника:</p>
                        <p>{wish.dateOfHoliday?.replaceAll('-', '.')}</p>
                     </div>
                     <div>
                        <p className="greyText">Название праздника:</p>
                        <p className="holidayName">{wish.holidayName}</p>
                     </div>
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
                  onClick={blockWish}
               >
                  {wish.block ? 'Разблокировать' : 'Заблокировать'}
               </Button>
            </div>
         </MainContainer>
         {openModal && (
            <DeleteModal
               open={openModal}
               setOpen={setOpenModal}
               onDelete={deleteWish}
            />
         )}
      </div>
   )
}

const MainContainer = styled('div')`
   background-color: white;
   height: 75vh;
   padding: 20px;
   border-radius: 10px;
   .imgDiv {
      img {
         border-radius: 8px;
      }
   }
   .buttons {
      margin-top: 12px;
      width: 100%;
      text-align: end;
      & :first-child {
         margin-right: 16px;
      }
   }
   & .contentContainer {
      display: flex;
      width: 100%;
      position: relative;
      column-gap: 20px;
      .nameContainer {
         /* display: flex;
         justify-content: space-between;
         align-items: center; */
         margin-top: 59px;
         img {
            border-radius: 36px;
         }
         & > div {
            display: flex;
            align-items: center;
            column-gap: 10px;
         }
      }
      .dateAndNameHolidayContainer {
         display: flex;
         column-gap: 65px;
         margin-top: 16px;
         & p {
            margin-top: 5px;
         }
         & .holidayName {
            color: #0ba360;
         }
      }
      .greyText {
         color: #5c5c5c;
         font-family: Inter;
         font-size: 14px;
         font-weight: 400;
         line-height: 130%;
      }
      & > img {
         border-radius: 9px;
      }
      .userName {
         color: var(--black, #020202);
         font-family: Inter;
         font-weight: 500;
         letter-spacing: 0.32px;
      }
      .status {
         color: #3774d0;
         font-family: Inter;
         font-size: 14px;
         font-style: normal;
         font-weight: 400;
         line-height: normal;
         position: absolute;
         top: 68px;
         right: 0;
      }
      .wishName {
         color: #3774d0;
         font-family: Inter;
         font-size: 24px;
         font-weight: 500;
         border-bottom: 2px solid #3774d0;
         width: min-content;
         margin: 24px 0 16px 0;
      }
      a {
         text-decoration: none;
      }
   }
`
