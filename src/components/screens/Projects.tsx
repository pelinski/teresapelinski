import { useState, useEffect } from 'react'
import { OutputClassRenderer } from '../outputs/OutputClassRenderer'
import { ProjectItemProps } from '../../types/items'

interface zIndexDic {
	[key: string]: number
}

export const Projects: React.FC<{ isFrozen: boolean }> = ({ isFrozen }) => {
	// data
	const [projects, setProjects] = useState<ProjectItemProps[]>([])
	const [gigs, setGigs] = useState<ProjectItemProps[]>([])

	// dynamics
	const [showGigs, setShowGigs] = useState<boolean>(false)
	// const [selectedFilters, setSelectedFilters] = useState<string[]>([])
	// const [availableFilters, setAvailableFilters] = useState<string[]>([])
	const [resetPositions, setResetPositions] = useState<boolean>(false)
	const [zIndexDic, setZIndexDic] = useState<zIndexDic>({})

	useEffect(() => {
		let isMounted = true
		Promise.all([fetch('/content/items/gigs.json').then((res) => res.json()), fetch('/content/items/projects.json').then((res) => res.json())])
			.then(([gigs, projects]) => {
				if (isMounted) {
					setGigs(gigs)
					setProjects(projects)
					// Get available filters
					// const filters = Array.from(new Set(projects.flatMap((proj: Item) => proj.filters))).sort()
					// setAvailableFilters(filters)
					// setSelectedFilters(filters) // Select all on first load
					// Initialize zIndexDic
					const initialZIndexDic: zIndexDic = {}
					projects.forEach((project: ProjectItemProps) => {
						initialZIndexDic[project.id] = 1
					})
					setZIndexDic(initialZIndexDic)
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
				<span className='screen-title'> 🔊 Project repository 🚧 </span>

				{/* <div className='filters'>
					{availableFilters.map((filter) => (
						<span
							key={filter}
							className={'filter-chip clickable ' + (selectedFilters.includes(filter) ? 'selected' : '')}
							onClick={() => setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))}
						>
							{filter}
						</span>
					))}
				</div> */}

				<span className='filter-chip clickable h-red reset-pos' onClick={() => setResetPositions(!resetPositions)} style={{ marginLeft: '1rem' }}>
					Reset positions
				</span>
			</span>
			<div className='project-repo'>
				<div className='projects-list'>
					{projects.length > 0 &&
						projects.map((project) => (
							// selectedFilters.some((filter) => project.filters.includes(filter)) &&
							<OutputClassRenderer
								key={project.id}
								outputType='projects'
								label={project.title}
								outputs={[project]}
								isShown={false}
								isFrozen={isFrozen}
								resetPositions={resetPositions}
								zIndexProps={[zIndexDic, setZIndexDic]}
							/>
						))}
				</div>
				<div className='gigs'>
					<OutputClassRenderer outputType='gigs' label='Performances archive' outputs={gigs} isShown={showGigs} onToggle={() => setShowGigs(!showGigs)} isFrozen={isFrozen} />
					<br />
				</div>
			</div>
			<footer>
				<img src='/gifs/under-construction/writing.gif' alt='under construction writing gif' />
			</footer>
		</>
	)
}
