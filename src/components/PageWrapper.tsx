import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from './Title'
import { Nav } from './Nav'

import { Screen } from './screens/Screen'
import { Phd } from './screens/Phd'
import { Smc } from './screens/Smc'
import { Aboutme } from './screens/Aboutme'
import { Sound } from './screens/Sound'

export const PageWrapper: React.FC<{ screen: string }> = ({ screen }): JSX.Element => {
	const navigate = useNavigate()
	const scrollHandler = (scrollTo: string) => (): void => {
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		return document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}
	// smooth scroll to screen when loading component
	useEffect(() => {
		if (screen != 'title') {
			document.getElementById(screen)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
		}
	}, [])

	return (
		<>
			<Nav className='nav-desktop' />
			<main>
				<Screen id='title' scrollHandler={scrollHandler}>
					<Nav className='nav-mobile' />
					<Title />
				</Screen>
				<Screen id={'about-me'} scrollHandler={scrollHandler}>
					<Aboutme scrollHandler={scrollHandler} />
				</Screen>
				<Screen id={'phd'} scrollHandler={scrollHandler}>
					<Phd />
				</Screen>
				<Screen id={'smc'} scrollHandler={scrollHandler}>
					<Smc />
				</Screen>
				<Screen id={'sound'} scrollHandler={scrollHandler}>
					<Sound />
				</Screen>
			</main>
		</>
	)
}
