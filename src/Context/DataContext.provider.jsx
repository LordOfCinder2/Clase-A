import React, { createContext, useReducer } from 'react'
import data from '../api/db.json'

export const DataContext = createContext()

const initialState = {
	categories: data.categories,
	subCategoriesSelected: [],
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOAD_SUBS':
			let newArr = state.categories.filter((item) =>
				action.payload.some((element) => item.id === element),
			)
			return { ...state, subCategoriesSelected: newArr }
		default:
			return state
	}
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
