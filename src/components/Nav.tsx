import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav: React.FC<{ className: string }> = ({ className }) => {
	const [showNav, setShowNav] = useState(true) // only used in mobile
	const navigate = useNavigate()
	const isMobile = className === 'nav-mobile'

	const scrollHandler = (scrollTo: string) => (): void => {
		setShowNav(!showNav)
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		return document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}
	return (
		<nav className={className}>
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
					<NavTree id={'embedded ai workshop'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'not much to show here yet...'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={'sound and music computing master _20-21_'} prompt={'+'}>
					<NavTree id={'master thesis'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'miniprojects'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={'sound art _??-..??'} prompt={'+'}>
					<NavTree id={<a onClick={scrollHandler('no-shell')}>no-shell</a>} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={''} prompt={'v'} />
			</NavTree>
			<span className={`bottom ${showNav ? '' : ' hide'}`}>
				<a>my website</a>
				<a>github</a>
				<a>twitter</a>
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
