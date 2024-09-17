import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import TravelContext from './context/TravelContext'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import BookANewTrip from './components/BookANewTrip'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    myTripsList: [],
  }

  addTripList = tripsDetails => {
    this.setState(prevState => ({
      myTripsList: [...prevState.myTripsList, tripsDetails],
    }))
  }

  render() {
    const {myTripsList} = this.state
    return (
      <TravelContext.Provider
        value={{
          myTripsList,
          addTripList: this.addTripList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookANewTrip}
          />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <Route component={NotFound} />
        </Switch>
      </TravelContext.Provider>
    )
  }
}

export default App
