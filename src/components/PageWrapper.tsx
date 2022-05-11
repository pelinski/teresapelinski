import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from './Title'
import { Nav } from './Nav'
import { Screen } from './Screen'

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
				<Screen id='phd'>hi this is phd</Screen>
				<Screen id='smc'>
					<div>
						<span>
							{' '}
							{'>'} sound and music computing master {'<'}
						</span>
						<div>
							in 2020-2021 i did the <a href='https://www.upf.edu/web/masters/master-en-tecnologies-del-so-i-de-la-musica'>master in sound and music computing</a> at the universitat
							pompeu fabra in barcelona. i took courses on audio signal processing for musical applications, advanced topics in sound and music computing, music perception and cognition,
							computational creativity, audio and music processing lab, music information retrieval and advanced interface design. i obtained an average grade of 97%.
						</div>
						<span>relevant coursework (miniprojects):</span>
						<a href='https://github.com/pelinski/crnn_multitask_adt'>multitask crnn for audio drum transcription evaluation</a>
						<a href='https://github.com/pelinski/aid-challenges'>weekly advanced interface design assignments</a>
						<a href=''>analysis of deviatiosn in intonation on turkish makam</a>
						<a href='https://github.com/gonski/wekitunenator'>wekitunenator</a>
						<a href='https://www.youtube.com/watch?v=M6bAb42s-lo'>video</a>
						<span>master thesis</span>
						<div>
							i wrote my master thesis under the supervision of sergi jordà and behzad haki on the topic of music generation with deep learning, in particular, on infilling audio drum
							loops with transformer neural networks. i obtained a 100% grade. here is the <a>manuscript</a> the <a>code</a> and a <a>video</a>
						</div>
						<iframe
							width={560}
							height={315}
							src='https://www.youtube-nocookie.com/embed/c0vCFT8gLi8'
							title='YouTube video player'
							frameBorder={0}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
						<iframe
							width={560}
							height={315}
							src='https://www.youtube-nocookie.com/embed/M6bAb42s-lo'
							title='YouTube video player'
							frameBorder={0}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</Screen>
				<Screen id='no-shell'>in 2021 i did a residency at phonos foundation, where i developed my project 'no-shell just a voice'.</Screen>
			</main>
		</>
	)
}
