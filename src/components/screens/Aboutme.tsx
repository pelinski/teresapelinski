import React from 'react'
import { Screen } from '../Screen'

export const AboutmeScreen: React.FC<{ scrollHandler: (scrollTo: string) => () => void }> = ({ scrollHandler }): JSX.Element => (
	<Screen id='about-me'>
		<span className='screen-title'>about-me</span>
		<div>
			hi i'm <span className='h-red'>teresa pelinski ramos</span> and this is my website. both pelinski and ramos are my last names, in spain it is common to have both your dad's and your mum's
			last names. <br />
			i'm currently a{' '}
			<a onClick={scrollHandler('phd')} className='h-yellow'>
				phd researcher
			</a>{' '}
			at the augmented instruments lab at queen mary university of london. my topic is on using ai to capture gesture in digital musical instruments. before, i did my undergrad in physics at the
			universidad autónoma de madrid. i learned lots of maths and a bit of code, and i became interested in sound. i spent a year at rwth aachen university, where i took some courses on
			acoustics and wrote my bachelor thesis on acoustic virtual reality at the <a href='https://www.akustik.rwth-aachen.de/cms/~dwma/Technische-Akustik/lidx/1/'>ihta</a>. afterwards i did my{' '}
			<a onClick={scrollHandler('master')} className='h-yellow'>
				master
			</a>{' '}
			in sound and music computing at the pompeu fabra university in barcelona, and wrote my master thesis on using deep learning to generate drum loops.
			<br />
			besides my main activity, which is sitting on my desk doing my phd, i like books, thinking about technology, speaking german, sound art, tape and film, and coding and designing cool
			websites like this one. i recently did an{' '}
			<a onClick={scrollHandler('art')} className='h-yellow'>
				artistic residency
			</a>{' '}
			at the phonos foundation where i thought a lot about the body in artificially generated voices and generated a voice from an archive of interviews.
		</div>
	</Screen>
)
