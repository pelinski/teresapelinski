import React from 'react'

export const Screen: React.FC<{ id: string; children: string | JSX.Element | JSX.Element[] }> = ({ id, children }): JSX.Element => (
	<div className='screen' id={id}>
		<div className='content'>{children}</div>
	</div>
)
