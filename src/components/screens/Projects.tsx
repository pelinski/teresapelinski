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
export const Projects: React.FC = () => {
	const [outputs, setOutputs] = useState<{
		gigs: Item[]
		projects: Item[]
	}>({
		gigs: [],
		projects: [],
	})

	const [showOutputs, setShowOutputs] = useState<{
		gigs: boolean
		projects: Record<string, boolean>
	}>({
		gigs: false,
		projects: {},
	})

	const [selectedFilters, setSelectedFilters] = useState<string[]>([])
	const [availableFilters, setAvailableFilters] = useState<string[]>([])

	useEffect(() => {
		let isMounted = true
		Promise.all([fetch('/content/items/gigs.json').then((res) => res.json()), fetch('/content/items/projects.json').then((res) => res.json())])
			.then(([gigs, projects]) => {
				if (isMounted) {
					setOutputs({
						gigs: gigs,
						projects: projects,
					})

					// Initialize all projects as hidden
					const projectsState = projects.reduce((acc: Record<string, boolean>, project: Item) => {
						acc[project.id] = false
						return acc
					}, {})

					setShowOutputs((prev) => ({
						...prev,
						projects: projectsState,
					}))

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

	return (
		<>
			<span className='screen-title-container'>
				<span className='screen-title'> 🔊 Project repository 🚧 </span>{' '}
				<header>
					<div className='horizontal-gif'>
						<img src='/gifs/under-construction/banner.gif' alt='under construction 90s gif' />
					</div>
				</header>
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
				</div>
			</span>
			<div className='project-repo'>
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
										isShown={showOutputs.projects[project.id] || false}
										onToggle={() =>
											setShowOutputs((prev) => ({
												...prev,
												projects: {
													...prev.projects,
													[project.id]: !prev.projects[project.id],
												},
											}))
										}
									/>
								)
						)}
				</div>

				<OutputClassRenderer
					outputType='gigs'
					label='Performances archive'
					outputs={outputs.gigs}
					isShown={showOutputs.gigs}
					onToggle={() =>
						setShowOutputs((prev) => ({
							...prev,
							gigs: !prev.gigs,
						}))
					}
				/>

				{(showOutputs.gigs || Object.values(showOutputs.projects).some(Boolean)) && (
					<span
						className='h-red clickable collapse-all'
						onClick={() =>
							setShowOutputs((prev) => ({
								gigs: false,
								projects: Object.keys(prev.projects).reduce((acc, key) => {
									acc[key] = false
									return acc
								}, {} as Record<string, boolean>),
							}))
						}
					>
						[-] collapse all [-]
					</span>
				)}
			</div>
			<footer>
				<img src='/gifs/under-construction/writing.gif' alt='under construction writing gif' />
				{/* <img src='/gifs/under-construction/pikachu.gif' alt='under construction pikachu gif' /> */}
				{/* <img src='/gifs/under-construction/person.gif' alt='under construction person gif' />
				<img src='/gifs/under-construction/en-construction.gif' alt='under construction "en construction" gif' />
				<img src='/gifs/under-construction/fire.gif' alt='under construction "fire" gif' />
				<img src='/gifs/under-construction/spin.gif' alt='under construction spin gif' /> */}
			</footer>
		</>
	)
}
