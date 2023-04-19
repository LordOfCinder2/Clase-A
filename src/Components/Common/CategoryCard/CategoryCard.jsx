import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category, handleClick }) => {
	return (
		<div className="categoryCard" style={{ border: '2px solid black' }}>
			<button
				onClick={() => {handleClick(category.id)}}
				to={`/category/${category.id}`}
			>
				<h3>{category.name}</h3>
				<div>
					<img style={{ width: '100px' }} src={category.img} alt="img" />
				</div>
			</button>
		</div>
	)
}

export default CategoryCard
