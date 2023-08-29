import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Header = styled.nav`
  width: 1440px;
  height: 64px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 490px) {
    display: none;
  }
`

export const HeaderLogoContainer = styled.div`
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderLogo = styled.img`
  width: 59px;
  height: 30px;
  flex-shrink: 0;
`
export const HeaderLogoText = styled.h1`
  color: #262626;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  margin-top: -1px;
`

export const HeaderContentContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SearchTabContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SearchTab = styled.input`
  width: 214px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background: #fafafa;
  color: #dbdbdb;
  padding-left: 15px;
  border: 0px;
  color: black;
`
export const SearchTabImage = styled.div`
  background-color: #dbdbdb;
  width: 34px;
  height: 26px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeaderButtons = styled.button`
  border: 0px;
  background: none;
  cursor: pointer;
  color: #262626;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`
export const LogoutButton = styled.div`
  border: 0px;
  background-color: #4094ef;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25px;
  width: 100px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin-top: 30px;
`
