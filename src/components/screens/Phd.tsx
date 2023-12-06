import React from 'react'

export const Phd: React.FC = () => (
	<>
		{' '}
		<span className='screen-title'>......phd......</span>
		<div>
			In September 2021, I started my PhD in Artificial Intelligence and Music (<a href='https://www.aim.qmul.ac.uk/'>AIM</a> CDT) at the Centre for Digital Music (
			<a href='http://c4dm.eecs.qmul.ac.uk/'>C4DM</a>) at Queen Mary University of London (<a href='https://www.qmul.ac.uk/'>QMUL</a>), where I am also part of the{' '}
			<a href='http://instrumentslab.org/index.html'>Augmented Instruments Lab</a>. My research is supervised by <a href='http://andrewmcpherson.org/bio'>Prof. Andrew McPherson</a> (Imperial
			College London) and <a href='https://researchers.arts.ac.uk/1594-rebecca-fiebrink/'>Prof. Rebecca Fiebrink</a> (University of the Arts London), and supported by{' '}
			<a href='https://bela.io/'>Bela</a> and <a href='https://www.ukri.org/'>UKRI</a>. Earlier this year I was also granted an Enrichment Scheme Placement award at the{' '}
			<a href='https://www.turing.ac.uk/work-turing/studentships/enrichment'>Alan Turing Institute</a>.
		</div>
		<div>
			<span className='h-yellow'>Topic</span>: <span className='h-red'>Tools for Experimentation and Prototyping with Embedded AI in the Context of Digital Musical Instrument Design</span>
			{/* Abstract --{'>'} Despite steady advances in computational modeling of acoustic instrument sounds, digital instruments still lag far behind their traditional counterparts in the nuance of
      interaction. In typical implementations, even the most sophisticated digital instrumental models are restricted to a small number of audio inputs and outputs, or they might be controlled
      by the industry-standard MIDI protocol from 1983. It is thus possible to create realistic purely digital simulations of familiar instruments, but a performer's ability to play them lags
      far behind the acoustic original. This project investigates nuanced, high-bandwidth interaction with instruments through a mesh of sensors spread across the object, making the whole object
      a locus of interaction like on an acoustic instrument. However, while this approach addresses I/O bandwidth limitations, it faces a substantial challenge in extracting meaning from the
      sensor signals, which will have a high degree of redundancy, with gestural information encoded through slight variations between channels. Machine learning offers a variety of approaches
      to dimensionality reduction and feature extraction from this input space. The goal of the project will be to develop suitable machine learning techniques to reduce redundancy and noise on
      a mesh of sensors and to evaluate the musical utility of the techniques through a new digital musical instrument. */}
		</div>
		<div>
			<span className='h-yellow'>Publications</span>: <br />
			-- Bindi, G., Demerlé, N., Diaz, R., Genova, D., Golvet, A., Hayes, B., Huang, J., Liu, L., Martos, V., Nabi, S., Pelinski, T., Renault, L., Sarkar, S., Sarmento, P., Vahidi, C.,
			Wolstanholme, L., Zhang, Y., Roebel, A., Bryan-Kinns, N., … Barthet, M. (2023-09). AI (r)evolution -- where are we heading? Thoughts about the future of music and sound technologies in the
			era of deep learning (arXiv:2310.18320). arXiv. <a href='https://doi.org/10.48550/arXiv.2310.18320'>Paper</a> <br />
			-- Pelinski, T., Caspe, F., McPherson, A. & Sandler, M. (2023-04-05). Computing Ecosystems: Neural Networks and Embedded Hardware Platforms. In CHI2023 Workshop [WS2] - Beyond Prototyping
			Boards: Future Paradigms for Electronics Toolkits. Hamburg, Germany. <a href='/documents/2023-chi-computing-ecosystems.pdf'>Paper</a> <br />
			-- Pelinski, T., Díaz, R., Benito Temprano, A. L. & McPherson, A. (2023-04-05). Pipeline for Recording Datasets and Running Neural Networks on the Bela Embedded Hardware Platform. In
			Proceedings of the International Conference on New Interfaces for Musical Expression Mexico City, Mexico. <a href='/documents/2023-nime-cr-pipeline-nn-bela.pdf'>Paper</a>{' '}
			<a href='https://github.com/pelinski/bela-dl-pipeline'>Repo Link</a> <br />
		</div>
		<div>
			{' '}
			<span className='h-yellow'>Code</span>: <br />
			-- 2023-09 <a href='https://github.com/BelaPlatform/pybela'>pybela</a> - library for interfacing with Bela, the embedded audio platform, using Python. pybela provides a convenient way to
			stream, log, and monitor sensor data from your Bela device to your laptop. -- <a href='https://github.com/BelaPlatform/pybela/tree/main/tutorials'>pybela tutorials</a>{' '}
			<a href='https://github.com/pelinski/pybela-pytorch-xc-tutorial'>pybela + pytorch + crosscompilation tutorial</a> <br />
		</div>
		<div>
			<span className='h-yellow'>Interviews / Talks / Workshops / etc....</span>: <br />
			-- 2022-06-16 Being interviewed at La Casa Encendida's <a href='https://radio.lacasaencendida.es/programas/the-afternet/'>Afternet Podcast</a> (Spanish) <br />
			-- 2022-06-28 Co-organising the <a href='https://embedded-ai-for-nime.github.io/'>Embedded AI Workshop</a> at the <a href='https://nime2022.org/'>NIME 2022</a> conference (Online/Auckland,
			New Zealand)
			<br />
			-- 2022-06-30 Presenting my research at the <a href='https://nime2022.org/'>NIME 2022</a> Doctoral Consortium (Online/Auckland, New Zealand)
			<br />
			-- 2022-08-25 Being the Concert Chair at the 11th International Workshop on Haptic & Audio Interaction Design (<a href='https://haid2022.qmul.ac.uk/'>HAID 2022</a>), held at QMUL (London,
			UK) <br />
			-- 2022-09-23 Being interviewed at the Bela Blog:{' '}
			<a href='https://blog.bela.io/bela-phd-sponsorship/'>Bela's First PhD Student: Interview with Teresa Pelinski about AI, Embedded Computing and Musical Instruments</a> <br />
			-- 2022-09-27 Giving an invited talk on Digital Musical Instruments at the <a href='/documents/2022-ucm-organologia.pdf'> 1st Organoloy Workshop</a> at the Universidad Complutense de
			Madrid (Spain) -- <a href='https://youtu.be/kZxsD32a7T0?t=1739'>Video</a> (Spanish)
			<br />
			-- 2022-11-22 Giving a talk "
			<a href='https://www.uio.no/ritmo/english/news-and-events/events/workshops/2022/embodied-ai/p/teresa-pelinski.html'>
				Anomaly Detection as Means of Sensing Subtlety and Nuance in Musical Gesture
			</a>
			" at the <a href='https://www.uio.no/ritmo/english/news-and-events/events/workshops/2022/embodied-ai/index.html'>Embodied Perspectives on Musical AI (EMAI) Worskhop</a>, held at the Centre
			for Interdisciplinary Studies in Rhythm, Time and Motion (<a href='https://www.uio.no/ritmo/english/'>RITMO</a>) at the University of Oslo (Norway) --{' '}
			<a href='https://youtu.be/V8Vy1eWgoLU?t=7148'>Video</a> <br />
			-- 2023-02-14 Giving a short talk and poster presentation on my research at <a href='https://www.ircam.fr/'>IRCAM</a> (Paris, France) <br />
			-- 2023-03-17 Giving a talk at the Audio Programmer YouTube channel: "Toward Prototyping with Neural Networks on Embedded Hardware" --{' '}
			<a href='https://www.youtube.com/live/eEqZJ41PbpQ?feature=share&t=364'>Video</a> <br />
			-- 2023-04-23 Participating in the workshop "Beyond Prototyping Boards: Future Paradigms for Electronics Toolkits" in CHI2023 (Hamburg, Germany) --{' '}
			<a href='/documents/2023-chi-computing-ecosystems.pdf'>Position Paper</a> <br />
			-- 2023-05-26/28 Participating in the NIME2023 Summer School in Mexico City as Facilitator (Mexico) -- <a href='https://www.nime2023.org/program/summer-school'>Link</a> <br />
			-- 2023-06-01 Presenting my paper "Pipeline for Recording Datasets and Running Neural Networks on the Bela Embedded Hardware Platform." at NIME 2023 (Mexico City, Mexico) --{' '}
			<a href='/documents/2023-nime-cr-pipeline-nn-bela.pdf'>Paper</a> <br />
			-- 2023-08-30 Co-organising the Agential Instruments Design Workshop at AIMC2023 (Brighton, UK) -- <a href='https://aimc2023.pubpub.org/pub/25mg4xnz/release/1'>Workshop proposal</a>
			<br />
		</div>
		<div>
			<span className='h-yellow'>Grants / Internships</span>: <br />
			-- 2021-09:2025-09 PhD Studentship - EPSRC UKRI Centre for Doctoral Training in Artificial Intelligence and Music (EP/S022694/1) at Queen Mary University of London <br />
			-- 2023-04:2023-10 Internship at <a href='https://bela.io/'>Bela</a> <br />
			-- 2023-10:2024-09 <a href='https://www.turing.ac.uk/work-turing/studentships/enrichment'>Turing Enrichment Scheme</a> placement at{' '}
			<a href='https://www.turing.ac.uk/'>The Alan Turing Institute</a> <br />
			<div>
				<span className='h-yellow'>Teaching</span>: <br />
				-- 2022-01:2022-05 Demonstrator (Interaction Design, Undergraduate Module, ECS6012) at Queen Mary University of London <br />
				-- 2022-06:2022-07 Teaching Associate (Interactive Media Design and Production, Undergraduate Module, EBU6305) at Queen Mary University of London <br />
				-- 2022-10:2022-12 Associate Lecturer (Natural Language Processing for the Creative Industries, Master Level Module, IU000131) at University of the Arts London <br />
				-- 2022-03 Two Invited Lectures (Artificial Intelligence for the Media, Master Level Module, IU000133) at University of the Arts London <br />
			</div>
		</div>
	</>
)
