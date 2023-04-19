import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../Context/DataContext.provider'
import { useNavigate, useParams } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

const HeaderLayout = () => {
  const {state}=useContext(DataContext)
  const {categoryId}= useParams()
  const [data, setData] = useState({
    category: ''
  })
  const navigate=useNavigate()

  const handleClick=() => {
    navigate('/')
  }

  useEffect(() => {
    setData(state.categories[categoryId-1])
  }, [categoryId]);

  return (
    <header className='header'>
      <img src={data.img} alt="" style={{width:'150px'}}/>
      <h1>
        {data.name}
        </h1>
        <p>
      {data.description}
        </p>
      {console.log(data)}
      <IconButton onClick={handleClick}>
        <HomeIcon/>
      </IconButton>
    </header>
  )
}

export default HeaderLayout