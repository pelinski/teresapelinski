import React, { JSX } from 'react'
export const About: React.FC<{ scrollHandler: (scrollTo: string) => () => void; isFrozen: boolean }> = ({ scrollHandler, isFrozen }): JSX.Element => (
	<>
		<span className='screen-title'>🙋🏻‍♀️ About me</span>
		<div>
			<br />
			Hi! Welcome to my personal website. My name is Teresa Pelinski and I'm currently writing up my{' '}
			<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='/research'>
				PhD thesis
			</a>{' '}
			in music technology at the{' '}
			<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://instrumentslab.org/'>
				Augmented Instruments Lab
			</a>
			, based between the <a href='https://www.c4dm.eecs.qmul.ac.uk/'>Centre for Digital Music</a> (Queen Mary University of London) and the{' '}
			<a href='https://www.imperial.ac.uk/design-engineering/'>Dyson School of Design Engineering</a> (Imperial College London). I'm also a part-time{' '}
			<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://musicairesearch.wordpress.com/'>
				Research Fellow
			</a>{' '}
			at the <a href='https://musicairesearch.wordpress.com/'>Music & Artificial Intelligence: Building Critical Interdisciplinary Studies</a> (MusAI) ERC project, led by{' '}
			<a href='https://profiles.ucl.ac.uk/15934-georgina-born'>Prof Georgina Born</a>. I also occasionally <span className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')}>teach</span> at the{' '}
			<a href='https://www.arts.ac.uk/creative-computing-institute'>Creative Computing Institute</a> (University of the Arts London). During my PhD I have been lucky to have been supervised by{' '}
			<a href='https://andrewmcpherson.org/bio'>Prof Andrew McPherson</a> (Imperial College London) and <a href='https://researchers.arts.ac.uk/1594-rebecca-fiebrink'>Prof Rebecca Fiebrink</a>{' '}
			(University of the Arts London).
			<br /> <br />
			My{' '}
			<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='/research'>
				research interests
			</a>{' '}
			are in critical technology studies, new interfaces for musical expression and practice-based research. (Is that a good summary? I would call it "critical music technology studies mixed
			with practice research" but I'm not sure anyone else would be calling it that!) In my thesis I've done some technical work in the area of embedded AI for musical performance and instrument
			design, but also a lot of writing on how we can approach technology development (particularly in creative contexts, e.g. new instrument making) from a more critical and reflective
			perspective. You can check out my research <a onClick={scrollHandler('research')}>here</a>.
			<br />
			<br /> Before joining my PhD programme (CDT in AI and Music), I got a Bachelor degree in{' '}
			<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://www.uam.es/uam/en/fisica'>
				Physics
			</a>{' '}
			(Universidad Autónoma de Madrid) and a Master's in{' '}
			<a className={'h-yellow bounce' + (isFrozen ? ' frozen' : '')} href='https://www.upf.edu/web/smc'>
				Sound and Music Computing
			</a>{' '}
			(Music Technology Group, Universitat Pompeu Fabra). In my spare time I mostly work on my Raspberry Pi self-hosted servers, and I also make candles and play football.
			<br />
			<br />
			my{' '}
			<a className={'h-red bounce' + (isFrozen ? ' frozen' : '')} href='/documents/pelinski-cv.pdf'>
				cv
			</a>{' '}
			is
			<a className={'h-red bounce' + (isFrozen ? ' frozen' : '')} href='/documents/pelinski-cv.pdf'>
				here
			</a>
		</div>
	</>
)
