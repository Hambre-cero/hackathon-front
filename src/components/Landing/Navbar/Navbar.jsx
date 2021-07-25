import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// import '../../css/Navbar.css'

function Navbar() {
  const [menu, setMenu] = useState(false)
  const [t] = useTranslation('global')

  useEffect(() => {
    if (menu) {
      document.getElementById('nav').classList.remove('hidden')
    } else {
      document.getElementById('nav').classList.add('hidden')
    }
  })

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="container px-6 py-2 mx-auto md:px-12 items-center justify-between flex">
        <Link to="/" className="text-white brand-logo">
          <svg
            color="black"
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
        <div
          className="hidden flex bg-indigo-900 flex-col absolute top-0 right-0 h-screen text-right p-4 md:static md:grid-cols-3 md:gap-12 md:text-center md:h-auto md:text-center md:bg-transparent md:grid"
          id="nav"
        >
          <Link
            to="/"
            className="text-lg uppercase cursor-pointer hover:text-gray-300 p-1 md:p-0"
          >
            {t('landing.link1')}
          </Link>
          <Link
            to="/"
            className="text-lg uppercase cursor-pointer hover:text-gray-300 p-1 md:p-0"
          >
            {t('landing.link2')}
          </Link>
          <Link
            to="/login"
            className="text-lg uppercase cursor-pointer hover:text-gray-300 p-1 md:p-0"
          >
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
            color="black"
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
  )
}

export default Navbar
