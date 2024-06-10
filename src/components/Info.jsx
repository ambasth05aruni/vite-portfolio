import React from 'react'
import { personalInfo } from '../data'
import { Link } from 'react-router-dom'
const Info = () => {
  return (
   <>
   {personalInfo.map(({title,description}, index)=>{
    return (
        <li className='info__item' key={index}>
            <span className='info__title'>{title}</span>
            <span className="info__description">{description}</span>
      {/* ?      <span className="info__link">{link}</span> */}
        </li>
    )
   })}
   
   
   
   </>
  )
}

export default Info