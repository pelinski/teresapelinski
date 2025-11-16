import React, { JSX, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

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
				<NavTree className={`${showNav ? '' : ' hide'}`} txt={!isMobile ? <span className='title'>teresa-pelinski</span> : 'index'} to={''}>
					<NavTree prompt={'|'} />
					<NavTree txt={'🙋🏻‍♀️about'} to={'about'} prompt={'+'} />
					<NavTree prompt={'|'} />
					<NavTree txt={'🗞️now/news'} to={'now'} prompt={'+'} />
					<NavTree prompt={'|'} />
					<NavTree txt={'📚research'} to={'research'} prompt={'+'}></NavTree>
					<NavTree prompt={'|'} />
					<NavTree txt={'🔊projects'} to={'projects'} prompt={'+'} />
					<NavTree prompt={'|'} />
					<NavTree txt={'📝blog'} to={'blog'} prompt={'+'} />
					<NavTree prompt={'|'} />
					<NavTree prompt={'v'} />
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
				<span>hi@teresapelinski.com</span>
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

const NavTree: React.FC<{ txt: string | JSX.Element; children?: JSX.Element[] | JSX.Element; prompt?: string | JSX.Element; className?: string; to?: string }> = ({
	txt = '',
	to = '',
	children,
	prompt,
	className,
}): JSX.Element => {
	const [showNav, setShowNav] = useState(true) // only used in mobile
	const navigate = useNavigate()
	const location = useLocation()

	const scrollHandler = (scrollTo: string): void => {
		setShowNav(!showNav)
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}

	prompt = location.pathname !== '/' && location.pathname === `/${to}` ? 'o' : prompt

	return (
		<>
			<span>
				{prompt}
				{prompt && <>&nbsp;</>}
				{txt && <a onClick={() => scrollHandler(to)}>{txt}</a>}
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
}
