import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from './Title'
import { Nav } from './Nav'

import { Screen } from './Screen'
import { PhdScreen } from './screens/phd'
import { SmcScreen } from './screens/Smc'
import { AboutmeScreen } from './screens/Aboutme'
import { ArtScreen } from './screens/Art'

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

				<AboutmeScreen scrollHandler={scrollHandler} />

				<PhdScreen />

				<SmcScreen />

				<ArtScreen />
			</main>
		</>
	)
}
