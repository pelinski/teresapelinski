import React, { JSX } from 'react'

export const About: React.FC<{ scrollHandler: (scrollTo: string) => () => void }> = ({ scrollHandler }): JSX.Element => (
	<>
		<span className='screen-title'>🙋🏻‍♀️ About me</span>
		<div>
			<br />
			Hi! Welcome to my personal website. My name is Teresa Pelinski and I'm currently writing up my PhD thesis in music technology at the{' '}
			<a href='https://instrumentslab.org/'>Augmented Instruments Lab</a>, based between the <a href='https://www.c4dm.eecs.qmul.ac.uk/'>Centre for Digital Music</a> (Queen Mary University of
			London) and the <a href='https://www.imperial.ac.uk/design-engineering/'>Dyson School of Design Engineering</a> (Imperial College London). I also occasionally teach at the{' '}
			<a href='https://www.arts.ac.uk/creative-computing-institute'>Creative Computing Institute</a> (University of the Arts London). I have been lucky to have been supervised by{' '}
			<a href='https://andrewmcpherson.org/bio'>Prof Andrew McPherson</a> (Imperial College London) and <a href='https://researchers.arts.ac.uk/1594-rebecca-fiebrink'>Prof Rebecca Fiebrink</a>{' '}
			(University of the Arts London).
			<br /> <br />
			My research interests are in critical technology studies, new interfaces for musical expression and practice-based research. (Is that a good summary? I would call it "critical music
			technology studies mixed with practice research" but I'm not sure anyone else would be calling it that!) In my thesis I've done some technical work in the area of embedded AI for musical
			performance and instrument design, but also a lot of writing on how we can approach technology development (particularly in creative contexts, e.g. new instrument making) from a more
			critical and reflective perspective. You can check out my research <a onClick={scrollHandler('research')}>here</a>.
			<br />
			<br /> Before joining my PhD programme (CDT in AI and Music), I got a Bachelor degree in Physics (Universidad Autónoma de Madrid) and a Master's in Sound and Music Computing (Music
			Technology Group, Universitat Pompeu Fabra). In my spare time I mostly work on my Raspberry Pi self-hosted servers, and I also make candles and play football.
			<br />
			<br />
			my{' '}
			<a className='h-red' href='/documents/pelinski-cv.pdf'>
				cv
			</a>{' '}
			is
			<a className='h-red' href='/documents/pelinski-cv.pdf'>
				here
			</a>
		</div>
	</>
)
