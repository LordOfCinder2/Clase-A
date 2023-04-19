import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../Context/DataContext.provider'
import { useParams } from 'react-router-dom'

const HeaderLayout = () => {
  const {state}=useContext(DataContext)
  const {categoryId}= useParams()
  const [data, setData] = useState({
    category: ''
  })

  useEffect(() => {
    setData(state.categories[categoryId-1])
  }, []);

  return (
    <header className='header'>
      <img src={data.img} alt="" style={{width:'150px'}}/>
      {data.name}
      {data.description}
      {console.log(data)}
    </header>
  )
}

export default HeaderLayout