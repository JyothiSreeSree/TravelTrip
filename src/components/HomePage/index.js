import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const HomePage = () => (
  <div className="homeContainer">
    <Header className="header" />
    <div className="homeTextContainer">
      <img
        className="travelImage"
        src="https://res.cloudinary.com/drmbcia6x/image/upload/v1721886405/hkcq1jacxkcixzzb3jm8.png"
        alt="travelimage"
      />
      <div className="homeTextInnerContainer">
        <h1 className="homeTitle">Travel. Relax. Memories.</h1>
        <p className="homeDescription">
          With travel trip you can experience new travel and the best tourist
          destination
        </p>
        <Link to="/book-a-new-trip">
          <button type="button" className="bookingButton">
            Book a new trip
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default HomePage
