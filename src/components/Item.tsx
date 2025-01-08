import React from 'react'

export const OutputItem: React.FC<{ authors: string; date: number; title: string; venue: string; publication_type: string; links: { url: string; link_name: string }[]; isNew: boolean }> = ({
	authors,
	date,
	title,
	venue,
	publication_type,
	links,
	isNew = false,
}) => (
	<ul>
		{'>>'} {isNew && <span className='h-green'>****NEW****</span>} {authors} ({date}). <u>{title}</u>. {venue} ({publication_type}) --{' '}
		{links &&
			links.map((link, index) => (
				<>
					<a href={link.url} key={index}>
						{link.link_name}
					</a>{' '}
				</>
			))}
	</ul>
)
export const ArbitraryItem: React.FC = ({ children }) => (
	<ul>
		{'>>'} {children}
	</ul>
)
