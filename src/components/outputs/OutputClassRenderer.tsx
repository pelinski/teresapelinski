import { AcademicServiceItemProps, ArbitraryItemProps, AwardItemProps, ProjectItemProps, ResearchOutputItemProps, TeachingItemProps } from '../../types/items'
import { ResearchOutputItem, AcademicServiceItem, TeachingItem, ArbitraryItem, AwardItem, ProjectItem } from './Items'
import { OutputClassRendererProps } from '../../types/items'

export const OutputClassRenderer: React.FC<OutputClassRendererProps> = ({ outputType, label, outputs, isShown, onToggle, isFrozen, resetPositions, zIndexProps }) => {
	return (
		<div className={'output-class' + (isShown ? ' expanded' : '') + (isFrozen ? ' frozen' : '')}>
			{outputType !== 'projects' ? (
				<>
					<span className={(outputType == 'gigs' ? 'h-orange' : 'h-yellow') + ' clickable' + (isFrozen ? ' frozen' : '')} onClick={onToggle}>
						{' '}
						{label} {isShown ? '[-]' : '[+]'}{' '}
					</span>
					<ul>
						{isShown && ['publications', 'workshops', 'talks'].includes(outputType) && outputs.map((out) => <ResearchOutputItem key={out.id} {...(out as ResearchOutputItemProps)} />)}

						{isShown &&
							outputType === 'academic-service' &&
							Object.entries(outputs as unknown as Record<string, AcademicServiceItemProps[]>).map(([type, items]) => (
								<li key={type} className='academic-service-type-group'>
									<h4 className='academic-service-type-heading'>{type.replace(/-/g, ' ').toUpperCase()}</h4>
									<ul className='academic-service-list'>
										{items.map((out) => (
											<AcademicServiceItem key={out.id} {...out} />
										))}
									</ul>
								</li>
							))}
						{isShown && outputType === 'dissemination' && outputs.map((out) => <ArbitraryItem key={out.id} {...(out as ArbitraryItemProps)} />)}
						{isShown && outputType === 'teaching' && outputs.map((out) => <TeachingItem key={out.id} {...(out as TeachingItemProps)} />)}
						{isShown && outputType === 'awards' && outputs.map((out) => <AwardItem key={out.id} {...(out as AwardItemProps)} />)}
						{isShown && outputType === 'gigs' && outputs.map((out) => <ArbitraryItem key={out.id} {...(out as ArbitraryItemProps)} />)}
					</ul>
				</>
			) : outputs[0] ? (
				<ProjectItem key={outputs[0].id} {...(outputs[0] as ProjectItemProps)} resetPositions={resetPositions ?? false} zIndexProps={zIndexProps!} />
			) : null}
		</div>
	)
}
