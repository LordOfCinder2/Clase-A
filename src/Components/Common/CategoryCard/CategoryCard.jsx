import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
	return (
		<div className="categoryCard">
			<Link to={`/category/${category.id}`}>
				<h3>{category.name}</h3>
				<div>
					<img src={category.img} alt="img" />
				</div>
			</Link>
		</div>
	)
}

export default CategoryCard
