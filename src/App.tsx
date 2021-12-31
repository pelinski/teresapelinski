import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'

import { HomePage } from './pages/Home.page'
import { CertPage } from './pages/Cert.page'

export const App: React.FC = (): JSX.Element => (
	<Router>
		<Routes>
			<Route path='/' exact element={<HomePage />} />
			<Route
				path='/.well-known/acme-challenge/j0UffnyY1MGF_R_Z713lUi1uLdfJOOeJP3T5i3LIW-o'
				exact
				element={<CertPage />}
			/>
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	</Router>
)
