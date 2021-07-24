/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './styles.css'

const Landing = () => {
  const [menu, setMenu] = useState(false)
  const [t] = useTranslation('global')

  const handleClickMenu = useEffect(() => {
    if (menu) {
      document.getElementById('nav').classList.remove('hidden')
    } else {
      document.getElementById('nav').classList.add('hidden')
    }
  })

  return (
    <div className="landing__background">
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="text-white brand-logo">
            <svg
              className="w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Capa 1"
              viewBox="0 0 16.16 12.57"
            >
              <defs />
              <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z" />
              <path d="M16.16 5.82H0L8.08 0l8.08 5.82z" />
            </svg>
          </Link>
          <div className="hidden navbar__nav md:grid" id="nav">
            <Link to="/" className="navbar__nav-item">
              {t('landing.link1')}
            </Link>
            <Link to="/" className="navbar__nav-item">
              {t('landing.link2')}
            </Link>
            <Link to="/" className="navbar__nav-item">
              {t('landing.link3')}
            </Link>
            <button
              onClick={() => {
                setMenu(false)
              }}
              className="navbar__nav-item md:hidden"
              type="button"
            >
              X
            </button>
          </div>
          <button
            onClick={() => {
              setMenu(true)
            }}
            className="text-white md:hidden focus:outline-none"
            type="button"
          >
            <svg
              className="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </header>
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
          to="/"
          className="px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg w-28 hover:bg-gray-100"
        >
          {t('landing.button')}
        </Link>
      </div>
    </div>
  )
}

export default Landing
