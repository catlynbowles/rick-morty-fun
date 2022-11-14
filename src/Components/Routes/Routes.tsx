import { ReactNode } from "react"
import { Switch, Route } from "react-router-dom"
import Grid from "../Grid/Grid"

const Routes = () => {
  return (
    <Switch>
      <Route path='/:selection' render={({match}): ReactNode => {
        console.log(match)
        return <Grid selection={match.params.selection}/>
      }}/>
    </Switch>
  )
}

export default Routes