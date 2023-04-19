import React from 'react'
import CategoryCard from '../../Common/CategoryCard/CategoryCard'

const Offers = ({ categories }) => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryCard key={category.id} category={category} />
			))}
		</div>
	)
}

export default Offers
