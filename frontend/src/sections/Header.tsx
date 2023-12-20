import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Header: FC = (): JSX.Element => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/posts'>Posts</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
