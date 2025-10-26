import React, { useState, useEffect, JSX } from 'react'
import { OutputClassRenderer } from '../outputs/OutputClassRenderer'

interface Item {
	id: string
	authors: string
	date: string | number
	title: string
	venue: string
	type: string
	url: string
	module?: string
	program?: string
	institution?: string
	role?: string
	track?: string
	description?: string
	isNew?: boolean
	tags?: string[]
}

export const Research: React.FC<{ isFrozen: boolean }> = ({ isFrozen }) => {
	const [outputs, setOutputs] = useState<{
		publications: Item[]
		workshops: Item[]
		talks: Item[]
		academicService: Item[]
		dissemination: Item[]
		teaching: Item[]
	}>({
		publications: [],
		workshops: [],
		talks: [],
		academicService: [],
		dissemination: [],
		teaching: [],
	})

	const [showOutputs, setShowOutputs] = useState<{ publications: boolean; workshops: boolean; talks: boolean; academicService: boolean; dissemination: boolean; teaching: boolean }>({
		publications: false,
		workshops: false,
		talks: false,
		academicService: false,
		dissemination: false,
		teaching: false,
	})

	useEffect(() => {
		let isMounted = true
		Promise.all([
			fetch('/content/items/publications.json').then((res) => res.json()),
			fetch('/content/items/workshops.json').then((res) => res.json()),
			fetch('/content/items/talks.json').then((res) => res.json()),
			fetch('/content/items/academic-service.json').then((res) => res.json()),
			fetch('/content/items/dissemination.json').then((res) => res.json()),
			fetch('/content/items/teaching.json').then((res) => res.json()),
			fetch('/content/items/grants.json').then((res) => res.json()),
		])
			.then(([pubs, works, talks, service, dissemination, teaching, grants]) => {
				if (isMounted) {
					setOutputs({
						publications: pubs,
						workshops: works,
						talks: talks,
						academicService: service,
						dissemination: dissemination,
						teaching: teaching,
						grants: grants,
					})
				}
			})
			.catch((err) => console.error('Error loading research outputs:', err))
		return () => {
			isMounted = false
		}
	}, [])

	return (
		<>
			<span className='screen-title'>📚 Research</span>
			<div className='research-text'>
				<br /> I am currently writing up my PhD thesis, which I have done at the <a href='https://instrumentslab.org/'>Augmented Instruments Lab</a> and the{' '}
				<a href='https://c4dm.eecs.qmul.ac.uk/'>Centre for Digital Music (C4DM)</a> at <a href='https://www.qmul.ac.uk/'>Queen Mary University of London</a>. My research area could be
				described as <a className={'h-orange bounce' + (isFrozen ? ' frozen' : '')}>"critical music technology studies"</a>. In the first half of my PhD, I worked on technical topics of design
				and implementation of new musical instruments and interfaces, in particular with embedded systems and light AI models. In this context, I developed{' '}
				<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://github.com/BelaPlatform/pybela'>
					pybela
				</a>
				, a Python library for interfacing physical and scientific computing, which I developed as part of an internship at{' '}
				<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://bela.io/'>
					Bela
				</a>{' '}
				(the industrial sponsor of my PhD!).
				<br />
				<br /> My thesis then took a critical turn, incorporating a science and technology studies angle as well as artistic research methods to better understand the mutual mediations between
				humans and technology in creative-technical processes; in particular, when designing technologies for making sound. I developed the{' '}
				<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://doi.org/10.1080/09298215.2024.2442348'>
					Technical Practice Research
				</a>{' '}
				framework which has been incorporated by fellow PhD students at institutions such as MIT Media Lab, Northumbria University as well as colleagues at the Augmented Instruments Lab and
				the Creative Computing Institute.
				<br />
				<br />
				Before my PhD, I also did graduate research as part of my Master's thesis in{' '}
				<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='/documents/2023-nime-cr-infilling.pdf'>
					generative AI for music
				</a>{' '}
				using Transformers for drum beat generation; this work was done at the{' '}
				<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://www.upf.edu/web/mtg'>
					Music Technology Group{' '}
				</a>{' '}
				(Universitat Pompeu Fabra, Barcelona). I also spent a year at the <a href='https://www.rwth-aachen.de/go/id/a/?lidx=1'>RWTH Aachen</a> as part of an undergraduate exchange, where I
				wrote my Bachelor's thesis at the{' '}
				<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://www.akustik.rwth-aachen.de/go/id/dwma/?lidx=1'>
					Institute for Hearing Technology and Acoustics
				</a>{' '}
				on binaural computational acoustical simulations.
				{/* <br />
				In September 2021, I started my PhD in Artificial Intelligence and Music (<a href='https://www.aim.qmul.ac.uk/'>AIM</a> CDT) at the Centre for Digital Music (
				<a href='http://c4dm.eecs.qmul.ac.uk/'>C4DM</a>) at Queen Mary University of London (<a href='https://www.qmul.ac.uk/'>QMUL</a>), where I am also part of the{' '}
				<a href='http://instrumentslab.org/index.html'>Augmented Instruments Lab</a>. My research is supervised by <a href='http://andrewmcpherson.org/bio'>Prof. Andrew McPherson</a> (Imperial
				College London) and <a href='https://researchers.arts.ac.uk/1594-rebecca-fiebrink/'>Prof. Rebecca Fiebrink</a> (University of the Arts London), and supported by{' '}
				<a href='https://bela.io/'>Bela</a> and <a href='https://www.ukri.org/'>UKRI</a>. In 2023-2024 I was also granted an Enrichment Scheme Placement award at the{' '}
				<a href='https://www.turing.ac.uk/work-turing/studentships/enrichment'>Alan Turing Institute</a>.
				<br />
				<br />
				Before that I did research in SMC, and undergraduate work in HRTFs */}
			</div>
			<br />
			<br />

			<div className='outputs'>
				<OutputClassRenderer
					outputType='publications'
					label='📑 Publications'
					outputs={outputs.publications}
					isShown={showOutputs.publications}
					onToggle={() =>
						setShowOutputs({
							...showOutputs,
							publications: !showOutputs.publications,
						})
					}
					isFrozen={isFrozen}
				/>
				<OutputClassRenderer
					outputType='talks'
					label='🎤 Talks'
					outputs={outputs.talks}
					isShown={showOutputs.talks}
					onToggle={() =>
						setShowOutputs({
							...showOutputs,
							talks: !showOutputs.talks,
						})
					}
					isFrozen={isFrozen}
				/>
				<OutputClassRenderer
					outputType='workshops'
					label='🪢 Workshops'
					outputs={outputs.workshops}
					isShown={showOutputs.workshops}
					onToggle={() =>
						setShowOutputs({
							...showOutputs,
							workshops: !showOutputs.workshops,
						})
					}
					isFrozen={isFrozen}
				/>
				<OutputClassRenderer
					outputType='academic-service'
					label='🫡 Academic Service'
					outputs={outputs.academicService}
					isShown={showOutputs.academicService}
					onToggle={() =>
						setShowOutputs({
							...showOutputs,
							academicService: !showOutputs.academicService,
						})
					}
					isFrozen={isFrozen}
				/>
				<OutputClassRenderer
					outputType='dissemination'
					label='💬 Dissemination'
					outputs={outputs.dissemination}
					isShown={showOutputs.dissemination}
					onToggle={() =>
						setShowOutputs({
							...showOutputs,
							dissemination: !showOutputs.dissemination,
						})
					}
					isFrozen={isFrozen}
				/>
				<OutputClassRenderer
					outputType='teaching'
					label='👩🏻‍🏫 Teaching'
					outputs={outputs.teaching}
					isShown={showOutputs.teaching}
					onToggle={() =>
						setShowOutputs({
							...showOutputs,
							teaching: !showOutputs.teaching,
						})
					}
					isFrozen={isFrozen}
				/>

				<OutputClassRenderer
					outputType='grants'
					label='💸 Grants'
					outputs={outputs.grants}
					isShown={showOutputs.grants}
					onToggle={() =>
						setShowOutputs({
							...showOutputs,
							grants: !showOutputs.grants,
						})
					}
					isFrozen={isFrozen}
				/>
			</div>
			{Object.values(showOutputs).some(Boolean) && (
				<span
					className='h-red clickable collapse-all'
					onClick={() => setShowOutputs({ publications: false, talks: false, workshops: false, academicService: false, dissemination: false, teaching: false })}
				>
					[-] collapse all [-]
				</span>
			)}
		</>
	)
}
