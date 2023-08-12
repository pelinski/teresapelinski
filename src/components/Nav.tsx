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
					<NavTree id={'publications'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={"things i'm doing"} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'grants'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'teaching'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={<a onClick={() => scrollHandler('smc')}>sound and music computing master</a>} prompt={'+'}>
					<NavTree id={'master thesis'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'miniprojects'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={<a onClick={() => scrollHandler('art')}>sound-art</a>} prompt={'+'}>
					<NavTree id={'phonos residency'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					<NavTree id={'radio'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} />
					{/* <NavTree id={'gigs'} prompt={!isMobile ? <>|&nbsp;&nbsp;{'|-->'}</> : <>{'>'}</>} /> */}
				</NavTree>
				<NavTree id={''} prompt={'|'} />
				<NavTree id={''} prompt={'v'} />
			</NavTree>
			<span className={`bottom ${showNav ? '' : ' hide'}`}>
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
				<a className='h-blue' href='https://twitter.com/t_pelinski'>
					twitter
				</a>
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
