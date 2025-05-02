import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export const News: React.FC = (): JSX.Element => {
	const [showNews, setShowNews] = useState(false)
	const location = useLocation()
	return (
		<span className='news'>
			{location.pathname == '/' && !showNews && (
				<a onClick={() => setShowNews(!showNews)}>
					~~click here for news~~ <br />
				</a>
			)}
			{location.pathname == '/' && showNews && (
				<span className='news-content'>
					<a onClick={() => setShowNews(!showNews)} className='close'>
						{' '}
						x
					</a>
					<div>
						++ New conference paper for NIME 2025: <span>pybela: a Python library to interface scientific and physical computing</span> --{'>'} check it out <a href='/phd'>here</a> & I
						will be presenting it at NIME 2025 in late June in Canberra, Australia
						<br />
						++ New journal paper for the Journal of New Music Research: <span>Ways of knowing, ways of writing: technical practice research in new musical instrument design</span> --{'>'}{' '}
						check it out <a href='/phd'>here</a>
						<br />
						++ I will be participating in the <a href='https://sonar.es/en/programme/sonar-d/open-call-hacklab'>Sonar+D 2025 AI Performance Playground</a>
					</div>
				</span>
			)}
		</span>
	)
}
