import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
      <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-center pt-6">
          <span className="font-bold text-yellow-400 uppercase">
            Easy Donate
          </span>
        </div>
        <nav className="mt-6">
          <div>
            <NavLink
              activeClassName="text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700"
              className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
              to="/dashboard/donate"
            >
              <span className="text-left">
                <i className="bx bxs-donate-blood" />
              </span>
              <span className="mx-4 text-sm font-normal">Donate</span>
            </NavLink>
            <NavLink
              activeClassName="text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700"
              className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
              to="/dashboard/organizations"
            >
              <span className="text-left">
                <i className="bx bxs-donate-blood" />
              </span>
              <span className="mx-4 text-sm font-normal">Organizations</span>
            </NavLink>
            <NavLink
              activeClassName="text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700"
              className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
              to="/dashboard/home"
            >
              <span className="text-left">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">
                List of products available
              </span>
            </NavLink>
            <NavLink
              className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
              activeClassName="text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700"
              to="/dashboard/settings"
            >
              <span className="text-left">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="w-5 h-5"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z" />
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">Settings</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Aside
