/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

export const OurTeachers = ({ teacher }) => {
   return (
      <TeacherCard>
         <TeacherPicture src={teacher.url} alt={teacher.name} />
         <p>{teacher.name}</p>
         <p>{teacher.special}</p>
      </TeacherCard>
   )
}

const TeacherCard = styled.div`
   text-align: center;
   font-size: 0.875rem;
`

const TeacherPicture = styled.img`
   width: 10.625rem;
   height: 10.625rem;
`
