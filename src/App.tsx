import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'

import { PageWrapper } from './components/PageWrapper'

export const App: React.FC = (): JSX.Element => (
	<Router>
		<Routes>
			<Route path='/' element={<PageWrapper screen={'title'} />} />
			<Route path='/about-me' element={<PageWrapper screen={'about-me'} />} />
			<Route path='/phd' element={<PageWrapper screen={'phd'} />} />
			<Route path='/smc' element={<PageWrapper screen={'smc'} />} />
			<Route path='/sound' element={<PageWrapper screen={'sound'} />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	</Router>
)
