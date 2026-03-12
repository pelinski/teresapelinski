import React, { JSX, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Nav: React.FC<{ className: string; frozenState: { isFrozen: boolean; setIsFrozen: (frozen: boolean) => void } }> = ({ className, frozenState }) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [animate, setAnimate] = useState(false)
	const isMobile = className === 'nav-mobile'
	const { isFrozen, setIsFrozen } = frozenState

	const scrollHandler = (scrollTo: string): void => {
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })

		if (location.pathname === `/${scrollTo === 'title' ? '' : scrollTo}`) return
		setAnimate(true)
		setTimeout(() => setAnimate(false), 10)
	}

	return (
		<nav className={className}>
			<div className={'nav-tree-container' + `${animate ? '' : ' glitch'}`}>
				<NavTree scrollHandler={scrollHandler} className={`${animate ? '' : ' glitch'}`} txt={!isMobile ? <span className='title'>teresa-pelinski</span> : 'index'} to={'title'}>
					<NavTree scrollHandler={scrollHandler} prompt={'|'} />
					<NavTree scrollHandler={scrollHandler} txt={'🙋🏻‍♀️about'} to={'about'} prompt={'+'} />
					<NavTree scrollHandler={scrollHandler} prompt={'|'} />
					<NavTree scrollHandler={scrollHandler} txt={'🗞️now/news'} to={'now'} prompt={'+'} />
					<NavTree scrollHandler={scrollHandler} prompt={'|'} />
					<NavTree scrollHandler={scrollHandler} txt={'📚research'} to={'research'} prompt={'+'}></NavTree>
					<NavTree scrollHandler={scrollHandler} prompt={'|'} />
					<NavTree scrollHandler={scrollHandler} txt={'🔊projects'} to={'projects'} prompt={'+'} />
					<NavTree scrollHandler={scrollHandler} prompt={'|'} />
					<NavTree scrollHandler={scrollHandler} txt={'📝blog'} to={'blog'} prompt={'+'} />
					<NavTree scrollHandler={scrollHandler} prompt={'|'} />
					<NavTree scrollHandler={scrollHandler} prompt={'v'} />
				</NavTree>
			</div>
			<span className={`bottom `}>
				<a className={'clickable bounce' + (isFrozen ? ' frozen' : '')} onClick={() => setIsFrozen(!isFrozen)}>
					{isFrozen ? 'unfreeze🔥' : 'freeze❄️🥶'}
				</a>
				<br />
				<div className='links'>
					<a
						className='h-blue'
						onClick={() => {
							scrollHandler('blog')
							setTimeout(() => scrollHandler('title'), 1000)
						}}
					>
						my website
					</a>

					<a className='h-blue' href='https://bsky.app/profile/tpelinski.bsky.social'>
						bluesky
					</a>

					<a className='h-blue' href='https://github.com/pelinski'>
						github
					</a>
				</div>
				<span>hi@teresapelinski.com</span>
				<br />
				<span>last updated: 2026-03-12</span>
				<br />
				<span>
					coded and self-hosted by me and my raspberry pi (
					<a className='source' href='https://github.com/pelinski/teresapelinski'>
						source
					</a>
					)
				</span>
			</span>
		</nav>
	)
}

const NavTree: React.FC<{
	txt: string | JSX.Element
	children?: JSX.Element[] | JSX.Element
	prompt?: string | JSX.Element
	className?: string
	to?: string
	scrollHandler: (scrollTo: string) => void
}> = ({ txt = '', to = '', children, prompt, className, scrollHandler }): JSX.Element => {
	const location = useLocation()
	prompt = location.pathname !== '/' && location.pathname === `/${to}` ? 'o' : prompt

	return (
		<>
			<span>
				{prompt}
				{prompt && <>&nbsp;</>}
				{txt && (
					<a
						onClick={() => {
							scrollHandler(to)
						}}
					>
						{txt}
					</a>
				)}
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
