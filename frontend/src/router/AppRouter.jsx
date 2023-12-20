import { Route, Routes } from 'react-router-dom'
import { Home } from '../sections/Home'
import { Posts } from '../sections/Posts'
import { Contact } from '../sections/Contact'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/*' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	)
}
