import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<main className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" />
						<Route path="/category/:id" />
						<Route path="/category/:id/subcategory/:id" />
					</Route>
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
