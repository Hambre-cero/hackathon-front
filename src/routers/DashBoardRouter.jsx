import { Redirect, Route, Switch } from 'react-router-dom'
import Donation from '../components/DashBoard/Donation/Donation'
import Home from '../components/DashBoard/Home/Home'
import Organizations from '../components/DashBoard/Organizations/Organizations'
import ProductDetails from '../components/DashBoard/ProductDetails/ProductDetails'
import Settings from '../components/DashBoard/Settings/Settings'
import OrgDetails from '../components/OrgDetails/OrgDetails'
import DashBoard from '../pages/DashBoard/DashBoard'

const DashBoardRouter = () => {
  return (
    <DashBoard>
      <Switch>
        <Route exact path="/dashboard/home" component={Home} />
        <Route exact path="/dashboard/donate" component={Donation} />
        <Route
          exact
          path="/dashboard/organizations"
          component={Organizations}
        />
        <Route exact path="/dashboard/settings" component={Settings} />
        <Route exact path="/dashboard/product/:id" component={ProductDetails} />
        <Route exact path="/dashboard/org/:id" component={OrgDetails} />
        <Redirect to="/dashboard/home" />
      </Switch>
    </DashBoard>
  )
}

export default DashBoardRouter
