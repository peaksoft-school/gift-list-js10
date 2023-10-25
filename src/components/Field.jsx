import { styled } from '@mui/material'

const Display = styled('div')({
   display: 'flex',
   gap: '14rem',
})

const Around = styled('div')({
   display: 'flex',
   gap: '12rem',
})

const FLowContent = styled('div')({})

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

export function Field({
   complaints,
   categoryName,
   subCategoryName,
   state,
   createdDate,
   role,
}) {
   return (
      <div>
         <FLowContent>
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
                     Подкатегория: <TextFeature>{subCategoryName}</TextFeature>
                  </Paragraph>
                  <Paragraph>
                     Дата добавления: <TextFeature>{createdDate}</TextFeature>
                  </Paragraph>
               </Around>
            </DefContent>
         </FLowContent>
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
