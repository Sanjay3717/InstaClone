import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {
  LoginContainer,
  LoginLeftImageContainer,
  LeftImage,
  LoginRightContainer,
  LoginLogo,
  LoginHeading,
  FormContainer,
  FormInput,
  LoginformLabel,
  LoginButton,
  ErrorMessageText,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    isError: false,
  }

  onUserNameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMessage: errorMsg, isError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMessage, isError} = this.state
    return (
      <LoginContainer>
        <LoginLeftImageContainer>
          <LeftImage
            src="https://res.cloudinary.com/dzy3vcadj/image/upload/v1692690139/InstaClone/Login_Image_u4v8kp.png"
            alt="login-picture"
          />
        </LoginLeftImageContainer>
        <LoginRightContainer>
          <LoginLogo
            src="https://res.cloudinary.com/dzy3vcadj/image/upload/v1692690144/InstaClone/Login_Image_Logo_e7fyqj.png"
            alt="logo"
          />
          <LoginHeading>Insta Share</LoginHeading>
          <FormContainer onSubmit={this.submitForm}>
            <LoginformLabel htmlFor="username">USERNAME</LoginformLabel>
            <FormInput
              type="text"
              id="username"
              onChange={this.onUserNameChange}
            />

            <LoginformLabel htmlFor="password">PASSWORD</LoginformLabel>
            <FormInput
              type="password"
              id="password"
              onChange={this.onPasswordChange}
            />
            {isError ? (
              <ErrorMessageText>{errorMessage}</ErrorMessageText>
            ) : null}
            <LoginButton type="submit">Login</LoginButton>
          </FormContainer>
        </LoginRightContainer>
      </LoginContainer>
    )
  }
}

export default Login
