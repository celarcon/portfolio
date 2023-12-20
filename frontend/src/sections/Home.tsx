import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ThreeObject } from '../components/threeObject/ThreeObject'
import { NETWORKS } from '../constants/Constants'
import { SANTIAGO_CEBRIAN } from '../i18n/translations/constants/Translates'
import { Github } from '../icons/Github'
import { Linkedin } from '../icons/Linkedin'
import { Youtube } from '../icons/Youtube'

export const Home: FC = (): JSX.Element => {
	const [t] = useTranslation('global')
	return (
		<>
			<section className='container-object' style={{ height: '300px' }}>
				<ThreeObject />
				<div className='text-three front'>
					<label>{t(SANTIAGO_CEBRIAN)}</label>
				</div>
				<div className='text-three behind'>
					<label>{t(SANTIAGO_CEBRIAN)}</label>
				</div>
				<div className='text-three behind-blur'>
					<label>{t(SANTIAGO_CEBRIAN)}</label>
				</div>
			</section>
			<section className='flex jusfy-content-space-around align-items-center'>
				<Link target={'_blank'} to={NETWORKS.LINKEDIN}>
					<Linkedin />
				</Link>
				<Link target={'_blank'} to={NETWORKS.GITHUB}>
					<Github />
				</Link>
				<Link target={'_blank'} to={NETWORKS.YOUTUBE}>
					<Youtube />
				</Link>
			</section>
		</>
	)
}
