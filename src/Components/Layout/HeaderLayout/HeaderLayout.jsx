import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../Context/DataContext.provider'
import { useNavigate, useParams } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import { IconButton } from '@mui/material'
import './HeaderLayout.css'

const HeaderLayout = () => {
	const { state } = useContext(DataContext)
	const { categoryId } = useParams()
	const [data, setData] = useState({
		category: '',
	})
	const navigate = useNavigate()

	// const handleClick = () => {
	// 	navigate('/')
	// }

	useEffect(() => {
		setData(state.categories[categoryId - 1])
	}, [categoryId])

	return (
		<header className="header" style={{ backgroundImage: `url(${data.img})` }}>
			<div className='header-text'>
				<h1>{data.name}</h1>
				<p>{data.description}</p>
			</div>
			<IconButton className='home-button' color='' fontSize='' onClick={() => navigate('/')}>
				<HomeIcon className='home-button-icon' color='' fontSize=''/>
			</IconButton>
		</header>
	)
}

export default HeaderLayout
