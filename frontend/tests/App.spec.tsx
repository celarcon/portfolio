import { render, screen } from '@testing-library/react'
import i18n from '../src/i18n/i18n'
import { Header } from '../src/sections/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Firt test', () => {
	beforeEach(() => {
		i18n.init()
	})

	test('Header component display header', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		)

		const name = screen.getByText('Home')

		expect(name).toBeInTheDocument()
	})
})
