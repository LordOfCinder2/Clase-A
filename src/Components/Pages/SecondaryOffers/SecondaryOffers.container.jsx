import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../../../Context/DataContext.provider'
import Offers from '../Offers/Offers'
import SecondaryOffers from './SecondaryOffers'

const SecondaryOffersContainer = () => {
	const { state, dispatch } = useContext(DataContext)

	const { categoryId } = useParams()


	useEffect(() => {
		dispatch({
			type: 'LOAD_SUBS',
			payload: state.categories[categoryId - 1].subs,
		})
		{
			console.log(state)
		}
	}, [categoryId])

	return (
		<>
			<SecondaryOffers
				categories={state.subCategoriesSelected}
			/>
		</>
	)
}

export default SecondaryOffersContainer
