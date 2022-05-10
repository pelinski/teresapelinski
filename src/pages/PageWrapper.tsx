import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Title } from '../components/Title'
import { Nav } from '../components/Nav'

export const PageWrapper: React.FC<{ screen: string }> = ({ screen }): JSX.Element => {
	const navigate = useNavigate()
	const scrollHandler = (scrollTo: string) => (): void => {
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		return document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}
	// smooth scroll to screen when loading component
	useEffect(() => {
		document.getElementById(screen)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}, [])

	return (
		<>
			<Nav className='nav-desktop' />
			<main>
				<div className='screen' id='title'>
					<div className='content'>
						<Nav className='nav-mobile' />
						<Title />
					</div>
				</div>
				<a className='nav-mobile go-home' onClick={scrollHandler('title')}>
					teresa-pelinski
				</a>
				<div className='screen' id='about-me'>
					<div className='content'>hi this is about me</div>
				</div>
				<div className='screen' id='no-shell'>
					<div className='content'>in 2021 i did a residency at phonos foundation, where i developed my project 'no-shell just a voice'.</div>
				</div>
			</main>
		</>
	)
}
