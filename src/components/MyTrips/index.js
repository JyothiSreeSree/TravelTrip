import {withRouter, Link} from 'react-router-dom'
import Header from '../Header'
import TravelContext from '../../context/TravelContext'

import './index.css'

const MyTrips = () => (
  <TravelContext.Consumer>
    {value => {
      const {myTripsList} = value
      const isCreatedList = myTripsList.length >= 1

      return (
        <div className="myTripsContainer">
          <Header className="header" />
          {!isCreatedList && (
            <div className="myTripsContentContainer">
              <img
                src="https://res.cloudinary.com/dsfextndf/image/upload/v1715695116/Vector_rjv87k.png"
                alt="no trips"
                className="noTripImage"
              />
              <p className="noTripHeading">No upcoming trips.</p>
              <p className="noTripDescription">
                When you book a trip, you will see your trip details here.
              </p>
              <Link to="/book-a-new-trip">
                <button className="noTripButton" type="button">
                  Book a new trip
                </button>
              </Link>
            </div>
          )}
          {isCreatedList && (
            <div className="tripsListContainer">
              <h1 className="myTripsHeading">My Trips</h1>
              <ul className="myTripsListUl">
                {myTripsList.map(eachTrip => (
                  <li className="myTripsItemContainer" key={eachTrip.id}>
                    <h1 className="tripItemHeading">{eachTrip.endLocation}</h1>
                    <div>
                      <p className="dateText">Date</p>
                      <p className="dateToText">{`${eachTrip.startDate} to ${eachTrip.endDate}`}</p>
                    </div>
                    <button type="button" className="tripCancelBtn">
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </TravelContext.Consumer>
)

export default withRouter(MyTrips)
