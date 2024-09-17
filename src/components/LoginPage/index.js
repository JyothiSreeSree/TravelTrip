import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'
import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showErrMsg: true, errorMsg: error})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    event.preventDefault()
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    event.preventDefault()
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showErrMsg, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const buttonIcon = showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />
    const passwordInputType = showPassword ? 'text' : 'password'
    return (
      <div className="loginPageContainer">
        <form className="loginContainer" onSubmit={this.onSubmitLogin}>
          <h1 className="loginHeading">Travel Trip</h1>
          <div className="usernameContainer">
            <label htmlFor="username" className="usernameLabel">
              Username
            </label>
            <input
              className="usernameInput"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="passwordContainer">
            <label htmlFor="password" className="passwordLabel">
              Password
            </label>

            <div className="passwordInnerContainer">
              <input
                className="passwordInput"
                id="password"
                type={passwordInputType}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              <button
                type="button"
                data-testid="show-password"
                onClick={this.onShowPassword}
                className="passwordEye"
              >
                {buttonIcon}
              </button>
            </div>
          </div>
          {showErrMsg && <p className="errorMsg">{errorMsg}</p>}
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginPage
