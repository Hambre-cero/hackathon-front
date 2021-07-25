import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../components/DashBoard/Home/Home'
import DashBoard from '../pages/DashBoard/DashBoard'

const DashBoardRouter = () => {
  return (
    <DashBoard>
      <Switch>
        <Route exact path="/dashboard/home" component={Home} />
        <Redirect to="/dashboard/home" />
      </Switch>
    </DashBoard>
  )
}

export default DashBoardRouter
