import React, { useContext, useEffect, useState } from 'react'
import Offers from './Offers'
import { DataContext } from '../../../Context/DataContext.provider'

const OffersContainer = () => {
	const { state, dispatch } = useContext(DataContext)

	useEffect(() => {
		dispatch({ type: 'LOAD_SUBS', payload: [1, 2, 3, 4] })
	}, [])

	return <Offers categories={state.subCategoriesSelected} />
}

export default OffersContainer
