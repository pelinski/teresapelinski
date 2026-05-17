import { type JSX } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { version } from '../package.json'
import './styles/App.scss'
import { PageWrapper } from './components/PageWrapper'

export const App: React.FC = (): JSX.Element => {
	console.log(`Teresa Pelinski Website - Development by Teresa Pelinski – ${version}`)

	return (
		<Router>
			<Routes>
				<Route path='/' element={<PageWrapper screen={'title'} />} />
				<Route path='/about' element={<PageWrapper screen={'about'} />} />
				<Route path='/now' element={<PageWrapper screen={'now'} />} />
				<Route path='/research' element={<PageWrapper screen={'research'} />} />
				<Route path='/projects' element={<PageWrapper screen={'projects'} />} />
				<Route path='/blog' element={<PageWrapper screen={'blog'} />} />
				<Route path='/blog/:slug' element={<PageWrapper screen='blog-post' />} />
				<Route path='/sound' element={<PageWrapper screen={'sound'} />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	)
}
