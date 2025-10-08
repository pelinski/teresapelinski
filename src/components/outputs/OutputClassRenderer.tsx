import React from 'react'
import { ResearchOutputItem, AcademicServiceItem, TeachingItem, ArbitraryItem } from './Items'

interface OutputClassRendererProps {
	outputType: 'publications' | 'workshops' | 'talks' | 'academic-service' | 'teaching'
	label: string
	outputs: []
	isShown: boolean
	onToggle: () => void
	isFrozen?: boolean
}

export const OutputClassRenderer: React.FC<OutputClassRendererProps> = ({ outputType, label, outputs, isShown, onToggle, isFrozen }) => (
	<div className={'output-class' + (isShown ? ' expanded' : '') + (isFrozen ? ' frozen' : '')}>
		<span className='h-yellow clickable' onClick={onToggle}>
			{label} {isShown ? '[-]' : '[+]'}
		</span>

		<ul>
			{isShown && ['publications', 'workshops', 'talks'].includes(outputType) && outputs.map((out) => <ResearchOutputItem key={out.id} {...out} />)}

			{isShown && outputType === 'academic-service' && outputs.map((out) => <AcademicServiceItem key={out.id} {...out} />)}

			{isShown && outputType === 'dissemination' && outputs.map((out) => <ArbitraryItem key={out.id} {...out} />)}

			{isShown && outputType === 'teaching' && outputs.map((out) => <TeachingItem key={out.id} {...out} />)}

			{isShown && outputType === 'gigs' && outputs.map((out) => <ArbitraryItem key={out.id} {...out} />)}
		</ul>
	</div>
)
