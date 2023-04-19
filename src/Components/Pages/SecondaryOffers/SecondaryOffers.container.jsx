import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../../../Context/DataContext.provider'
import Offers from '../Offers/Offers'
import SecondaryOffers from './SecondaryOffers'

const SecondaryOffersContainer = () => {
	const { state, dispatch } = useContext(DataContext)
	const [hasClicked, setHasClicked] = useState(false)
	const navigate = useNavigate()

	const { categoryId } = useParams()

	const handleClick = (id) => {
		navigate(`/category/${id}`)
		setHasClicked(true)
	}

	useEffect(() => {
		setHasClicked(false)
		dispatch({
			type: 'LOAD_SUBS',
			payload: state.categories[categoryId - 1].subs,
		})
		{
			console.log(state)
		}
	}, [hasClicked])

	return (
		<>
			<SecondaryOffers
				categories={state.subCategoriesSelected}
				handleClick={handleClick}
			/>
		</>
	)
}

export default SecondaryOffersContainer
