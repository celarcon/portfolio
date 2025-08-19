import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ThreeObject } from '../components/threeObject/ThreeObject'
import { SANTIAGO_CEBRIAN } from '../i18n/translations/constants/Translates'

export const Home: FC = (): JSX.Element => {
	const [t] = useTranslation('global')
	return (
		<section className='container-object'>
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
	)
}
