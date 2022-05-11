import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from './Title'
import { Nav } from './Nav'
import { Screen } from './Screen'
import { Phd } from './screens/phd'
import { Smc } from './screens/Smc'

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
				<Screen id='title'>
					<Nav className='nav-mobile' />
					<Title />
				</Screen>
				<a className={'nav-mobile go-home'} onClick={scrollHandler('title')}>
					teresa-pelinski
				</a>
				<Screen id='about-me'>hi this is about me</Screen>
				<Screen id='phd'>
					<Phd />
				</Screen>
				<Screen id='smc'>
					<Smc />
				</Screen>
				<Screen id='art'>in 2021 i did a residency at phonos foundation, where i developed my project 'no-shell just a voice'.</Screen>
			</main>
		</>
	)
}
