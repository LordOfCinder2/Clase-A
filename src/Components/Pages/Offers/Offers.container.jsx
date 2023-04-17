import React, { useState } from 'react'
import dataCategories from '../../../api/data'
import Offers from './Offers'

const OffersContainer = () => {
	const [data, setData] = useState({
		categories: dataCategories.categories,
	})

	return <Offers data={data} />
}

export default OffersContainer
