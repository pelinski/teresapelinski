import { useNavigate } from 'react-router-dom'

export type ScrollHandler = (scrollTo: string) => () => void

export const useScrollHandler = (): ScrollHandler => {
	const navigate = useNavigate()

	return (scrollTo: string) => (): void => {
		navigate(`/${scrollTo === 'title' ? '' : scrollTo}`, { replace: true })
		document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}
}
