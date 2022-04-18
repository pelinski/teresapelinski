import React from 'react'

export const HomePage: React.FC = (): JSX.Element => {
	return (
		<>
			{' '}
			<nav>
				<NavTree id={'teresa pelinski'} classN='title'>
					<NavTree id={<a onClick={scrollHandler('about-me')}>about-me</a>} prompt={'o'} />
					<NavTree id={'phd in ai and music _21-..25'} prompt={'+'}>
						<NavTree id={'embedded ai workshop'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
						<NavTree id={'not much to show here yet...'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
					</NavTree>
					<NavTree id={'sound and music computing master _20-21_'} prompt={'+'}>
						<NavTree id={'master thesis'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
						<NavTree id={'miniprojects'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
					</NavTree>
					<NavTree id={'sound art _??-..??_'} prompt={'+'}>
						<NavTree id={'noshell'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
					</NavTree>
					<NavTree id={'<----––––end-––––--->'} />
				</NavTree>
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

const NavTree: React.FC<{ id: string | JSX.Element; children?: JSX.Element[] | JSX.Element; prompt?: string | JSX.Element; classN?: string }> = ({
	id,
	children,
	prompt,
	classN = '',
}): JSX.Element => (
	<>
		{console.log(children)}
		<span className={classN} onClick={(classN === 'title' && scrollHandler('title')) || (() => null)}>
			{prompt}
			{prompt && <>&nbsp;</>}
			{id}
		</span>
		{children &&
			React.Children.map(
				children,
				(
					leave,
					index // works for both one children and an array of children
				) => (
					<>
						<div className='leave' key={index}>
							{leave}
						</div>
					</>
				)
			)}
	</>
)

// const NavLeave: React.FC<{ children: JSX.Element; prompt: string }> = ({ children, prompt }) => (
// 	<div className='leave'>
// 		{prompt}&nbsp;
// 		{children}
// 	</div>
// )
