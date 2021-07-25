import { Link } from 'react-router-dom'
import { useContext } from 'react'

import Navbar from '../../components/Landing/Navbar/Navbar'
import useForm from '../../hooks/useForm'
import { AutContext } from '../../providers/AuthProvivider'

const Register = () => {
  const { register } = useContext(AutContext)

  const initialState = {
    userName: 'example',
    firstName: 'example',
    lastName: 'example',
    email: 'example@gmail.com',
    password: '1234'
  }

  const { handleInputChange, values } = useForm(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    register(values.userName, values.email, values.password)
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
            Create a new account
          </div>
          <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have an account ?
            <Link
              to="/login"
              className="text-sm text-blue-500 underline hover:text-blue-700"
            >
              Sign in
            </Link>
          </span>
          <div className="p-6 mt-8">
            <form action="#" onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="userName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="userName"
                    placeholder="Name user"
                    onChange={handleInputChange}
                    value={values.userName}
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="firstName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleInputChange}
                    value={values.firstName}
                  />
                </div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="lastName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleInputChange}
                    value={values.lastName}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={values.password}
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center mt-6">
              <div>
                <label
                  className="flex items-center space-x-3 mb-3"
                  htmlFor="checked-demo"
                >
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    <a
                      href="/"
                      className="text-sm text-blue-500 underline hover:text-blue-700"
                      target="_blank"
                    >
                      Acepta terminos y condiciones
                    </a>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
