import { Switch, Route } from "react-router-dom"

const Routes = () => {
  return (
    <Switch>
      <Route path='/characters'>
        <div>chars</div>
      </Route>
      <Route path='/episodes'>
        <div>eps</div>
      </Route>
      <Route path='/locations'>
        <div>locs</div>
      </Route>
    </Switch>
  )
}

export default Routes