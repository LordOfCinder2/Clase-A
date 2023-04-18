export const info = {
	categories: [
		{
			id: 1,
			name: 'Energias Renovables',
			description: 'text',

			subs: [5, 6, 7, 8],
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
		{
			id: 2,
			name: 'Eficiencia Energetica',
			description: 'text',
			subs: [9, 10],
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681779921/Clase%20A/energy-rating-buyers-guide_bzkswz.png',
		},
		{
			id: 3,
			name: 'Construccion sustentable',
			description: 'text',
			subs: [9, 10, 11],
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780246/Clase%20A/pexels-francesco-ungaro-4322027_gvpqjd.jpg',
		},
		{
			id: 4,
			name: 'Capacitaciones',
			description: 'text',
			subs: [5, 6, 7],
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681778585/Clase%20A/20220907_143455_gnfa8q.jpg',
		},
	],
	subCategories: [
		{
			id: 5,
			name: 'Eficiencia Energetica',
			description: 'text',
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
		{
			id: 6,
			name: 'Eficiencia Energetica',
			description: 'text',
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
		{
			id: 7,
			name: 'Eficiencia Energetica',
			description: 'text',
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
		{
			id: 8,
			name: 'Eficiencia Energetica',
			description: 'text',
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
		,
		{
			id: 9,
			name: 'Marina',
			description: 'text',
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
		,
		{
			id: 10,
			name: 'Sol',
			description: 'text',
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
		,
		{
			id: 11,
			name: 'Paneles',
			description: 'text',
			img: 'https://res.cloudinary.com/dwu38dsqv/image/upload/v1681780091/Clase%20A/20220722_173937_rcswnj.jpg',
		},
	],
}

export const addSubCategories = (arr) => {
	let newArr = info.subCategories.filter((item) =>
		arr.some((element) => item.id === element),
	)
	return newArr
}

export default info
