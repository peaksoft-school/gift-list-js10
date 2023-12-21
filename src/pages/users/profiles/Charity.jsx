import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { axiosInstance } from '../../../config/axiosInstance'
import { Button } from '../../../components/UI/Button'
import { DeleteModal } from '../../../components/UI/DeleteModal'
import {
   categoriesWithEnglishPropertiesName,
   stateOptions,
   subCategoriesWithEnglishPropertiesName,
} from '../../../utils/constants/stateAndCategory'

export const Charity = () => {
   const [charity, setCharity] = useState({})
   const [openModal, setOpenModal] = useState(false)
   const { charityId } = useParams()
   const navigate = useNavigate()

   const getCharity = async () => {
      try {
         const response = await axiosInstance.get(`/charity/${charityId}`)
         setCharity(response.data)
      } catch (error) {
         console.log(error)
      }
   }

   const deleteCharity = async () => {
      await axiosInstance.delete(`/charity?charityId=${charityId}`)
      navigate(-1)
   }

   const blockCharity = async () => {
      await axiosInstance.put(
         `/charity/${charityId}?blockCharity=${!charity.isBlock}`
      )
      getCharity()
   }

   useEffect(() => {
      getCharity()
   }, [])

   return (
      <div>
         <MainContainer>
            <div className="contentContainer">
               <div className="imgDiv">
                  <img
                     width="343px"
                     height="343px"
                     src={charity.charityImage}
                     alt="wish"
                  />
               </div>

               <div>
                  <div className="nameContainer">
                     <div>
                        <img
                           width="36px"
                           height="36px"
                           src={charity.userImage}
                           alt="userimage"
                        />
                        <div>
                           <p className="userName"> {charity.fullName}</p>
                           <p className="phone">{charity.ownerPhoneNumber}</p>
                        </div>
                     </div>
                     <p className="status">
                        {(() => {
                           switch (charity.status) {
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
                     <p className="wishName">{charity.nameCharity}</p>
                     <p>{charity.description}</p>
                  </div>
                  <div className="dateAndNameHolidayContainer">
                     <div>
                        <p className="greyText">Категория:</p>
                        <p>
                           {
                              categoriesWithEnglishPropertiesName[
                                 charity.category
                              ]
                           }
                        </p>
                        <p className="greyText">Подкатегория:</p>
                        <p>
                           {
                              subCategoriesWithEnglishPropertiesName[
                                 charity.subCategory
                              ]
                           }
                        </p>
                     </div>
                     <div>
                        <p className="greyText">Состояние:</p>
                        <p className="holidayName">
                           {stateOptions[charity.condition]}
                        </p>
                        <p className="greyText">Дата добавления:</p>
                        <p className="holidayName">
                           {charity.createdAt?.replaceAll('-', '.')}
                        </p>
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
                  onClick={blockCharity}
               >
                  {charity.isBlock ? 'Разблокировать' : 'Заблокировать'}
               </Button>
            </div>
         </MainContainer>
         {openModal && (
            <DeleteModal
               open={openModal}
               setOpen={setOpenModal}
               onDelete={deleteCharity}
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
         & p {
            margin-top: 5px;
         }
         & .greyText {
            margin-top: 16px;
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
      .phone {
         color: #5c5c5c;
         font-family: Inter;
         font-size: 14px;
         font-style: normal;
         font-weight: 400;
         line-height: normal;
         letter-spacing: 0.28px;
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
         color: var(--black, #020202);
         font-family: Inter;
         font-size: 18px;
         font-style: normal;
         font-weight: 500;
         line-height: 130%;
         margin: 24px 0 16px 0;
      }
      a {
         text-decoration: none;
      }
   }
`
