import React from 'react'
import { Screen } from './Screen'

export const ArtScreen: React.FC = () => (
	<Screen id='art'>
		<span className='screen-title'>sound-art</span>
		<div>
			in 2021 i did a residency at phonos foundation, where i worked on my project <a href='https://noshell.teresapelinski.com/'>'no shell, just a voice'</a>. the sound pieces were released in
			the phonos netlabel (<a href='https://phonosbcn.bandcamp.com/album/no-shell-just-a-voice'>bandcamp</a>). 'no shell, just a voice' is a project that reflects on artificially generated
			voices that appear to have a _ghost_ but have no shell, no body.
		</div>
		<div>
			i generated the artificial voice in 'no shell, just a voice' using a couple of hours of my dad's field recordings and wavenet, a neural audio synthesis deep learning model. my dad, ramón
			pelinski, was an ethnomusicologist, and he studied the sword dance at la todolella, a small village close to castellón, in eastern spain. in these tapes, recorded during the 90s, he
			interviews the old and the young who inhabit la todolella, and asks them about how their lives have changed over time and how cultural identity is represented through music. i found these
			tapes in a wooden mountain of boxes in his office. my dad does not live anymore, and i wonder if these tapes will ever be listened to again. will someone just throw them away when i die?
			in the process of digitalising the recordings, i listened todolellanos' voices and a voice i had long not heard, my dad's. this project is about many things, but mainly about listening. i
			feel the warmth of my dad's voice, and recognise some of the todolellanos' voices – i met some of them when i was a kid. and i wonder who am i listening to when i listen to the artificial
			voice. do voices always point to someone? can they point to more than one person? i discuss the question of the body in artificial voices considering mladen dolar, michel chion and pierre
			schaeffer's accounts on the voice in the webzine accompanying this work (<a href='https://noshell.teresapelinski.com/'>noshell.teresapelinski.com</a>). the first track is an archive
			(dataset) sample. the second track is the generated voice. finally, the last track collects the algorithm-generated voices during training in ascending order (i.e., the algorithm learns to
			speak as the track evolves).
		</div>
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
		<span>shown at:</span>
		<br />
		<>
			-- visiones sonoras 17: festival internacional de música y nuevas tecnologías (méxico): <a href='https://www.youtube.com/watch?v=ikx-Uhnh_d8'> video</a>.{' '}
		</>
		<br />
		<>
			-- teslafm radio: <a href='https://teslafm.net/los-archivos-phonos-15/'>mixcloud</a>.
		</>
	</Screen>
)
