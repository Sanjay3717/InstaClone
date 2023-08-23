import {Component} from 'react'

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
} from './styledComponents'

class Login extends Component {
  render() {
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
          <FormContainer>
            <LoginformLabel htmlFor="username">USERNAME</LoginformLabel>
            <FormInput type="text" id="username" />
            <LoginformLabel htmlFor="password">PASSWORD</LoginformLabel>
            <FormInput type="password" id="password" />
            <LoginButton type="submit">Login</LoginButton>
          </FormContainer>
        </LoginRightContainer>
      </LoginContainer>
    )
  }
}

export default Login
