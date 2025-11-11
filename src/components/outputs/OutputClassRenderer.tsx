import React, { useState, useEffect, useRef } from 'react'
import { ResearchOutputItem, AcademicServiceItem, TeachingItem, ArbitraryItem, GrantItem, ProjectItem } from './Items'

interface OutputClassRendererProps {
	outputType: 'publications' | 'workshops' | 'talks' | 'academic-service' | 'teaching' | 'dissemination' | 'gigs' | 'grants' | 'projects'
	label: string
	outputs: []
	isShown: boolean
	onToggle: () => void
	isFrozen?: boolean
	className?: string
	dragPosition?: { x: number; y: number }
	onDragPositionChange?: (position: { x: number; y: number }) => void
}

export const OutputClassRenderer: React.FC<OutputClassRendererProps> = ({
	outputType,
	label,
	outputs,
	isShown,
	onToggle,
	isFrozen,
	className = '',
	dragPosition = { x: 0, y: 0 },
	onDragPositionChange,
}) => {
	const [showProject, setShowProject] = useState<boolean>(false)
	const [isDragging, setIsDragging] = useState<boolean>(false)
	const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
	const elementRef = useRef<HTMLDivElement>(null)

	const handleMouseDown = (e: React.MouseEvent) => {
		if (isFrozen || outputType !== 'projects') return

		// Don't start drag if clicking the expand button area
		if ((e.target as HTMLElement).closest('.project-caption')) {
			return
		}

		setIsDragging(true)
		setDragStart({
			x: e.clientX - dragPosition.x,
			y: e.clientY - dragPosition.y,
		})
		e.preventDefault()
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging || !onDragPositionChange || !elementRef.current) return

		const newX = e.clientX - dragStart.x
		const newY = e.clientY - dragStart.y

		// Get the bounds of the container (.content)
		const container = elementRef.current.closest('.content')
		if (!container) {
			onDragPositionChange({ x: newX, y: newY })
			return
		}

		const containerRect = container.getBoundingClientRect()
		const elementRect = elementRef.current.getBoundingClientRect()

		// Calculate constrained position
		const minX = containerRect.left - elementRect.left + newX
		const maxX = containerRect.right - elementRect.right + newX
		const minY = containerRect.top - elementRect.top + newY
		const maxY = containerRect.bottom - elementRect.bottom + newY

		const constrainedX = Math.min(Math.max(newX, minX), maxX)
		const constrainedY = Math.min(Math.max(newY, minY), maxY)

		onDragPositionChange({
			x: constrainedX,
			y: constrainedY,
		})
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	useEffect(() => {
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove)
			window.addEventListener('mouseup', handleMouseUp)

			return () => {
				window.removeEventListener('mousemove', handleMouseMove)
				window.removeEventListener('mouseup', handleMouseUp)
			}
		}
	}, [isDragging, dragStart, dragPosition])

	const handleTouchStart = (e: React.TouchEvent) => {
		if (isFrozen || outputType !== 'projects') return

		if ((e.target as HTMLElement).closest('.project-caption')) {
			return
		}

		const touch = e.touches[0]
		setIsDragging(true)
		setDragStart({
			x: touch.clientX - dragPosition.x,
			y: touch.clientY - dragPosition.y,
		})
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging || !onDragPositionChange || !elementRef.current) return

		const touch = e.touches[0]
		const newX = touch.clientX - dragStart.x
		const newY = touch.clientY - dragStart.y

		// Get the bounds of the container (.content)
		const container = elementRef.current.closest('.content')
		if (!container) {
			onDragPositionChange({ x: newX, y: newY })
			e.preventDefault()
			return
		}

		const containerRect = container.getBoundingClientRect()
		const elementRect = elementRef.current.getBoundingClientRect()

		// Calculate constrained position
		const minX = containerRect.left - elementRect.left + newX
		const maxX = containerRect.right - elementRect.right + newX
		const minY = containerRect.top - elementRect.top + newY
		const maxY = containerRect.bottom - elementRect.bottom + newY

		const constrainedX = Math.min(Math.max(newX, minX), maxX)
		const constrainedY = Math.min(Math.max(newY, minY), maxY)

		onDragPositionChange({
			x: constrainedX,
			y: constrainedY,
		})
		e.preventDefault()
	}

	const handleTouchEnd = () => {
		setIsDragging(false)
	}

	const projectClassNames =
		outputType === 'projects'
			? `output-class project-draggable ${isDragging ? 'dragging' : ''} ${isFrozen ? 'frozen' : ''} ${className}`
			: `output-class ${isShown ? 'expanded' : ''} ${isFrozen ? 'frozen' : ''} ${className}`

	const projectStyle =
		outputType === 'projects'
			? {
					transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`,
					zIndex: isDragging ? 1000 : 1,
			  }
			: {}

	return (
		<div
			ref={elementRef}
			className={projectClassNames}
			style={projectStyle}
			onMouseDown={outputType === 'projects' ? handleMouseDown : undefined}
			onTouchStart={outputType === 'projects' ? handleTouchStart : undefined}
			onTouchMove={outputType === 'projects' ? handleTouchMove : undefined}
			onTouchEnd={outputType === 'projects' ? handleTouchEnd : undefined}
		>
			{outputType !== 'projects' ? (
				<>
					<span className={(outputType == 'gigs' ? 'h-orange' : 'h-yellow') + ' clickable'} onClick={onToggle}>
						{label} {isShown ? '[-]' : '[+]'}
					</span>
					<ul>
						{isShown && ['publications', 'workshops', 'talks'].includes(outputType) && outputs.map((out) => <ResearchOutputItem key={out.id} {...out} />)}
						{isShown && outputType === 'academic-service' && outputs.map((out) => <AcademicServiceItem key={out.id} {...out} />)}
						{isShown && outputType === 'dissemination' && outputs.map((out) => <ArbitraryItem key={out.id} {...out} />)}
						{isShown && outputType === 'teaching' && outputs.map((out) => <TeachingItem key={out.id} {...out} />)}
						{isShown && outputType === 'grants' && outputs.map((out) => <GrantItem key={out.id} {...out} />)}
						{isShown && outputType === 'gigs' && outputs.map((out) => <ArbitraryItem key={out.id} {...out} />)}
					</ul>
				</>
			) : (
				<>
					<div className='project-item' key={outputs[0]?.id}>
						<div className='project-card'>
							{outputs[0].image && (
								<div className='project-image-container'>
									<img src={(outputs[0] as any).image} alt={(outputs[0] as any).title} draggable='false' />
									<div className='sparkle-overlay' />
								</div>
							)}
							<span className='project-caption h-yellow clickable' onClick={() => setShowProject(!showProject)}>
								{label} {outputs[0].shortDescription && '--' + outputs[0].shortDescription} {showProject ? '[-]' : '[+]'} <br />
							</span>
						</div>
						<div className='project-details-wrapper'>
							{showProject && <span className='project-details'>{outputs[0].description}</span>}
							{isShown && outputType === 'projects' && outputs.map((out) => <ProjectItem key={out.id} {...out} />)}
						</div>
					</div>
				</>
			)}
		</div>
	)
}
