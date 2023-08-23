import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`
export const LoginLeftImageContainer = styled.div`
  @media screen and (max-width: 490px) {
    display: none;
  }
`
export const LeftImage = styled.img`
  width: 582px;
  height: 373px;
  flex-shrink: 0;
`
export const LoginRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 15px;
`

export const LoginLogo = styled.img`
  width: 78px;
  height: 40px;
  flex-shrink: 0;
`
export const LoginHeading = styled.h1`
  color: #262626;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const LoginformLabel = styled.label`
  color: #262626;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.12px;
  text-transform: uppercase;
  margin-top: 20px;
`

export const FormInput = styled.input`
  width: 312px;
  height: 40px;
  flex-shrink: 0;
  color: #eeeeee;
  border-radius: 2px;
  background: #eee;
`

export const LoginButton = styled.button`
  display: flex;
  width: 312px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 20px;
  background-color: #4094ef;
  color: #ffffff;
  border-width: 0px;
  border-radius: 10px;
`
