import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import Cookies from 'js-cookie'
import './index.css'
import {
  Header,
  HeaderLogo,
  HeaderLogoText,
  HeaderLogoContainer,
  HeaderContentContainer,
  SearchTabContainer,
  SearchTab,
  SearchTabImage,
  HeaderButtons,
  LogoutButton,
  HomeLink,
} from './styledComponents'

class Home extends Component {
  state = {
    isOpen: false,
  }

  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login/')
  }

  updateClickedStatus = () => {
    this.setState(
      prevState => ({
        isClicked: !prevState.isClicked,
      }),
      this.onHamburgerClick,
    )
  }

  onHamburgerClick = () => {
    console.log('Hello')
  }

  render() {
    const {isClicked} = this.state
    return (
      <>
        <Header>
          <HeaderLogoContainer>
            <HomeLink to="/">
              <HeaderLogo
                src="https://res.cloudinary.com/dzy3vcadj/image/upload/v1692690144/InstaClone/Login_Image_Logo_e7fyqj.png"
                alt="header logo"
              />
              <HeaderLogoText>Insta Share</HeaderLogoText>
            </HomeLink>
          </HeaderLogoContainer>
          <HeaderContentContainer>
            <SearchTabContainer>
              <SearchTab type="text" placeholder="Search Caption" />
              <button className="btn-style">
                <SearchTabImage>
                  <AiOutlineSearch />
                </SearchTabImage>
              </button>
            </SearchTabContainer>
            <HeaderButtons>Home</HeaderButtons>
            <HeaderButtons>Profile</HeaderButtons>

            <LogoutButton onClick={this.onLogout}>Logout</LogoutButton>
          </HeaderContentContainer>
        </Header>
        <nav className="all-small-device-container">
          <div className="small-logo-container">
            <img
              src="https://res.cloudinary.com/dzy3vcadj/image/upload/v1692690144/InstaClone/Login_Image_Logo_e7fyqj.png"
              alt="header logo"
              className="header-logo"
            />
            <h1 className="logo-name">Insta Share</h1>
          </div>
          <div className="hamburger-container">
            <button className="btn-style" onClick={this.updateClickedStatus}>
              <GiHamburgerMenu />{' '}
            </button>

            {isClicked ? (
              <ul className="header-list">
                <button className="btn-style">
                  <Link to="/" className="links">
                    <li>Home</li>
                  </Link>
                </button>
                <button className="btn-style">
                  <li>Search</li>
                </button>
                <button className="btn-style">
                  <li>Profile</li>
                </button>
                <button
                  className="btn-style logout-button"
                  onClick={this.onLogout}
                >
                  <li>Logout</li>
                </button>
              </ul>
            ) : null}
          </div>
        </nav>
      </>
    )
  }
}

export default Home
