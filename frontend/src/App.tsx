import { BrowserRouter } from 'react-router-dom'
import { Header } from './sections/Header'
import { AppRouter } from './router/AppRouter'
import { Footer } from './sections/Footer'

export function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Header />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</div>
	)
}
