import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { convertDateFormat } from '../utils/constants/formatedDate'
import { complaintsWithEnglishPropertiesName } from '../utils/constants/options'

export function Field({
   complaints,
   categoryName,
   subCategoryName,
   state,
   createdDate,
   role,
   variant,
}) {
   const date = useSelector((state) => state.wishById.wish)

   return (
      <div>
         <div>
            {variant ? (
               <DefContent>
                  <Display>
                     <Paragraph>
                        Категория: <TextFeature>{categoryName}</TextFeature>
                     </Paragraph>
                     <Paragraph>
                        Состояние: <TextFeature>{state}</TextFeature>
                     </Paragraph>
                  </Display>
                  <Around>
                     <Paragraph>
                        Подкатегория:
                        <TextFeature>{subCategoryName}</TextFeature>
                     </Paragraph>
                     <Paragraph>
                        Дата добавления:
                        <TextFeature>{createdDate}</TextFeature>
                     </Paragraph>
                  </Around>
               </DefContent>
            ) : (
               <Paragraph>
                  Дата добавления:
                  <TextFeature>
                     {convertDateFormat(date.dateOfHoliday)}
                  </TextFeature>
               </Paragraph>
            )}
         </div>
         <ScrollContainer>
            <ScrollContent>
               {role !== 'user' &&
                  complaints?.map((complaint) => (
                     <IconContainer key={complaint.statusComplaint}>
                        <ImgSoft
                           src={complaint.complainUserInfoImage}
                           alt="human"
                        />
                        <SpanContent>
                           <span>{complaint.complainUserFullName}</span>
                           <Span>
                              {
                                 complaintsWithEnglishPropertiesName[
                                    complaint.statusComplaint
                                 ]
                              }
                           </Span>
                        </SpanContent>
                     </IconContainer>
                  ))}
            </ScrollContent>
         </ScrollContainer>
      </div>
   )
}

const ScrollContainer = styled('div')({
   overflow: 'auto',
   height: '30vh',
})

const ScrollContent = styled('div')({
   overscrollBehavior: 'contain',
})

const Display = styled('div')({
   display: 'flex',
   gap: '14rem',
})

const Around = styled('div')({
   display: 'flex',
   gap: '12rem',
})

const DefContent = styled('div')({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   rowGap: '20px',
   columnGap: '2%',
})

const Paragraph = styled('div')({
   color: '#5c5c5c',
   display: 'flex',
   flexDirection: 'column',
   gap: '0.438rem',
})

const TextFeature = styled('span')({
   color: '#000',
   paddingBottom: '10px',
})

const IconContainer = styled('div')({
   display: 'flex',
   gap: '0.938rem',
   paddingTop: '3.313rem',
})

const SpanContent = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '5px',
})

const Span = styled('span')({
   color: '#fd5200',
})

const ImgSoft = styled('img')({
   width: '2.5rem',
   height: '2.5rem',
   borderRadius: '50px',
})
