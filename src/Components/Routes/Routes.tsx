import { ReactNode } from "react"
import { Switch, Route } from "react-router-dom"
import Grid from "../Grid/Grid"

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/:selection' render={({match}): ReactNode => {
        return <Grid selection={match.params.selection}/>
      }}/>
      <Route exact path='/:thing/episodes' render={({match}): ReactNode => {
        console.log(match) 
        return <div>{match.params.thing}</div>
      }}/>
    </Switch>
  )
}

export default Routes