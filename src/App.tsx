import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'

import { HomePage } from './pages/Home.page'

export const App: React.FC = (): JSX.Element => (
	<Router>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	</Router>
)
