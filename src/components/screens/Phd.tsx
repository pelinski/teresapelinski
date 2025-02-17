import React from 'react'

export const Phd: React.FC = () => (
<>	<span className='screen-title'>my phd</span>
		<div>
			in september 2021 i started my phd in artificial intelligence and music (<a href='https://www.aim.qmul.ac.uk/'>aim</a> cdt) at the centre for digital music (<a href='http://c4dm.eecs.qmul.ac.uk/'>c4dm</a>) at queen mary university of london (<a href='https://www.qmul.ac.uk/'>qmul</a>), where i am also part of the <a href='http://instrumentslab.org/index.html'> augmented instruments lab</a>. my research is supported by <a href="https://bela.io/">bela</a> and <a href="https://www.ukri.org/">ukri</a>.
		</div>
		<div>
			<span className='h-yellow'>topic</span>: <span className='h-red'>sensor mesh as performance interface</span>
			<br />
			abstract --> despite steady advances in computational modelling of acoustic instrument sounds, digital instruments still lag far behind their traditional counterparts in the nuance of interaction. in typical implementations, even the most sophisticated digital instrumental models are restricted to a small number of audio inputs and outputs, or they might be controlled by the industry-standard MIDI protocol from 1983. it is thus possible to create realistic purely digital simulations of familiar instruments, but a performer's ability to play them lags far behind the acoustic original. this project investigates nuanced, high-bandwidth interaction with instruments through a mesh of sensors spread across the object, making the whole object a locus of interaction like on an acoustic instrument. however, while this approach addresses i/o bandwidth limitations, it faces a substantial challenge in extracting meaning from the sensor signals, which will have a high degree of redundancy, with gestural information encoded through slight variations between channels. machine learning offers a variety of approaches to dimensionality reduction and feature extraction from this input space. the goal of the project will be to develop suitable machine learning techniques to reduce redundancy and noise on a mesh of sensors and to evaluate the musical utility of the techniques through a new digital musical instrument.
		</div>
		<div>
			<span className='h-yellow'>things i'm doing in the context of my phd</span>: <br />
			-- 16-06-2022 being interviewed at the la casa encendida's <a href="https://radio.lacasaencendida.es/programas/the-afternet/">afternet podcast</a> (spanish) <br/>
			-- 28-06-2022 co-organising the <a href="https://embedded-ai-for-nime.github.io/">embedded ai workshop</a> at the <a href="https://nime2022.org/">nime 2022</a> conference<br/>
            -- 30-06-2022 presenting my research at the <a href="https://nime2022.org/">nime 2022</a> doctoral consortium<br />
			-- 25-08-2022 being the concert chair at the 11th international workshop on haptic & audio interaction design (<a href="https://haid2022.qmul.ac.uk/">haid 2022</a>) <br />
			-- 27-09-2022 giving a talk on digital musical instruments at the <a href="/documents/2022-ucm-organologia.pdf"> 1st organoloy workshop</a> at the universidad complutense de madrid (spanish)

		</div>
		</>)
