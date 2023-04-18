import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home/Home'
import SecondaryOffersContainer from './Components/Pages/SecondaryOffers/SecondaryOffers.container'

function App() {
	return (
		<main className="App">
			<BrowserRouter>
				<Routes>
						<Route path="/" element={<Home/>}/>
					<Route element={<Layout />}>
						<Route path="/category/:categoryId" element={<SecondaryOffersContainer/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
