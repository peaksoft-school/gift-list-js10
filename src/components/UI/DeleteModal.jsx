import React from 'react'
import { styled } from '@mui/material'
import { Modal } from '../Modal'
import { RedDeleteIcon } from '../../assets'
import { Button } from './Button'

export const DeleteModal = ({ open, setOpen, onDelete }) => {
   return (
      <Modal isOpen={open} handleClose={() => setOpen(false)}>
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
                  onClick={() => setOpen(false)}
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
                  onClick={onDelete}
               >
                  Удалить
               </Button>
            </div>
         </ModalContainer>
      </Modal>
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
