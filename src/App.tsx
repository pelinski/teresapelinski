import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './styles/App.scss'

import { PageWrapper } from './components/PageWrapper'

export const App: React.FC = (): JSX.Element => (
	<Router>
		<Routes>
			<Route path='/' element={<PageWrapper screen={'title'} />} />
			<Route path='/about' element={<PageWrapper screen={'about'} />} />
			<Route path='/now' element={<PageWrapper screen={'now'} />} />
			<Route path='/research' element={<PageWrapper screen={'research'} />} />
			<Route path='/projects' element={<PageWrapper screen={'projects'} />} />
			<Route path='/blog' element={<PageWrapper screen={'blog'} />} />
			<Route path='/sound' element={<PageWrapper screen={'sound'} />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	</Router>
)
