import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={null} />
      </Switch>
    </Router>
  )
}

export default AppRouter
