import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from './Title'
import { Nav } from './Nav'
import { Screen } from './Screen'
import { Research } from './screens/Research'
import { Projects } from './screens/Projects'
import { About } from './screens/About'
import { Now } from './screens/Now'
import { Blog } from './screens/Blog'

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

	// freeze dynamic components
	const [isFrozen, setIsFrozen] = useState(false)
	const frozenState = { isFrozen, setIsFrozen }

	return (
		<>
			<Nav className='nav-desktop' frozenState={frozenState} />
			<main>
				<Screen id='title' scrollHandler={scrollHandler}>
					<Nav className='nav-mobile' frozenState={frozenState} />
					<Title />
				</Screen>
				<Screen id={'about'} scrollHandler={scrollHandler}>
					<About scrollHandler={scrollHandler} isFrozen={isFrozen} />
				</Screen>
				<Screen id={'now'} scrollHandler={scrollHandler}>
					<Now scrollHandler={scrollHandler} />
				</Screen>
				<Screen id={'research'} scrollHandler={scrollHandler}>
					<Research scrollHandler={scrollHandler} isFrozen={isFrozen} />
				</Screen>
				<Screen id={'projects'} scrollHandler={scrollHandler}>
					<Projects scrollHandler={scrollHandler} />
				</Screen>
				<Screen id={'blog'} scrollHandler={scrollHandler}>
					<Blog scrollHandler={scrollHandler} />
				</Screen>
			</main>
		</>
	)
}
