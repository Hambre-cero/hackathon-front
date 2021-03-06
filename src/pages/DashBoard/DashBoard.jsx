import PropTypes from 'prop-types'
import Aside from '../../components/DashBoard/Aside/Aside'
import Header from '../../components/DashBoard/Header/Header'

const DashBoard = ({ children }) => {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
      <div className="flex items-start justify-between">
        <Aside />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap items-center justify-center h-full sm:flex-row">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

DashBoard.propTypes = {
  children: PropTypes.node.isRequired
}

export default DashBoard
