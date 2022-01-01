import React from 'react'

export const HomePage: React.FC = (): JSX.Element => {
	/*const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

	useEffect(() => {
		updateDimensions()
		window.addEventListener('resize', updateDimensions)
		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	const updateDimensions = (): void => {
		const width: number = window.innerWidth
		setIsDesktop(width >= 812)
	}*/

	return (
		<main>
			<Title />
		</main>
	)
}
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
