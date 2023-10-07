/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

export const OurTeachers = ({ teacher }) => {
   return (
      <TeacherCard style={teacher.styles}>
         <TeacherPicture
            style={teacher.borders}
            src={teacher.url}
            alt={teacher.name}
         />
         <TeacherInfo>
            <p>{teacher.name}</p>
            <p>{teacher.special}</p>
         </TeacherInfo>
      </TeacherCard>
   )
}

const TeacherCard = styled.div`
   text-align: center;
   font-size: 0.875rem;
`

const TeacherPicture = styled.img`
   margin-bottom: 0.94rem;
   width: 10.625rem;
   height: 10.625rem;
`

const TeacherInfo = styled.div`
   font-family: Inter;
   font-weight: 400;
`
