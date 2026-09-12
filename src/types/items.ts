interface BaseItem {
	id: string
	url: string
	date: string
	description: string
}

export interface ResearchOutputItemProps extends BaseItem {
	authors: string
	title: string
	venue: string
	isNew: boolean
}

export interface AcademicServiceItemProps extends BaseItem {
	venue: string
	track: string
	type: string
}

export interface TeachingItemProps extends BaseItem {
	role: string
	module: string
	program: string
	institution: string
}

export interface GigItemProps extends BaseItem {}

export interface AwardItemProps extends BaseItem {}

export interface ArbitraryItemProps extends BaseItem {
	venue: string
	links: { url: string; linkName: string }[]
}

export interface ProjectItemProps extends BaseItem {
	title: string
	shortDescription: string
	image: string
	shownAt: { venue: string; date: string; url: string }[]
	links: { url: string; linkName: string }[]
	videos: string[]
	resetPositions: boolean
	zIndexProps?: ZIndexProps
}

export interface ProjectDetailsProps {
	shownAt: { venue: string; date: string; url: string }[]
	links: { url: string; linkName: string }[]
	videos: string[]
	isMobile: boolean
}

export interface OutputClassRendererProps {
	outputType: 'publications' | 'workshops' | 'talks' | 'academic-service' | 'teaching' | 'dissemination' | 'gigs' | 'awards' | 'projects'
	label: string
	outputs: AnyItemProps[]
	isShown: boolean
	onToggle?: () => void
	isFrozen: boolean
	resetPositions?: boolean
	zIndexProps?: [Record<string, number>, React.Dispatch<React.SetStateAction<Record<string, number>>>]
}

export type AcademicServiceType = 'conference-peer-review' | 'conference-chair' | 'other' | 'journal-peer-review'


export type ZIndexProps = [Record<string, number>, React.Dispatch<React.SetStateAction<Record<string, number>>>]

export type AnyItemProps = ResearchOutputItemProps | AcademicServiceItemProps | TeachingItemProps | GigItemProps | AwardItemProps | ArbitraryItemProps | ProjectItemProps
