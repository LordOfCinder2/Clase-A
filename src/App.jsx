import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home/Home'

function App() {
	return (
		<main className="App">
			<BrowserRouter>
				<Routes>
						<Route path="/" element={<Home/>}/>
					<Route element={<Layout />}>
						<Route path="/category/:id" />
						<Route path="/category/:id/subcategory/:id" />
					</Route>
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
