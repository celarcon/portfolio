import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	)
}
