import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav: React.FC<{ className: string }> = ({ className }) => {
	const [showNav, setShowNav] = useState(true) // only used in mobile
	const navigate = useNavigate()
	const isMobile = className === 'nav-mobile'

	const scrollHandler = (scrollTo: string): void => {
		setShowNav(!showNav)
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}
	return (
		<nav className={className}>
			<NavTree
				className={`${showNav ? '' : ' hide'}`}
				id={
					<a className={'title'} onClick={() => scrollHandler('title')}>
						{!isMobile ? 'teresa-pelinski' : 'index'}
					</a>
				}
			>
				{/* <NavTree id={''} prompt={'|'} />
<NavTree id={<a onClick={()=>scrollHandler('title')}>home </a>} prompt={'o'} /> */}
				<NavTree id={''} prompt={'|'} />
				<NavTree id={<a onClick={() => scrollHandler('about-me')}>about-me</a>} prompt={'o'} />
				<NavTree id={''} prompt={'|'} />
				<NavTree id={<a onClick={() => scrollHandler('phd')}>phd in ai and music</a>} prompt={'+'}>
					<NavTree id={'topic'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'research outputs'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'grants'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'teaching'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={<a onClick={() => scrollHandler('smc')}>master's in smc</a>} prompt={'+'}>
					<NavTree id={'master thesis'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'coursework'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={<a onClick={() => scrollHandler('sound')}>sound and music </a>} prompt={'+'}>
					<NavTree id={'radio residency'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'phonos residency'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'record label'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />

					<NavTree id={'gigs'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={''} prompt={'v'} />
			</NavTree>
			<span className={`bottom ${showNav ? '' : ' hide'}`}>
				<a
					className='h-blue'
					onClick={() => {
						scrollHandler('sound')
						setTimeout(() => scrollHandler('title'), 1000)
					}}
				>
					my website
				</a>
				<a className='h-blue' href='documents/pelinski-cv.pdf'>
					cv
				</a>
				<a className='h-blue' href='https://github.com/pelinski'>
					github
				</a>
				<a className='h-blue' href='https://bsky.app/profile/tpelinski.bsky.social'>
					bluesky
				</a>{' '}
				<br />
				<span>teresapelinski@gmail.com</span>
				<br />
				<span>last updated: 2025-05</span>
			</span>
		</nav>
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
