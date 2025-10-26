import React from 'react'
import { ResearchOutputItem, AcademicServiceItem, TeachingItem, ArbitraryItem, GrantItem, ProjectItem } from './Items'

interface OutputClassRendererProps {
	outputType: 'publications' | 'workshops' | 'talks' | 'academic-service' | 'teaching' | 'dissemination' | 'gigs' | 'grants' | 'projects'
	label: string
	outputs: []
	isShown: boolean
	onToggle: () => void
	isFrozen?: boolean
}

export const OutputClassRenderer: React.FC<OutputClassRendererProps> = ({ outputType, label, outputs, isShown, onToggle, isFrozen, className = '' }) => (
	<div className={'output-class' + (isShown ? ' expanded' : '') + (isFrozen ? ' frozen' : '') + ' ' + className}>
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
				{' '}
				<div className='project-item' key={outputs[0]?.id}>
					{outputs[0].image && (
						<div className='project-image-container'>
							<img src={(outputs[0] as any).image} alt={(outputs[0] as any).title} />
							<div className='sparkle-overlay' />
						</div>
					)}
					<span className='project-caption h-yellow clickable' onClick={onToggle}>
						{label} {outputs[0].shortDescription && '--' + outputs[0].shortDescription} {isShown ? '[-]' : '[+]'} <br />
					</span>
					{isShown && outputType === 'projects' && outputs.map((out) => <ProjectItem key={out.id} {...out} />)}
				</div>
			</>
		)}
	</div>
)
