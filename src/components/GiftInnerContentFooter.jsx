import { styled } from '@mui/material'

export function Field({
   complaints,
   categoryName,
   subCategoryName,
   state,
   createdDate,
   role,
   variant = 'wish',
   dateOfHoliday,
   holidayName,
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
               ) : (
                  <ParagraphStyle>
                     <Paragraph>
                        Дата праздника:
                        <TextFeature>{dateOfHoliday}</TextFeature>
                     </Paragraph>
                     <Paragraph>
                        Название праздника:
                        <TextHolidayName>{holidayName}</TextHolidayName>
                     </Paragraph>
                  </ParagraphStyle>
               )}
            </DefContent>
         </div>
         {role !== 'user' &&
            complaints.map((complaint) => (
               <IconContainer key={complaint.id}>
                  <ImgSoft src={complaint.userImg} alt="human" />
                  <SpanContent>
                     <span>{complaint.userName}</span>
                     <Span>{complaint.reasonForComplaint}</Span>
                  </SpanContent>
               </IconContainer>
            ))}
      </div>
   )
}

const ParagraphStyle = styled('div')({
   display: 'flex',
   gap: '6rem',
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
   display: 'flex',
   flexDirection: 'column',
   gap: '0.990rem',
})

const Paragraph = styled('p')({
   color: '#5c5c5c',
   display: 'flex',
   flexDirection: 'column',
   gap: '0.438rem',
})

const TextFeature = styled('p')({
   color: '#000',
})
const TextHolidayName = styled('p')({
   color: '#0BA360',
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
})
