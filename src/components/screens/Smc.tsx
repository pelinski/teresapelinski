import React, { useState } from 'react'

export const Smc: React.FC = () => {
	const [showAbstract, setShowAbstract] = useState(false)

	return (
		<>
			<span className='screen-title'>my Master's....</span>
			<div>
				In 2020-2021, I completed the <a href='https://www.upf.edu/web/masters/master-en-tecnologies-del-so-i-de-la-musica'>Master in Sound and Music Computing</a> at the Universitat Pompeu
				Fabra in Barcelona. I took courses on audio signal processing for musical applications, advanced topics in sound and music computing, music perception and cognition, computational
				creativity, audio and music processing lab, music information retrieval, and advanced interface design. I obtained an average grade of 97%.
				<br />I wrote my master thesis under the supervision of Sergi Jordà and Behzad Haki on the topic of music generation with deep learning. I obtained a 10/10 grade. Here is the{' '}
				<a href='https://zenodo.org/record/5554854'>manuscript</a>, the <a href='https://github.com/pelinski/TransformerGrooveInfilling'>code</a>, and a{' '}
				<a href='https://www.youtube.com/watch?v=c0vCFT8gLi8'>video</a>.
				<div>
					<span className='h-yellow'>Master Thesis</span>: <span className='h-red'>Completing Audio Drum Loops Using Transformer Neural Networks</span> --{'>'}{' '}
					<a onClick={() => setShowAbstract(!showAbstract)}>Abstract </a>
					{showAbstract && (
						<>
							<br />
							Infilling drums refers to complementing a drum pattern with additional drum events that are stylistically consistent with the loop. This task can be applied to
							computer-assisted composition; for instance, the composer can sketch some instrument parts of a drum beat and obtain the system's suggestions for new parts. In this thesis,
							we present the Transformer Groove Infilling, a transformer neural network approach to the infilling task. Until now, the infilling of drum beats has been implemented using
							recurrent neural network (RNN) architectures, in particular, sequence-to-sequence models that employ LSTM cells. However, in such architectures, as a consequence of
							sequential computation, proximity is emphasized when dealing with dependencies in the input sequence. Furthermore, those models receive the audio loops as symbolic input
							sequences. In contrast, the Transformer Groove Infilling model is based on the transformer architecture, which relies entirely on self-attention mechanisms to represent the
							input sequences, allowing for faster training since parallelization is possible. In addition, we present a novel direct audio representation that enables the Transformer
							Groove Infilling to receive the input drum loops in the audio domain, avoiding their transcription and tokenization. We train several instances of the Transformer Groove
							Infilling model to perform the following infilling subtasks: the infilling of closed hi-hats, the infilling of both kicks and snares, and the infilling of a drum loop
							without an instrument constraint. For comparison purposes, we also trained an equivalent model with a symbolic input representation to highlight the efficiency of the audio
							representation proposed in this thesis.
						</>
					)}
				</div>
				<div>
					<span className='h-yellow'>Publications</span>: <br />
					-- Haki, B., Pelinski, T., Nieto, M., & Jordà, S. (2023). Completing Audio Drum Loops with Symbolic Drum Suggestions in Proceedings of the International Conference on New
					Interfaces for Musical Expression Mexico City, Mexico. <a href='/documents/2023-nime-cr-infilling.pdf'>Paper</a> <br />
					-- Haki, B., Nieto, M., Pelinski, T., & Jordà, S. (2022). Real-Time Drum Accompaniment Using Transformer Architecture. 3rd Conference on AI Music Creativity. :{' '}
					<a href='/documents/2022-aimc-real-time-drum-accompaniment.pdf'>Paper</a> <br />
					-- Pelinski, T. (2021). Completing Audio Drum Loops with Transformer Neural Networks [Universitat Pompeu Fabra]. : <a href='https://zenodo.org/record/5554854'>Paper</a>
				</div>
				<div>
					<span className='h-yellow'>Some Coursework I Did</span>: <br />
					-- Wekitunenator, Advanced Interface Design final project on exploring the use of ML as a discovery tool for mappings in digital musical interfaces:{' '}
					<a href='https://github.com/gonski/wekitunenator'>Code</a>, <a href='https://www.youtube.com/watch?v=M6bAb42s-lo'>Video</a>.<br />
					-- Computational Musicology project on the analysis of intonation in Turkish Makam music: <a href='https://github.com/marter0/intonation_in_turkish_makam_music'>Code</a>.<br />
					-- Music Information Retrieval final project on comparing the performance of a single-task and a multi-task CRNN for audio drum transcription:{' '}
					<a href='https://github.com/pelinski/crnn_multitask_adt'>Code</a>. <br />
					-- Advanced Interface Design assignments : <a href='https://github.com/pelinski/aid-challenges'>Code</a>.<br />
				</div>
				<div className='videos'>
					<iframe
						width={560}
						height={315}
						src='https://www.youtube-nocookie.com/embed/c0vCFT8gLi8'
						title='YouTube video player'
						frameBorder={0}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
					<iframe
						width={560}
						height={315}
						src='https://www.youtube-nocookie.com/embed/M6bAb42s-lo'
						title='YouTube video player'
						frameBorder={0}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				</div>
			</div>
		</>
	)
}
