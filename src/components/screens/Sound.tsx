import React, { useState, useEffect } from 'react'
import { OutputClassRenderer } from '../outputs/OutputClassRenderer'

export const Sound: React.FC = () => {
	const [outputs, setOutputs] = useState<{
		gigs: []
	}>({
		gigs: [],
	})

	const [showOutputs, setShowOutputs] = useState<{ gigs: boolean }>({
		gigs: true,
	})

	useEffect(() => {
		let isMounted = true
		Promise.all([fetch('/content/items/gigs.json').then((res) => res.json())])
			.then(([gigs]) => {
				if (isMounted) {
					setOutputs({
						gigs: gigs,
					})
				}
			})
			.catch((err) => console.error('Error loading sound outputs:', err))
		return () => {
			isMounted = false
		}
	}, [])

	return (
		<>
			<span className='screen-title'> 🔊 sound and music</span>

			<OutputClassRenderer
				outputType='gigs'
				label='gigs / performances'
				outputs={outputs.gigs}
				isShown={showOutputs.gigs}
				onToggle={() =>
					setShowOutputs({
						...showOutputs,
						gigs: !showOutputs.gigs,
					})
				}
			/>

			<div>
				<span className='h-yellow'>2023 --- Noods Radio Residency</span>: <span className='h-red'>Officium</span> --{'>'}{' '}
				<a href='https://www.noodsradio.com/residents/officium'>link to episodes</a> <br /> "Adam Barkley and Teresa Pelinski's Saturday morning service on{' '}
				<a href='https://www.noodsradio.com/residents/officium'>Noods Radio</a>, Officium, spans an all-encompassing range of sacred and devotional musics to ease those aching souls. Expect
				twelfth-century chants, transcendental minimalism and a deep dive into contemporary and classical choral goodness."
			</div>

			<div>
				<span className='h-yellow'>2021 --- Phonos Foundation Residency</span>: <span className='h-red'>no shell, just a voice</span> --{'>'}{' '}
				<a href='https://noshell.teresapelinski.com/'>project website</a> <br />
				In 2021, I did a residency at Phonos Foundation, where I worked on my project <a href='https://noshell.teresapelinski.com/'>'no shell, just a voice'</a>. The sound pieces were released
				in the Phonos netlabel (<a href='https://phonosbcn.bandcamp.com/album/no-shell-just-a-voice'>Bandcamp</a>) and on a <a href='https://noshell.teresapelinski.com/'>webzine</a>. 'No
				Shell, Just a Voice' is a project that reflects on artificially generated voices that appear to have a _ghost_ but have no shell, no body.
				{/* <div>
				I generated the artificial voice in 'No Shell, Just a Voice' using a couple of hours of my dad's field recordings and WaveNet, a neural audio synthesis deep learning model. My dad,
				Ramón Pelinski, was an ethnomusicologist, and he studied the sword dance at La Todolella, a small village close to Castellón, in eastern Spain. In these tapes, recorded during the 90s,
				he interviews the old and the young who inhabit La Todolella, and asks them about how their lives have changed over time and how cultural identity is represented through music. I found
				these tapes in a wooden mountain of boxes in his office. My dad does not live anymore, and I wonder if these tapes will ever be listened to again. Will someone just throw them away
				when I die? In the process of digitalizing the recordings, I listened Todolellanos' voices and a voice I had long not heard, my dad's. This project is about many things, but mainly
				about listening. I feel the warmth of my dad's voice, and recognize some of the Todolellanos' voices – I met some of them when I was a kid. And I wonder who am I listening to when I
				listen to the artificial voice. Do voices always point to someone? Can they point to more than one person? I discuss the question of the body in artificial voices considering Mladen
				Dolar, Michel Chion and Pierre Schaeffer's accounts on the voice in the webzine accompanying this work (<a href='https://noshell.teresapelinski.com/'>NoShell.TeresaPelinski.com</a>).
				The first track is an archive (dataset) sample. The second track is the generated voice. Finally, the last track collects the algorithm-generated voices during training in ascending
				order (i.e., the algorithm learns to speak as the track evolves).
			</div> */}
				<br />
				<span>... shown at:</span>
				<br />
				-- 2021-09 Visiones Sonoras 17: Festival Internacional de Música y Nuevas Tecnologías (México): <a href='https://www.youtube.com/watch?v=ikx-Uhnh_d8'>Video</a>. <br />
				-- 2021-09 TeslaFM Radio: <a href='https://teslafm.net/los-archivos-phonos-15/'>Mixcloud</a>.
				<br />
				-- 2021-12-02 Work In Progress, Queen Mary University of London -- <a href='/gigs/2021-12-02_wip.jpeg'>poster</a> <br />
				<div className='videos'>
					<iframe
						width={560}
						height={315}
						src='https://player.vimeo.com/video/663434042?h=439613d804&title=0&portrait=0'
						frameBorder={0}
						allow='autoplay; fullscreen; picture-in-picture'
						allowFullScreen
					/>
					<iframe
						width={560}
						height={315}
						src='https://www.youtube.com/embed/BDWi4_JKinU'
						title='YouTube video player'
						frameBorder={0}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				</div>
			</div>

			<div>
				<span className='h-yellow'>est. 2019 --- Record label</span>: <span className='h-red'> La Ermita Records</span> --{'>'} <a href='https://laermitarecords.bandcamp.com/'>bandcamp</a>{' '}
				<br /> Record label and distro where I have co-edited a couple of vinyl releases. It's mainly post hxc and screamo music.
				<br />
			</div>
		</>
	)
}
