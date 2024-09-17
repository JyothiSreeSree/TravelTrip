import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="notfoundContainer">
      <img
        className="notfoundImage"
        src="https://res.cloudinary.com/drmbcia6x/image/upload/v1721923897/hj2dyd7yutj2l3ytnydv.png"
        alt="not found"
      />
      <h1 className="notfoundHeading">Page Not Found</h1>
      <p className="notfoundPara">
        We are sorry, the page you requested could not be found
      </p>
      <div>
        <Link to="/user-details">
          <button type="button" className="bookingButton">
            Book a new trip
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default NotFound
