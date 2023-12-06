import React from 'react'

export const Aboutme: React.FC<{ scrollHandler: (scrollTo: string) => () => void }> = ({ scrollHandler }): JSX.Element => (
	<>
		<span className='screen-title'>about-me</span>
		<div>
			...........hi i'm <span className='h-red'>teresa pelinski</span> and this is my website......... some info about me:
			<br />
			<br />
			I'm currently a{' '}
			<a onClick={scrollHandler('phd')} className='h-yellow'>
				PhD researcher
			</a>{' '}
			at the <a href='https://instrumentslab.org/'>Augmented Instruments Lab</a> at the Centre for Digital Music, based in Queen Mary University of London. In collaboration with{' '}
			<a href='https://bela.io/'>Bela</a> and under the supervision of <a href='https://andrewmcpherson.org/'>Prof. Andrew McPherson</a> (Imperial College London) and{' '}
			<a href='https://researchers.arts.ac.uk/1594-rebecca-fiebrink'>Prof. Rebecca Fiebrink</a>
			(University of the Arts London), I'm working on tools for prototyping with machine learning models on embedded systems in the context of musical practice. I'm also interested in doing
			practice research on my technical work (practice?).
			<br />
			<br />
			Previously, I got my BSc Physics from the Universidad Autónoma de Madrid. I learned lots of maths and a bit of code, and I became interested in sound. I spent a year at RWTH Aachen
			University, where I took some courses on acoustics and wrote my bachelor thesis on acoustic virtual reality at the{' '}
			<a href='https://www.akustik.rwth-aachen.de/cms/~dwma/Technische-Akustik/lidx/1/'>IHTA</a>. Afterwards I did my{' '}
			<a onClick={scrollHandler('master')} className='h-yellow'>
				Master's
			</a>{' '}
			in Sound and Music Computing (MSc) at the <a href='https://www.upf.edu/web/mtg/'>Music Technology Group</a>, based in Universitat Pompeu Fabra in Barcelona, and wrote my master thesis on
			using deep learning to generate drum loops.
			<br />
			<br />
			Besides my main activity, which is sitting on my desk doing my PhD, I make{' '}
			<a onClick={scrollHandler('sound')} className='h-yellow'>
				music
			</a>{' '}
			and in an occasion I even did sound art. In late 2021, I did an artistic residency at the <a href='https://www.upf.edu/web/phonos'>Phonos Foundation</a> (Barcelona). I'm currently doing a
			radio residency at <a href='https://www.noodsradio.com/'>Noods</a> radio with <a href='https://www.noodsradio.com/residents/officium'>Officium</a>, a sacred choral music show, and I also
			play the Microkorg at <a href='https://www.instagram.com/muerte.mp3/'>Muerte En El Parque</a> and livecode at{' '}
			<a href='https://www.dropbox.com/scl/fi/9mr518clduo2gfzahe5zu/seisix6-nov-2023.mp4?rlkey=lxa8hb4jak30y133h4zrrf4b8&dl=0'>seisix6</a>. Besides, I like spending time on my computer, books,
			modular synths, thinking about technology, tape & film, learning german, and coding and designing websites like this one.
		</div>
	</>
)
