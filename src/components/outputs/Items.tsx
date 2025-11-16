import React, { useState, useEffect, useRef } from 'react'

interface ItemProps {
	id: string
	date: string
	url: string
	// publications, workshops, talks
	description?: string
	type?: string
	authors?: string
	title?: string
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
	// projects
	resetPositions?: boolean
	image?: string
	shortDescription?: string
	shownAt?: [{ venue: string; date: string; url?: string }]
	videos?: string[]
	zIndexProps?: [Record<string, number>, React.Dispatch<React.SetStateAction<Record<string, number>>>]
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

export const GrantItem: React.FC<ItemProps> = ({ id, date, title, institution, description }) => (
	<li key={id}>
		{'>>'} <strong>{title}</strong> ({date}): {institution}
		{institution && '.'} {description}.
	</li>
)
export const ProjectItem: React.FC<ItemProps> = ({ id, image, title, shortDescription, description, url, date, shownAt, links, videos, resetPositions, zIndexProps }) => {
	const [showDescription, setShowDescription] = useState<boolean>(false)
	const [isDragging, setIsDragging] = useState<boolean>(false)
	const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
	const [dragPosition, setDragPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
	const elementRef = useRef<HTMLDivElement>(null)
	const [zIndexDic, setZIndexDic] = zIndexProps

	useEffect(() => {
		setDragPosition({ x: 0, y: 0 })
		setShowDescription(false)
	}, [resetPositions])

	const getConstrainedPosition = (x: number, y: number) => {
		if (!elementRef.current) return { x, y }

		const container = elementRef.current.closest('.content')
		if (!container) return { x, y }

		const containerRect = container.getBoundingClientRect()
		const elementRect = elementRef.current.getBoundingClientRect()

		const minX = containerRect.left - elementRect.left + x
		const maxX = containerRect.right - elementRect.right + x
		const minY = containerRect.top - elementRect.top + y
		const maxY = containerRect.bottom - elementRect.bottom + y

		return {
			x: Math.min(Math.max(x, minX), maxX),
			y: Math.min(Math.max(y, minY), maxY),
		}
	}

	const startDrag = (clientX: number, clientY: number) => {
		setIsDragging(true)
		setDragStart({
			x: clientX - dragPosition.x,
			y: clientY - dragPosition.y,
		})
		return true
	}

	const handleMouseDown = (e: React.MouseEvent) => {
		if ((e.target as HTMLElement).closest('.project-caption')) return
		if (startDrag(e.clientX, e.clientY)) e.preventDefault()
	}

	const handleTouchStart = (e: React.TouchEvent) => {
		if ((e.target as HTMLElement).closest('.project-caption')) return
		const touch = e.touches[0]
		startDrag(touch.clientX, touch.clientY)
	}

	const updatePosition = (clientX: number, clientY: number) => {
		if (!isDragging) return

		const newX = clientX - dragStart.x
		const newY = clientY - dragStart.y
		const constrained = getConstrainedPosition(newX, newY)

		setDragPosition(constrained) // Update internal state instead
		setZIndexDic({
			...zIndexDic,
			[id]: Math.max(...Object.values(zIndexDic)) + 1,
		})
	}

	useEffect(() => {
		if (!isDragging) return

		const handleMove = (e: MouseEvent) => updatePosition(e.clientX, e.clientY)
		const handleUp = () => setIsDragging(false)

		window.addEventListener('mousemove', handleMove)
		window.addEventListener('mouseup', handleUp)

		return () => {
			window.removeEventListener('mousemove', handleMove)
			window.removeEventListener('mouseup', handleUp)
		}
	}, [isDragging, dragStart, dragPosition])

	const handleTouchMove = (e: React.TouchEvent) => {
		const touch = e.touches[0]
		updatePosition(touch.clientX, touch.clientY)
		// e.preventDefault()
	}

	const handleProjectToggle = () => {
		setShowDescription(!showDescription)
		setZIndexDic({
			...zIndexDic,
			[id]: Math.max(...Object.values(zIndexDic)) + 1,
		})
	}

	return (
		<div
			ref={elementRef}
			className={`project-draggable ${isDragging ? 'dragging' : ''} `}
			style={{
				transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`,
				zIndex: zIndexDic[id],
			}}
			onMouseDown={handleMouseDown}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={() => setIsDragging(false)}
			key={id}
		>
			<div className='project-card'>
				{image && (
					<div className='project-image-container'>
						<img src={image} alt={title} draggable='false' />
						<div className='sparkle-overlay' />
					</div>
				)}
				<span className={'project-caption h-yellow clickable' + (showDescription ? ' selected' : '')} onClick={handleProjectToggle}>
					{title} {shortDescription && '--' + shortDescription} {showDescription ? '[-]' : '[+]'}
				</span>{' '}
				{showDescription && (
					<div className='project-description-wrapper'>
						{' '}
						<div className='project-content' key={id}>
							<span>({date})</span>
							<span>{description}</span>
							{shownAt && shownAt.length > 0 && (
								<>
									<br />
									<span className='h-blue'>Shown at:</span>
									<ul>
										{shownAt.map((event, index) => (
											<li key={index}>
												{'--'} {event.venue} ({event.date}): <a href={event.url}>{event.url}</a>
											</li>
										))}
									</ul>
								</>
							)}
							{links && links.length > 0 && (
								<>
									<span className='h-blue'>Links:</span>
									{links.map((link, index) => (
										<span key={index}>
											<a href={link.url}>{link.linkName}</a>{' '}
										</span>
									))}
								</>
							)}
							{videos && videos.length > 0 && (
								<>
									<span className='h-blue'>Videos:</span>
									{videos.map((video, index) => (
										<iframe src={video} allow='autoplay; fullscreen; picture-in-picture' allowFullScreen key={index} />
									))}
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export const ArbitraryItem: React.FC<ItemProps> = ({ id, date, description, venue, links }) => (
	<li key={id}>
		{description} - {venue && <span>{venue}</span>} ({date})
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
