import React, { JSX } from 'react'
import { useLocation } from 'react-router-dom'

export const Screen: React.FC<{ id: string; children: string | JSX.Element | JSX.Element[]; scrollHandler: (scrollTo: string) => () => void }> = ({ id, children, scrollHandler }): JSX.Element => {
	const location = useLocation()
	return (
		<>
			<div className='screen' id={id}>
				<a className={'nav-mobile go-home'} onClick={scrollHandler('title')}>
					{location.pathname !== '/' && <span>{'<--'}</span>} teresa-pelinski {location.pathname !== '/' && <span>{'<--'}</span>}
				</a>
				<div className='content'>{children}</div>
			</div>
		</>
	)
}
