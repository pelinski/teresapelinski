import React from 'react'

export const Screen: React.FC<{ id: string; children: string | JSX.Element | JSX.Element[]; scrollHandler: (scrollTo: string) => () => void }> = ({ id, children, scrollHandler }): JSX.Element => (
	<>
		<div className='screen' id={id}>
			<a className={'nav-mobile go-home'} onClick={scrollHandler('title')}>
				teresa-pelinski
			</a>
			<div className='content'>{children}</div>
		</div>
	</>
)
