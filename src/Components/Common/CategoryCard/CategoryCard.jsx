import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category, handleClick }) => {
	return (
		<div className="categoryCard" style={{ border: '2px solid black' }}>
			<Link
				to={`/category/${category.id}`}
			>
				<h3>{category.name}</h3>
				<div>
					<img style={{ width: '100px' }} src={category.img} alt="img" />
				</div>
			</Link>
		</div>
	)
}

export default CategoryCard
