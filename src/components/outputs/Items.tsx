import React from 'react'

interface ItemProps {
	id: string
	date: string
	url: string
	// publications, workshops, talks
	description?: string
	type?: string
	authors?: string
	titles?: string
	isNew?: boolean
	// academic service
	venue?: string
	track?: string
	// teaching
	role?: string
	module?: string
	program?: string
	institution: string
	// gigs
	links?: [{ url: string; link_name: string }]
}

export const ResearchOutputItem: React.FC<ItemProps> = ({ id, authors, date, title, venue, url, isNew = false }) => (
	<li key={id}>
		{'>>'} {isNew && <span className='h-green'>****NEW****</span>} {authors} ({date}). <a href={url}>{title}</a>. {venue}
	</li>
)

export const AcademicServiceItem: React.FC<ItemProps> = ({ id, date, description, venue, url, track, type }) => (
	<>
		{(type === 'conference-peer-review' || type === 'conference-chair') && (
			<li key={id}>
				{'>>'} {description}. <a href={url}>{venue}</a> {track && <span>({track})</span>}
			</li>
		)}

		{type !== 'conference-peer-review' && type !== 'conference-chair' && (
			<li key={id}>
				{'>>'} {description} ({date}) {venue && <a href={url}>{venue}</a>}
			</li>
		)}
	</>
)

export const TeachingItem: React.FC<ItemProps> = ({ id, date, role, module, program, institution }) => (
	<li key={id}>
		{'>>'} {role} at the {module} module, {program}, {institution} ({date})
	</li>
)

export const GigItem: React.FC<ItemProps> = ({ id, date, description, url }) => (
	<li key={id}>
		{'>>'} <a href={url}>{description}</a> ({date})
	</li>
)

export const ArbitraryItem: React.FC<ItemProps> = ({ id, date, description, venue, links }) => (
	<li key={id}>
		{'>>'} {description} - {venue && <span>{venue}</span>} ({date})
		{links && links.length > 0 && (
			<>
				{' '}
				{links.map((link, index) => (
					<span key={index}>
						<a href={link.url}>{link.link_name}</a>{' '}
					</span>
				))}
			</>
		)}
	</li>
)
