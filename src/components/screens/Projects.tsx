import React, { useState, useEffect } from 'react'
import { OutputClassRenderer } from '../outputs/OutputClassRenderer'

interface Item {
	id: string
	date: string
	description: string
	title: string
	shortDescription: string
	filters: string[]
	links?: [{ url: string; linkName: string }]
	shownAt?: [{ venue: string; date: string; url?: string }]
	videos?: string[]
}

interface DragPositions {
	[key: string]: { x: number; y: number }
}

export const Projects: React.FC<{ isFrozen: boolean }> = ({ isFrozen }) => {
	const [outputs, setOutputs] = useState<{
		gigs: Item[]
		projects: Item[]
	}>({
		gigs: [],
		projects: [],
	})

	const [showGigs, setShowGigs] = useState<boolean>(false)
	const [selectedFilters, setSelectedFilters] = useState<string[]>([])
	const [availableFilters, setAvailableFilters] = useState<string[]>([])
	const [dragPositions, setDragPositions] = useState<DragPositions>({})

	useEffect(() => {
		let isMounted = true
		Promise.all([fetch('/content/items/gigs.json').then((res) => res.json()), fetch('/content/items/projects.json').then((res) => res.json())])
			.then(([gigs, projects]) => {
				if (isMounted) {
					setOutputs({
						gigs: gigs,
						projects: projects,
					})

					// Get available filters
					const filters = Array.from(new Set(projects.flatMap((proj: Item) => proj.filters))).sort()
					setAvailableFilters(filters)
					setSelectedFilters(filters) // Select all on first load
				}
			})
			.catch((err) => console.error('Error loading outputs:', err))
		return () => {
			isMounted = false
		}
	}, [])

	const handleDragPositionChange = (id: string, position: { x: number; y: number }) => {
		setDragPositions((prev) => ({
			...prev,
			[id]: position,
		}))
	}

	const handleResetPositions = () => {
		setDragPositions({})
	}

	return (
		<>
			<span className='screen-title-container'>
				<span className='screen-title'> 🔊 Project repository 🚧 </span>

				<div className='filters'>
					{availableFilters.map((filter) => (
						<span
							key={filter}
							className={'filter-chip clickable ' + (selectedFilters.includes(filter) ? 'selected' : '')}
							onClick={() => setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))}
						>
							{filter}
						</span>
					))}
					{Object.keys(dragPositions).length > 0 && (
						<span className='filter-chip clickable h-red' onClick={handleResetPositions} style={{ marginLeft: '1rem' }}>
							Reset positions
						</span>
					)}
				</div>
			</span>
			<div className='project-repo'>
				{/* <div className={'selected-project-info' + (showProject ? ' show' : '')}>
					<span onClick={() => setShowProject('')}>x</span>
					{outputs.projects.find((project) => project.id === showProject) ? (
						<>
							<h3>{outputs.projects.find((project) => project.id === showProject)?.title}</h3>
							<p>{outputs.projects.find((project) => project.id === showProject)?.description}</p>
						</>
					) : (
						<p>No project selected</p>
					)}
				</div> */}
				<div className='projects-list'>
					{outputs.projects.length > 0 &&
						outputs.projects.map(
							(project) =>
								selectedFilters.some((filter) => project.filters.includes(filter)) && (
									<OutputClassRenderer
										key={project.id}
										outputType='projects'
										label={project.title}
										outputs={[project]}
										isShown={false}
										isFrozen={isFrozen}
										// className={'bounce'}
										dragPosition={dragPositions[project.id] || { x: 0, y: 0 }}
										onDragPositionChange={(pos) => handleDragPositionChange(project.id, pos)}
									/>
								)
						)}
				</div>

				<OutputClassRenderer
					outputType='gigs'
					label='Performances archive'
					outputs={outputs.gigs}
					isShown={showGigs}
					onToggle={() => setShowGigs(!showGigs)}
					// className={'bounce'}
					isFrozen={isFrozen}
				/>
				<br />
			</div>
			<footer>
				<img src='/gifs/under-construction/writing.gif' alt='under construction writing gif' />
			</footer>
		</>
	)
}
