import React from 'react'
import { ResearchOutputItem, AcademicServiceItem, TeachingItem, ArbitraryItem, GrantItem, ProjectItem } from './Items'

interface OutputClassRendererProps {
	outputType: 'publications' | 'workshops' | 'talks' | 'academic-service' | 'teaching' | 'dissemination' | 'gigs' | 'grants' | 'projects'
	label: string
	outputs: []
	isShown: boolean
	onToggle: () => void
	isFrozen: boolean
	resetPositions?: boolean
	zIndexProps?: [Record<string, number>, React.Dispatch<React.SetStateAction<Record<string, number>>>]
}

export const OutputClassRenderer: React.FC<OutputClassRendererProps> = ({ outputType, label, outputs, isShown, onToggle, isFrozen, resetPositions, zIndexProps }) => (
	<div className={'output-class' + (isShown ? ' expanded' : '') + (isFrozen ? ' frozen' : '')}>
		{outputType !== 'projects' ? (
			<>
				<span className={(outputType == 'gigs' ? 'h-orange' : 'h-yellow') + ' clickable' + (isFrozen ? ' frozen' : '')} onClick={onToggle}>
					{' '}
					{label} {isShown ? '[-]' : '[+]'}{' '}
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
			<ProjectItem key={outputs[0].id} {...outputs[0]} resetPositions={resetPositions} zIndexProps={zIndexProps} />
		)}
	</div>
)
