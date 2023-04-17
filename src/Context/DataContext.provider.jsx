import React, { createContext } from 'react'
import categoriesData from '../api/data'

export const DataContext = createContext()

const initialState = {
	categories: categoriesData.categories,
	subcategories: [],
}

const DataContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
