import React, { useState } from 'react'
import { NoshellPage } from './Noshell.page'

export const HomePage: React.FC = (): JSX.Element => {
	const [showNav, setShowNav] = useState(true)
	console.log(`leave ${showNav ? '' : ' hide'}`)
	return (
		<>
			<nav>
				<NavTree
					className={`${showNav ? '' : ' hide'}`}
					id={
						<a className={'title'} onClick={() => setShowNav(!showNav)}>
							teresa-pelinski
						</a>
					}
				>
					{/* <NavTree id={''} prompt={'|'} />
				<NavTree id={<a onClick={scrollHandler('title')}>home </a>} prompt={'o'} /> */}

					<NavTree id={''} prompt={'|'} />
					<NavTree id={<a onClick={scrollHandler('about-me')}>about-me _97–...</a>} prompt={'o'} />
					<NavTree id={''} prompt={'|'} />
					<NavTree id={'phd in ai and music _21-..25'} prompt={'+'}>
						<NavTree id={'embedded ai workshop'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
						<NavTree id={'not much to show here yet...'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
					</NavTree>
					<NavTree id={''} prompt={'|'} />
					<NavTree id={'sound and music computing master _20-21_'} prompt={'+'}>
						<NavTree id={'master thesis'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
						<NavTree id={'miniprojects'} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
					</NavTree>
					<NavTree id={''} prompt={'|'} />
					<NavTree id={'sound art _??-..??'} prompt={'+'}>
						<NavTree id={<a onClick={scrollHandler('no-shell')}>no-shell</a>} prompt={<>|&nbsp;&nbsp;{'|-->'}</>} />
					</NavTree>
					<NavTree id={''} prompt={'|'} />
					<NavTree id={''} prompt={'v'} />
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
					hi this is about me
				</div>
				<NoshellPage />
			</main>
		</>
	)
}

const scrollHandler = (scrollTo: string) => (): void => document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })

const NavTree: React.FC<{ id: string | JSX.Element; children?: JSX.Element[] | JSX.Element; prompt?: string | JSX.Element; className?: string }> = ({
	id,
	children,
	prompt,
	className,
}): JSX.Element => (
	<>
		<span>
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
						<div className={`leave ${className}`} key={index}>
							{leave}
						</div>
					</>
				)
			)}
	</>
)
