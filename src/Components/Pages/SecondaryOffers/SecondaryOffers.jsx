import React from 'react'
import CategoryCard from '../../Common/CategoryCard/CategoryCard'

const SecondaryOffers = ({ categories, handleClick }) => {
	return (
		<div
			className="categories-container"
		>
			{categories.map((category) => (
				<CategoryCard key={category.id} category={category} handleClick={handleClick}/>
			))}
		</div>)
}

export default SecondaryOffers