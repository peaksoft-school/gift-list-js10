import { Box, styled } from '@mui/material'
import React from 'react'

export const OurTeacher = ({ teacher }) => {
   return (
      <TeacherCard component="div">
         <img style={teacher.styles} src={teacher.url} alt={teacher.name} />
         <TeacherInfo component="div">
            <p>{teacher.nameAndSpecial}</p>
            <p>{teacher.company}</p>
         </TeacherInfo>
      </TeacherCard>
   )
}

const TeacherCard = styled(Box)`
   text-align: center;
   font-size: 0.875rem;
`

const TeacherInfo = styled(Box)`
   font-family: Inter;
   font-weight: 400;
`
