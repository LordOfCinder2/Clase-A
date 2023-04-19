import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterLayout from './FooterLayout/FooterLayout'
import HeaderLayout from './HeaderLayout/HeaderLayout'
import './Layout.css'

const Layout = () => {
	return (
		<div className="layout">
			<HeaderLayout />
			<Outlet />
			<FooterLayout />
		</div>
	)
}

export default Layout
