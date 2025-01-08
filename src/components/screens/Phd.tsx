import React from 'react'
import { OutputItem, ArbitraryItem } from '../Item'

export const Phd: React.FC = () => (
	<>
		{' '}
		<span className='screen-title'>......phd......</span>
		<div>
			In September 2021, I started my PhD in Artificial Intelligence and Music (<a href='https://www.aim.qmul.ac.uk/'>AIM</a> CDT) at the Centre for Digital Music (
			<a href='http://c4dm.eecs.qmul.ac.uk/'>C4DM</a>) at Queen Mary University of London (<a href='https://www.qmul.ac.uk/'>QMUL</a>), where I am also part of the{' '}
			<a href='http://instrumentslab.org/index.html'>Augmented Instruments Lab</a>. My research is supervised by <a href='http://andrewmcpherson.org/bio'>Prof. Andrew McPherson</a> (Imperial
			College London) and <a href='https://researchers.arts.ac.uk/1594-rebecca-fiebrink/'>Prof. Rebecca Fiebrink</a> (University of the Arts London), and supported by{' '}
			<a href='https://bela.io/'>Bela</a> and <a href='https://www.ukri.org/'>UKRI</a>. In 2023-2024 I was also granted an Enrichment Scheme Placement award at the{' '}
			<a href='https://www.turing.ac.uk/work-turing/studentships/enrichment'>Alan Turing Institute</a>.
		</div>
		<div>
			<span className='h-yellow'>Topic</span>: <span className='h-red'>Tools for Experimentation and Prototyping with Embedded AI in the Context of Digital Musical Instrument Design</span>
			{/* Abstract {'>>'}{'>'} Despite steady advances in computational modeling of acoustic instrument sounds, digital instruments still lag far behind their traditional counterparts in the nuance of
      interaction. In typical implementations, even the most sophisticated digital instrumental models are restricted to a small number of audio inputs and outputs, or they might be controlled
      by the industry-standard MIDI protocol from 1983. It is thus possible to create realistic purely digital simulations of familiar instruments, but a performer's ability to play them lags
      far behind the acoustic original. This project investigates nuanced, high-bandwidth interaction with instruments through a mesh of sensors spread across the object, making the whole object
      a locus of interaction like on an acoustic instrument. However, while this approach addresses I/O bandwidth limitations, it faces a substantial challenge in extracting meaning from the
      sensor signals, which will have a high degree of redundancy, with gestural information encoded through slight variations between channels. Machine learning offers a variety of approaches
      to dimensionality reduction and feature extraction from this input space. The goal of the project will be to develop suitable machine learning techniques to reduce redundancy and noise on
      a mesh of sensors and to evaluate the musical utility of the techniques through a new digital musical instrument. */}
		</div>
		<div>
			<span className='h-yellow'>Selected publications and conference talks</span>: <br />
			<OutputItem
				authors='Pelinski, T., McPherson, A., & Fiebrink, R.'
				date={2025}
				title='Ways of knowing, ways of writing: technical practice research in new musical instrument design'
				venue='Journal of New Music Research'
				publication_type='Journal paper'
				links={[{ url: 'https://doi.org/10.1080/09298215.2024.2442348', link_name: 'Paper' }]}
				isNew={true}
			/>
			<OutputItem
				authors='Pelinski, T.'
				date={2024}
				title='The dialectics of resistance and accommodation in the practice of debugging'
				venue='Code as Conversation: Transmedia Dialogues Around Critical Code Studies'
				publication_type='Conference presentation'
				links={[{ url: 'https://www.cdh.cam.ac.uk/events/37778/#programme', link_name: 'Programme' }]}
			/>
			<OutputItem
				authors='Bindi, G., Demerlé, N., Diaz, R., Genova, D., Golvet, A., Hayes, B., Huang, J., Liu, L., Martos, V., Nabi, S., Pelinski, T., Renault, L., Sarkar, S., Sarmento, P., Vahidi, C.,
			Wolstanholme, L., Zhang, Y., Roebel, A., Bryan-Kinns, N., … Barthet, M.'
				date={2023}
				title='AI (r)evolution where are we heading? Thoughts about the future of music and sound technologies in the era of deep learning'
				venue='arXiv'
				publication_type='Preprint'
				links={[{ url: 'https://doi.org/10.48550/arXiv.2310.18320', link_name: 'Paper' }]}
			/>
			<OutputItem
				authors='Pelinski, T., Diaz, R., Benito Temprano, A. L., McPherson, A.'
				date={2023}
				title='Pipeline for Recording Datasets and Running Neural Networks on the Bela Embedded Hardware Platform'
				venue='in
			Proceedings of the International Conference on New Interfaces for Musical Expression. Mexico City, Mexico.'
				publication_type='Conference Paper'
				links={[{ url: 'http://nime.org/proceedings/2023/nime2023_22.pdf', link_name: 'Paper' }]}
			/>
			<OutputItem
				authors='Pelinski, T., Caspe, F., McPherson, A. & Sandler, M.'
				date='2023-04-05'
				title='Computing Ecosystems: Neural Networks and Embedded Hardware Platforms'
				venue='In CHI2023 Workshop [WS2] - Beyond
			Prototyping Boards: Future Paradigms for Electronics Toolkits. Hamburg, Germany.'
				publication_type='Workshop position paper'
				links={[{ url: '/documents/2023-chi-computing-ecosystems.pdf', link_name: 'Paper' }]}
			/>
			<OutputItem
				authors='Pelinski, T.'
				date={2022}
				title='Anomaly detection as means of sensing subtlety and nuance in musical gesture'
				venue='in Embedded Perspectives of Musical AI Workshop. University of Oslo, Norway.'
				publication_type='Workshop talk'
				links={[{ url: 'https://www.uio.no/ritmo/english/news-and-events/events/workshops/2022/embodied-ai/p/teresa-pelinski.html', link_name: 'Abstract' }]}
			/>
			<OutputItem
				authors='Pelinski, T.'
				date={2022}
				title='Some considerations on the design of digital musical instruments'
				venue='Jornada de Organología (Organology Seminar) at Universidad Complutense de Madrid, Spain.'
				publication_type='Invited talk'
				links={[{ url: 'https://youtu.be/kZxsD32a7T0?t=1739', link_name: 'Video' }]}
			/>
			<OutputItem
				authors='Pelinski, T.'
				date={2022}
				title='Sensor mesh as performance interface'
				venue='International Conference on New Interfaces for Musical Expression. (Doctoral consortium)'
				publication_type='Conference paper'
				links={[{ url: 'https://nime.pubpub.org/pub/sensor-mesh/release/1', link_name: 'Paper' }]}
			/>
		</div>
		<div>
			{' '}
			<span className='h-yellow'>Conference Workshops</span>: <br />
			<OutputItem
				authors='Martin, C. P., Pelinski, T.'
				date={2024}
				title='Building NIMEs with Embedded AI'
				venue='International Conference on New Interfaces for Musical Expression. Utrecht, Netherlands'
				publication_type='Workshop'
				links={[{ url: 'https://smcclab.github.io/nime-embedded-ai/', link_name: 'Website' }]}
			/>
			<OutputItem
				authors='Jourdan, T., Pelinski, T., Scurto, H.'
				date={2024}
				title='First-person and second-person perspectives for ML in NIME'
				venue='International Conference on New Interfaces for Musical Expression. Utrecht, Netherlands'
				publication_type='Workshop'
				links={[{ url: 'https://pelinski.github.io/first-and-second-person-perspectives-ml-nime/', link_name: 'Website' }]}
			/>
			<OutputItem
				authors="Armitage, J., Shepardson, V., Privato, N., Pelinski, T., Benito Temprano, A. L., Wolstanholme, L., Martelloni, A., Caspe, F. S., Reed, C. N., Skach, S., Diaz, F., O'Brien S. P., Shier, J."
				date={2023}
				title='Agential Instruments Design Workshop'
				venue='AI and Music Creativity Conference. Brighton, UK'
				publication_type='Workshop proposal'
				links={[{ url: 'https://aimc2023.pubpub.org/pub/25mg4xnz', link_name: 'Workshop proposal' }]}
			/>
			<OutputItem
				authors='Pelinski, T., Shepardson, V., Symons, S., Caspe, F. S., Benito Temprano, A. L., Armitage, J., Kiefer, C., Fiebrink, R., Magnusson, T., & McPherson, A.'
				date={2022}
				title='Embedded AI for NIME: Challenges and Opportunities'
				venue='International Conference on New Interfaces for Musical Expression. Online'
				publication_type='Workshop proposal'
				links={[
					{ url: 'https://nime.pubpub.org/pub/rwr2c3zs/release/1', link_name: 'Workshop proposal' },
					{ url: 'https://embedded-ai-for-nime.github.io/', link_name: 'Website' },
				]}
			/>
		</div>
		<div>
			{' '}
			<span className='h-yellow'>Code</span>: <br />
			<ArbitraryItem>
				2023-09 <a href='https://github.com/BelaPlatform/pybela'>pybela</a> - library for interfacing with Bela, the embedded audio platform, using Python. pybela provides a convenient way to
				stream, log, and monitor sensor data from your Bela device to your laptop. {'>>'} <a href='https://github.com/BelaPlatform/pybela/tree/main/tutorials'>pybela tutorials</a>{' '}
				<a href='https://github.com/pelinski/pybela-pytorch-xc-tutorial'>pybela + pytorch + crosscompilation tutorial</a>{' '}
			</ArbitraryItem>
		</div>
		<div>
			<span className='h-yellow'>Teaching</span>: <br />
			<ArbitraryItem>
				{' '}
				2024-10:2025-06 Associate Lecturer at the Creative Computing Institute, University of the Arts London. Teaching three modules at the MSc Applied Machine Learning for Creatives: STEM
				for Creatives, Artificial Intelligence for Media, and Personalisation and Machine Learning.{' '}
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2024-11 Teaching Assistant at the Dyson School of Design Engineering at Imperial College London. Assisting at the Gizmo: Physical Computing module, part of the MEng Design Engineering.{' '}
			</ArbitraryItem>
			<ArbitraryItem> 2023-03 Invited Lectures at the Artifical Intelligence for Media module at the Creative Computing Institute, University of the Arts London. </ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2022-10:2022-12 Associate Lecturer at the Creative Computing Institute, University of the Arts London. Teaching the Natural Language Processing for the Creative Industries module at
				the MSc Data Science and AI for the Creative Industries.{' '}
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2022-06:2022-07 Teaching Associate at Queen Mary Univeristy of London. Assisting at the Interactive Media Design and Production, module part of the BSc(Eng) Telecommunications
				Engineering with Management.{' '}
			</ArbitraryItem>
			<ArbitraryItem> 2022-01:2022-05 Teaching Assistant (Demonstrator) at Queen Mary University of London. Assisting at the Interaction Design undergraduate module. </ArbitraryItem>
		</div>
		<div>
			<span className='h-yellow'>Grants / Internships</span>: <br />
			<ArbitraryItem>
				{' '}
				2021-09:2025-09 PhD Studentship - EPSRC UKRI Centre for Doctoral Training in Artificial Intelligence and Music (EP/S022694/1) at Queen Mary University of London
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2023-04:2023-10 Internship at <a href='https://bela.io/'>Bela</a>
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2023-10:2024-09 <a href='https://www.turing.ac.uk/work-turing/studentships/enrichment'>Turing Enrichment Scheme</a> placement at{' '}
				<a href='https://www.turing.ac.uk/'>The Alan Turing Institute</a>
			</ArbitraryItem>
		</div>
		<div>
			{' '}
			<span className='h-yellow'>Other talks and activities</span>: <br />
			<ArbitraryItem>
				{' '}
				2023-05 Facilitator at the NIME2023 Summer School in Mexico City (Mexico) -- <a href='https://www.nime2023.org/program/summer-school'>Link</a>{' '}
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2023-03 Talk at the Audio Programmer YouTube channel: "Toward Prototyping with Neural Networks on Embedded Hardware" --{' '}
				<a href='https://www.youtube.com/live/eEqZJ41PbpQ?feature=share&t=364'>Video</a>
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2023-02-14 Short talk and poster presentation on my research at <a href='https://www.ircam.fr/'>IRCAM</a> (Paris, France){' '}
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2022-08 Concert Chair at the 11th International Workshop on Haptic & Audio Interaction Design (<a href='https://haid2022.qmul.ac.uk/'>HAID 2022</a>), held at QMUL (London, UK){' '}
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2022-09 Interview at the Bela Blog: Bela's First PhD Student: Interview with Teresa Pelinski about AI, Embedded Computing and Musical Instruments --{' '}
				<a href='https://blog.bela.io/bela-phd-sponsorship/'>Post</a>{' '}
			</ArbitraryItem>
			<ArbitraryItem>
				{' '}
				2022-06 Interview at La Casa Encendida's <a href='https://radio.lacasaencendida.es/programas/the-afternet/'>Afternet Podcast</a> (in spanish){' '}
			</ArbitraryItem>
		</div>
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
	</>
)
