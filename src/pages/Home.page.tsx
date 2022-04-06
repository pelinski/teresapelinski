import React from 'react'

export const HomePage: React.FC = (): JSX.Element => {
	return (
		<>
			<nav>
				<a onClick={scrollHandler('title')}>{'teresa pelinski'}</a>
				&nbsp;|
				<br />
				phd––master––––––––––––sound
				<span>
					<Nbsp />|<Nbsp n={4} />|
					<br />
					<Nbsp />|<Nbsp n={4} />|
					<br />
					<Nbsp />|<Nbsp n={4} />|<Nbsp n={13} />
					+––––{'>'} <a>makam</a>
					<br />
					<Nbsp />|<Nbsp n={4} />|<Nbsp n={13} />|
					<br />
					<Nbsp />|<Nbsp n={4} />
					+-––––––-{'>'} <a>mini projects</a> +-–––-{'>'} <a>wekitunenator</a>
					<br />
					<Nbsp />|<Nbsp n={20} />|
					<br />
					<Nbsp />|<Nbsp n={20} />|
					<br />
					<Nbsp />|<Nbsp n={20} />
					+-–––-{'>'} <a>drum transcription</a>
					<br />
					<Nbsp />|
					<br />
					<Nbsp />|
					<br />
					<Nbsp />
					|
					<br />
					<Nbsp />|
					<br />
					<Nbsp />
					+––-{'>'} <a onClick={scrollHandler('about-me')}>talks </a>
					<br />
					&emsp;&emsp;|
				</span>
				{/* </span> */}
				{/* <span className='nav-projects'>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_|
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+––-{'>'}
						<a>+videos+</a>
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
						<br />
						<span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+––––{'>'}{' '}
							<a onClick={scrollHandler('no-shell')}>+no-shell</a>
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
							<br />
							<a>+videos+</a>
						</span>
					</span>
				</span>
				<span>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
					<br />{' '}
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---
					{'>'}
					<a onClick={scrollHandler('infilling')}>--infilling-+</a>
				</span> */}
			</nav>
			<main>
				<div className='screen' id='title'>
					<span>
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm <span>teresa pelinski</span> and this is my website
						<br />
						hi i'm teresa pelinski and this is my <span>website</span>
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
						hi i'm teresa pelinski and this is my website
						<br />
					</span>
				</div>
				<div className='screen' id='about-me'>
					hi this is the about me
				</div>
				<div className='screen' id='no-shell'>
					no-shell
				</div>
			</main>
		</>
	)
}

const scrollHandler = (scrollTo: string) => (): void => document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })

const Nbsp: React.FC<{ n?: number }> = ({ n = 0 }): JSX.Element => {
	const nbsp: JSX.Element[] = []
	for (let i = 0; i < n; i++) {
		nbsp.push(<>&nbsp;</>)
	}
	return <>{nbsp}</>
}
