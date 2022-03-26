import React from 'react'

export const HomePage: React.FC = (): JSX.Element => {
	return (
		<>
			<nav>
				<a onClick={scrollHandler('title')}>-++home-+</a>
				<a onClick={scrollHandler('about-me')}>-about me+-</a>
				<a>-projects-</a>
				<a onClick={scrollHandler('no-shell')}>+no-shell</a>
				<a onClick={scrollHandler('infilling')}>--infilling-+</a>
			</nav>
			<main>
				<div className='screen' id='title'>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>
						hi i'm <span>teresa pelinski</span> and this is my website
					</span>
					<span>
						hi i'm teresa pelinski and this is my <span>website</span>
					</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
					<span>hi i'm teresa pelinski and this is my website</span>
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

const scrollHandler = (scrollTo: string) => (): void =>
	document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
