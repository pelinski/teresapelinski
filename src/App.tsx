import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'

import { PageWrapper } from './pages/PageWrapper'

export const App: React.FC = (): JSX.Element => (
	<Router>
		<Routes>
			<Route path='/' element={<PageWrapper screen={'title'} />} />
			<Route path='/about-me' element={<PageWrapper screen={'about-me'} />} />
			<Route path='/no-shell' element={<PageWrapper screen={'no-shell'} />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	</Router>
)
