import React, { JSX, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav: React.FC<{ className: string; frozenState: { isFrozen: boolean; setIsFrozen: (frozen: boolean) => void } }> = ({ className, frozenState }) => {
	const [showNav, setShowNav] = useState(true) // only used in mobile
	const navigate = useNavigate()
	const isMobile = className === 'nav-mobile'
	const { isFrozen, setIsFrozen } = frozenState

	const scrollHandler = (scrollTo: string): void => {
		setShowNav(!showNav)
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}
	return (
		<nav className={className}>
			<div className='nav-tree-container'>
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
					<NavTree id={<a onClick={() => scrollHandler('about')}>🙋🏻‍♀️about</a>} prompt={'o'} />
					<NavTree id={''} prompt={'|'} />
					<NavTree id={<a onClick={() => scrollHandler('now')}>🗞️now/news</a>} prompt={'*'} />
					<NavTree id={''} prompt={'|'} />
					<NavTree id={<a onClick={() => scrollHandler('research')}>📚research</a>} prompt={'+'}>
						{/* <NavTree id={'topic'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'research outputs'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'grants'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'teaching'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} /> */}
					</NavTree>
					<NavTree id={''} prompt={'|'} />
					<NavTree id={<a onClick={() => scrollHandler('projects')}>🔊projects</a>} prompt={'+'} />
					<NavTree id={''} prompt={'|'} />

					<NavTree id={<a onClick={() => scrollHandler('blog')}>📝blog</a>} prompt={'*'} />

					{/* <NavTree id={'radio residency'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'phonos residency'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'record label'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />

					<NavTree id={'gigs'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} /> */}
					<NavTree id={''} prompt={'|'} />
					<NavTree id={''} prompt={'v'} />
				</NavTree>
			</div>
			<span className={`bottom ${showNav ? '' : ' hide'}`}>
				<a className={'clickable bounce' + (isFrozen ? ' frozen' : '')} onClick={() => setIsFrozen(!isFrozen)}>
					{isFrozen ? 'unfreeze🔥' : 'freeze❄️🥶'}
				</a>
				<br />
				<div className='links'>
					<a
						className='h-blue'
						onClick={() => {
							scrollHandler('art')
							setTimeout(() => scrollHandler('title'), 1000)
						}}
					>
						my website
					</a>

					<a className='h-blue' href='https://github.com/pelinski'>
						github
					</a>

					<a className='h-blue' href='https://bsky.app/profile/tpelinski.bsky.social'>
						bluesky
					</a>
				</div>
				<span>teresapelinski@gmail.com</span>
				<br />
				<span>last updated: 2025-10</span>
				<br />
				<span>
					handcoded by me {'<3'}
					<a href='https://github.com/pelinski/teresapelinski'>source</a>
				</span>
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
