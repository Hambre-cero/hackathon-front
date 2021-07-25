/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Landing/Navbar/Navbar'
import './Landing.css'

const Landing = () => {
  const [t] = useTranslation('global')

  return (
    <div className="landing__background">
      <Navbar />
      <div className="absolute flex flex-col px-6 mx-auto transform -translate-y-1/2 top-1/2 md:px-12">
        <span className="font-bold text-yellow-400 uppercase">Easy Donate</span>
        <h1 className="max-w-screen-md mt-4 text-3xl font-bold leading-tight text-white sm:text-6xl">
          {t('landing.phrase1')}
          <br />
          {t('landing.phrase2')}
          <br />
          {t('landing.phrase3')}
        </h1>
        <Link
          to="/login"
          className="px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg w-28 hover:bg-gray-100"
        >
          {t('landing.button')}
        </Link>
      </div>
    </div>
  )
}

export default Landing
