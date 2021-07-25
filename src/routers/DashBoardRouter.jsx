import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../components/DashBoard/Home/Home'
import Settings from '../components/DashBoard/Settings/Settings'
import DashBoard from '../pages/DashBoard/DashBoard'
import InfoProduct from '../components/DashBoard/InfoProduct/InfoProduct'

const DashBoardRouter = () => {
  return (
    <DashBoard>
      <Switch>
        <Route exact path="/dashboard/home" component={Home} />
        <Route exact path="/dashboard/settings" component={Settings} />
        <Route
          exact
          path="/dashboard/:idItem/product"
          component={InfoProduct}
        />
        <Redirect to="/dashboard/home" />
      </Switch>
    </DashBoard>
  )
}

export default DashBoardRouter
