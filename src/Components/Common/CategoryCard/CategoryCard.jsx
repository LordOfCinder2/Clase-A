import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.css'

const CategoryCard = ({ category }) => {
	return (
			<Link to={`/category/${category.id}`} className="category-card">
				<div className='card-title'>{category.name}</div>
				<div className='img-container'>
					<img src={category.img} alt="img" />
				</div>
			</Link>
	)
}

export default CategoryCard
