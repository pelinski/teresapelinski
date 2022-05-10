import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { NoshellPage } from './Noshell.page'
import { Title } from '../components/Title'

export const PageWrapper: React.FC<{ screen: string }> = ({ screen }): JSX.Element => {
	const [showNav, setShowNav] = useState(true) // currently unused
	const navigate = useNavigate()
	const location = useLocation()
	console.log(location)

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
			<nav>
				<NavTree
					className={`${showNav ? '' : ' hide'}`}
					id={
						<a className={'title'} onClick={scrollHandler('title')}>
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
				<span className='bottom'>
					<a>my website</a>
					<a>github</a>
					<a>twitter</a>
				</span>
			</nav>
			<main>
				<div className='screen' id='title'>
					<div className='content'>
						<Title />
					</div>
				</div>
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
