import React from 'react'

export const Smc: React.FC = () => (
    <>
    <span className='screen-title'>my master</span>
        <div>
            in 2020-2021 i did the <a href='https://www.upf.edu/web/masters/master-en-tecnologies-del-so-i-de-la-musica'>master in sound and music computing</a> at the universitat pompeu fabra in barcelona. i took courses on audio signal processing for musical applications, advanced topics in sound and music computing, music perception and cognition, computational creativity, audio and music processing lab, music information retrieval and advanced interface design. i obtained an average grade of 97%.<br/>
            i wrote my master thesis under the supervision of sergi jordà and behzad haki on the topic of music generation with deep learning. i obtained a 10/10 grade. here is the <a href="https://zenodo.org/record/5554854">manuscript</a>, the <a href="https://github.com/pelinski/TransformerGrooveInfilling">code</a>, and a <a href="https://www.youtube.com/watch?v=c0vCFT8gLi8">video</a>.

		<div>
			<span className='h-yellow'>master thesis</span>: <span className='h-red'>completing audio drum loops using transformer neural networks</span>
			<br />
			abstract --> infilling drums refers to complementing a drum pattern with additional drum events that are stylistically consistent with the loop. this task can be applied to computer-assisted composition; for instance, the composer can sketch some instrument parts of a drum beat and obtain the system's suggestions for new parts. in this thesis, we present the transformer groove infilling, a transformer neural network approach to the infilling task. until now, the infilling of drum beats has been implemented using recurrent neural network (rnn) architectures, in particular, sequence-to-sequence models that employ lstm cells. however, in such architectures, as a consequence of sequential computation, proximity is emphasized when dealing with dependencies in the input sequence. furthermore, those models receive the audio loops as symbolic input sequences. in contrast, the transformer groove infilling model is based on the transformer architecture, which relies entirely on self-attention mechanisms to represent the input sequences, which allows for faster training since parallelization is possible. in addition, we present a novel direct audio representation that enables the transformer groove infilling to receive the input drum loops in the audio domain, avoiding their transcription and tokenization. we train several instances of the transformer groove infilling model to perform the following infilling subtasks: the infilling of closed hi-hats, the infilling of both kicks and snares, and the infilling of a drum loop without an instrument constraint. for comparison purposes, we also trained an equivalent model with a symbolic input representation in order to highlight the efficiency of the audio representation proposed in this thesis.


		</div>
        <div>
        <span className='h-yellow'>publications</span>: <br />
        -- (upcoming) Haki, B., Pelinski, T., Nieto, M., & Jordà, S. (2023). Completing Audio Drum Loops with Symbolic Drum Suggestions in Proceedings of the International Conference on New Interfaces for Musical Expression Mexico City, Mexico. <br/>
        -- Haki, B., Nieto, M., Pelinski, T., & Jordà, S. (2022). Real-Time Drum Accompaniment Using Transformer Architecture. 3rd Conference on AI Music Creativity. : < a href='/documents/2022-aimc-real-time-drum-accompaniment.pdf'>paper</a> <br/>
        -- Pelinski, T. (2021). Completing Audio Drum Loops with Transformer Neural Networks [Universitat Pompeu Fabra]. : < a href='https://zenodo.org/record/5554854'
>document</a>

        </div>
		<div>
			<span className='h-yellow'>some coursework i did</span>: <br />
			-- wekitunenator, advanced interface design final project on exploring the use of ml as a discovery tool for mappings in digital musical interfaces : <a href='https://github.com/gonski/wekitunenator'>code</a>, <a href='https://www.youtube.com/watch?v=M6bAb42s-lo'>video</a>.<br/>
			-- computational musicology project on the analysis of intonation in turkish makam music: <a href='https://github.com/marter0/intonation_in_turkish_makam_music'>code</a>.<br/>
            -- music information retrieval final project on comparing the performance of a single-task and a multi-task crnn for audio drum transcription : <a href='https://github.com/pelinski/crnn_multitask_adt'>code</a>. <br/>
            -- advanced interface design assignments : <a href='https://github.com/pelinski/aid-challenges'>code</a>.<br/>

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
