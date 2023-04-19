import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../../Context/DataContext.provider'
import Offers from '../Offers/Offers'

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
			<Offers
				categories={state.subCategoriesSelected}
			/>
		</>
	)
}

export default SecondaryOffersContainer
