import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {CiHome} from 'react-icons/ci'
import {RiSuitcase2Line} from 'react-icons/ri'
import {SlLogout} from 'react-icons/sl'
import './index.css'

const Header = props => {
  const {history} = props
  const onLoggingOut = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <nav className="desktopNavbar">
        <h1 className="headerLogo">Travel Trip</h1>
        <ul className="listContainer">
          <Link to="/" className="link">
            <li className="home">Home</li>
          </Link>
          <Link to="/my-trips" className="link">
            <li className="myTrips">My Trips</li>
          </Link>
        </ul>
        <button type="button" className="logoutButton" onClick={onLoggingOut}>
          Logout
        </button>
      </nav>
      <footer className="mobileNavbar">
        <Link to="/">
          <CiHome className="homeIcon" />
        </Link>
        <Link to="/my-trips" className="link">
          <RiSuitcase2Line className="myTripsIcon" />
        </Link>

        <SlLogout className="logoutIcon" onClick={onLoggingOut} />
      </footer>
    </>
  )
}

export default withRouter(Header)
