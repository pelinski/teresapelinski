interface BaseItem {
	id: string
	url: string
}

export interface ResearchOutputItemProps extends BaseItem {
	authors: string
	date: string
	title: string
	venue: string
	isNew: boolean
}

export interface AcademicServiceItemProps extends BaseItem {
	date: string
	description: string
	venue: string
	track: string
	type: string
}

export interface TeachingItemProps extends BaseItem {
	date: string
	role: string
	module: string
	program: string
	institution: string
}

export interface GigItemProps extends BaseItem {
	date: string
	description: string
}

export interface GrantItemProps extends BaseItem {
	date: string
	title: string
	institution: string
	description: string
}

export interface ArbitraryItemProps extends BaseItem {
	date: string
	description: string
	venue: string
	links: { url: string; linkName: string }[]
}

export interface ProjectItemProps extends BaseItem {
	date: string
	title: string
	shortDescription: string
	description: string
	image: string
	shownAt: { venue: string; date: string; url: string }[]
	links: { url: string; linkName: string }[]
	videos: string[]
	resetPositions: boolean
	zIndexProps?: ZIndexProps
}

export interface ProjectDetailsProps {
	date: string
	description: string
	shownAt: { venue: string; date: string; url: string }[]
	links: { url: string; linkName: string }[]
	videos: string[]
	isMobile: boolean
}

export interface OutputClassRendererProps {
	outputType: 'publications' | 'workshops' | 'talks' | 'academic-service' | 'teaching' | 'dissemination' | 'gigs' | 'grants' | 'projects'
	label: string
	outputs: AnyItemProps[]
	isShown: boolean
	onToggle?: () => void
	isFrozen: boolean
	resetPositions?: boolean
	zIndexProps?: [Record<string, number>, React.Dispatch<React.SetStateAction<Record<string, number>>>]
}

export type ZIndexProps = [Record<string, number>, React.Dispatch<React.SetStateAction<Record<string, number>>>]

export type AnyItemProps = ResearchOutputItemProps | AcademicServiceItemProps | TeachingItemProps | GigItemProps | GrantItemProps | ArbitraryItemProps | ProjectItemProps
