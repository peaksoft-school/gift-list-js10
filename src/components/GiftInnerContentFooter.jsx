import { styled } from '@mui/material'
import { convertDateFormat } from '../utils/constants/formatedDate'

export function Field({
   complaints,
   categoryName,
   subCategoryName,
   state,
   createdDate,
   role,
   variant,
}) {
   return (
      <div>
         <div>
            <DefContent>
               {variant === 'charity' ? (
                  <>
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
                  </>
               ) : null}
            </DefContent>
         </div>
         {role !== 'user' &&
            complaints?.map((complaint) => (
               <div key={complaint.complainUserId}>
                  <Paragraph>
                     Дата добавления:
                     <TextFeature>
                        {convertDateFormat(complaint.createdAt)}
                     </TextFeature>
                  </Paragraph>
                  <IconContainer>
                     <ImgSoft
                        src={complaint.complainUserInfoImage}
                        alt="human"
                     />
                     <SpanContent>
                        <span>{complaint.complainUserFullName}</span>
                        <Span>{complaint.textComplain}</Span>
                     </SpanContent>
                  </IconContainer>
               </div>
            ))}
      </div>
   )
}

const Display = styled('div')({
   display: 'flex',
   gap: '14rem',
})

const Around = styled('div')({
   display: 'flex',
   gap: '12rem',
})

const DefContent = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.990rem',
})

const Paragraph = styled('div')({
   color: '#5c5c5c',
   display: 'flex',
   flexDirection: 'column',
   gap: '0.438rem',
})

const TextFeature = styled('span')({
   color: '#000',
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
   borderRadius: '50%',
})
