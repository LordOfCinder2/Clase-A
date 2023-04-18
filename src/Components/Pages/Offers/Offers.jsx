import React from 'react'
import CategoryCard from '../../Common/CategoryCard/CategoryCard'

const Offers = ({ data }) => {
	return (
		<div
			className="categories-container"
		>
			{data.categories.map((category) => (
				<CategoryCard key={category.id} category={category} />
			))}
		</div>
	)
}

export default Offers
