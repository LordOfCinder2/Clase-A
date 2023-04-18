import React, { useEffect, useState } from 'react'
import dataCategories from './../../../api/data'
import { addSubCategories } from './../../../api/data'
import { useParams } from 'react-router-dom'

const SecondaryOffersContainer = () => {
	const [data, setData] = useState({
		categories: dataCategories.categories,
		subCategories: [],
	})

 const {categoryId}=useParams()

 useEffect(() => {
  setData({...data, subCategories: addSubCategories(data.categories[categoryId].subs)})
 }, []);

	return <div>
  {console.log(data.subCategories)}
  SecondaryOffersContainer</div>
}

export default SecondaryOffersContainer
