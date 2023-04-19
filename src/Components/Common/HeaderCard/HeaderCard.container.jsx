import React, { useContext } from 'react'
import HeaderCard from './HeaderCard'
import dataCategories from "../../../api/data"
import { useParams } from 'react-router-dom'
import { DataContext } from '../../../Context/DataContext.provider'

const HeaderCardContainer = () => {
 const {state}=useContext(DataContext)

 const {categoryId}=useParams()


 
  return (
    <HeaderCard/>
  )
}

export default HeaderCardContainer