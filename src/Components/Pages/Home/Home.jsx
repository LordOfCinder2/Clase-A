import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FooterLayout from '../../Layout/FooterLayout/FooterLayout'
import OffersContainer from '../Offers/Offers.container'

const Home = () => {
	return (
		<main className="home">
			<div>
				<img src="/src/assets/claseA.jpg" alt="logo" />
			</div>
			<p>
				<LocationOnIcon /> Estamos en la comarca andina
			</p>
			<OffersContainer />
			<FooterLayout />
		</main>
	)
}

export default Home
