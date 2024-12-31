import {useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'
import './index.css'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showErrMsg, setShowErrMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const history = useHistory()

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onSubmitFailure = error => {
    setShowErrMsg(true)
    setErrorMsg(error)
  }

  const onSubmitLogin = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const onShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const buttonIcon = showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />
  const passwordInputType = showPassword ? 'text' : 'password'

  return (
    <div className="loginPageContainer">
      <form className="loginContainer" onSubmit={onSubmitLogin}>
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
            onChange={event => setUsername(event.target.value)}
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
              onChange={event => setPassword(event.target.value)}
            />
            <button
              type="button"
              data-testid="show-password"
              onClick={onShowPassword}
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

export default LoginPage
