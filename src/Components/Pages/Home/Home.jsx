import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FooterLayout from '../../Layout/FooterLayout/FooterLayout'
import OffersContainer from '../Offers/Offers.container'
import './Home.css'

const Home = () => {
	return (
		<main className="home">
			<div className="home-header">
				<div className="logo-container">
					<img src="/src/assets/claseA.jpg" alt="logo" />
				</div>
				<p className="location-text">
					<LocationOnIcon className="location-icon" color="" fontSize="" /> Estamos
					en la comarca andina
				</p>
			</div>
			<OffersContainer />
			<FooterLayout />
		</main>
	)
}

export default Home
