import { AcademicServiceItemProps, ArbitraryItemProps, GrantItemProps, ProjectItemProps, ResearchOutputItemProps, TeachingItemProps } from '../../types/items'
import { ResearchOutputItem, AcademicServiceItem, TeachingItem, ArbitraryItem, GrantItem, ProjectItem } from './Items'
import { OutputClassRendererProps } from '../../types/items'

export const OutputClassRenderer: React.FC<OutputClassRendererProps> = ({ outputType, label, outputs, isShown, onToggle, isFrozen, resetPositions, zIndexProps }) => (
	<div className={'output-class' + (isShown ? ' expanded' : '') + (isFrozen ? ' frozen' : '')}>
		{outputType !== 'projects' ? (
			<>
				<span className={(outputType == 'gigs' ? 'h-orange' : 'h-yellow') + ' clickable' + (isFrozen ? ' frozen' : '')} onClick={onToggle}>
					{' '}
					{label} {isShown ? '[-]' : '[+]'}{' '}
				</span>
				<ul>
					{isShown && ['publications', 'workshops', 'talks'].includes(outputType) && outputs.map((out) => <ResearchOutputItem key={out.id} {...(out as ResearchOutputItemProps)} />)}
					{isShown && outputType === 'academic-service' && outputs.map((out) => <AcademicServiceItem key={out.id} {...(out as AcademicServiceItemProps)} />)}
					{isShown && outputType === 'dissemination' && outputs.map((out) => <ArbitraryItem key={out.id} {...(out as ArbitraryItemProps)} />)}
					{isShown && outputType === 'teaching' && outputs.map((out) => <TeachingItem key={out.id} {...(out as TeachingItemProps)} />)}
					{isShown && outputType === 'grants' && outputs.map((out) => <GrantItem key={out.id} {...(out as GrantItemProps)} />)}
					{isShown && outputType === 'gigs' && outputs.map((out) => <ArbitraryItem key={out.id} {...(out as ArbitraryItemProps)} />)}
				</ul>
			</>
		) : outputs[0] ? (
			<ProjectItem key={outputs[0].id} {...(outputs[0] as ProjectItemProps)} resetPositions={resetPositions} zIndexProps={zIndexProps} />
		) : null}
	</div>
)
