import React from 'react'

export const Aboutme: React.FC<{ scrollHandler: (scrollTo: string) => () => void }> = ({ scrollHandler }): JSX.Element => (
	<>
		<span className='screen-title'>about-me</span>
		<div>
			{/* ...........hi i'm <span className='h-red'>teresa pelinski</span> and this is my website......... some info about me:
			<br /> */}
			I'm currently a{' '}
			<a onClick={scrollHandler('phd')} className='h-yellow'>
				PhD student
			</a>{' '}
			at the <a href='https://instrumentslab.org/'>Augmented Instruments Lab</a> at the Centre for Digital Music, based at Queen Mary University of London. My PhD is funded under the UKRI AI and
			Music CDT. In collaboration with <a href='https://bela.io/'>Bela</a> and under the supervision of <a href='https://andrewmcpherson.org/'>Prof. Andrew McPherson</a> (Imperial College
			London) and <a href='https://researchers.arts.ac.uk/1594-rebecca-fiebrink'>Prof. Rebecca Fiebrink</a>
			(University of the Arts London), I'm working on tools for prototyping with machine learning models on embedded systems in the context of musical instrument design. I'm also interested in
			practice research. Due to my supervisor's affiliations I also have a visiting researcher status at Imperial College London and University of the Arts London.
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
			Besides my main activity, which is sitting on my desk doing my PhD, I am involved in very-casual{' '}
			<a onClick={scrollHandler('sound')} className='h-yellow'>
				music and sound
			</a>{' '}
			making. In 2021, I did an artistic residency at the <a href='https://www.upf.edu/web/phonos'>Phonos Foundation</a> (Barcelona). During 2023, I did a radio residency at{' '}
			<a href='https://www.noodsradio.com/'>Noods</a> radio with <a href='https://www.noodsradio.com/residents/officium'>Officium</a>, a sacred choral music show. In 2023, I was also part of the
			Goldsmiths Laptop Ensemble, played the Microkorg at <a href='https://www.instagram.com/muerte.mp3/'>Muerte En El Parque</a> and livecoded at{' '}
			<a href='https://www.dropbox.com/scl/fi/9mr518clduo2gfzahe5zu/seisix6-nov-2023.mp4?rlkey=lxa8hb4jak30y133h4zrrf4b8&dl=0'>seisix6</a>. In 2024, I was part of the Goldsmiths Non Input
			Ensemble, and we released some tracks <a href='https://goldsmithsems.bandcamp.com/album/circuits-1'>here</a>. Besides, I like spending time on my computer, books, videogames, modular
			synths, thinking about technology, tape & film, learning german, and coding and designing websites like this one.
			<br />
			<br />
			<br />
			my{' '}
			<a className='h-red' href='/documents/pelinski-cv-2024-2.pdf'>
				cv
			</a>{' '}
			is <br />
			<a className='h-red' href='/documents/pelinski-cv-2024-2.pdf'>
				here
			</a>
		</div>
	</>
)
