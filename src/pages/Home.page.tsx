import React, { useState, useEffect } from 'react'

export const HomePage: React.FC = (): JSX.Element => {
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

	useEffect(() => {
		updateDimensions()
		window.addEventListener('resize', updateDimensions)
		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	const updateDimensions = (): void => {
		const width: number = window.innerWidth
		setIsDesktop(width >= 812)
	}

	return (
		<main>
			<Title />
			{isDesktop ? <InfosDesktop /> : <InfosMobile />}
		</main>
	)
}

const InfosDesktop: React.FC = (): JSX.Element => (
	<div className='infos'>
		-- phd researcher in artificial intelligence and music (aim cdt) | augmented instruments lab
		-- <br />
		-- centre for digital music (c4dm) | queen mary university of london --
	</div>
)

const InfosMobile: React.FC = (): JSX.Element => (
	<div className='infos'>
		phd researcher in ai and music (aim cdt) <br />
		augmented instruments lab <br />
		centre for digital music (c4dm) <br />
		queen mary university of london
	</div>
)

const Title: React.FC = (): JSX.Element => (
	<div className='title-name'>
		<div>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color2'>┃╭╮╭╮┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━╮┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━╮┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━╮┃</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color2'>╰╯┃┃╰╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━╯┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color1'>╱╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭╮╭╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━╮┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━╯┃</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color1'>╱╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃┃╰╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━╯┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━╮┃</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color1'>╱╱</span>
			<span className='color2'>╰╯</span>
			<span className='color1'>╱╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰╯╰━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰╯</span>
			<span className='color1'>╱</span>
			<br />
		</div>
		<div>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭╮</span>
			<span className='color1'>╱╱╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭╮╭━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭━━╮</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━╮┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱╱╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰┫┣╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃╰╮┃┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━╮┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃┃╭╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰┫┣╯</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━╯┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱╱╱</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭╮╰╯┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰╯╯</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭╮</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃╰╮┃┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━╮┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╭╮┃</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱╱╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━━╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━╯┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭┫┣╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃╰━╯┃</span>
			<span className='color1'>╱</span>
			<span className='color2'>┃┃┃╰╮</span>
			<span className='color1'>╱</span>
			<span className='color2'>╭┫┣╮</span>
			<span className='color1'>╱</span>
			<br />
			<span className='color1'>╱</span>
			<span className='color2'>╰╯</span>
			<span className='color1'>╱╱╱</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰╯╰━╯</span>
			<span className='color1'>╱</span>
			<span className='color2'>╰━━╯</span>
			<span className='color1'>╱</span>
		</div>
	</div>
)
