import {Component} from 'react'

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
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <Header>
        <HeaderLogoContainer>
          <HeaderLogo
            src="https://res.cloudinary.com/dzy3vcadj/image/upload/v1692690144/InstaClone/Login_Image_Logo_e7fyqj.png"
            alt="header logo"
          />
          <HeaderLogoText>Insta Share</HeaderLogoText>
        </HeaderLogoContainer>
        <HeaderContentContainer>
          <SearchTabContainer>
            <SearchTab type="text" placeholder="Search Caption" />
            <SearchTabImage>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M9.375 10C9.45312 10 9.53125 9.98535 9.60938 9.95605C9.6875 9.92676 9.75586 9.87956 9.81445 9.81445C9.93815 9.69075 10 9.54427 10 9.375C10 9.20573 9.93815 9.05925 9.81445 8.93555L7.94922 7.07031C8.22917 6.69922 8.44727 6.28906 8.60352 5.83984C8.75977 5.39062 8.83789 4.91862 8.83789 4.42383C8.83789 3.81185 8.72233 3.2373 8.49121 2.7002C8.26009 2.16309 7.94434 1.69434 7.54395 1.29395C7.14355 0.893555 6.6748 0.577799 6.1377 0.34668C5.60059 0.11556 5.0293 0 4.42383 0C3.81185 0 3.2373 0.11556 2.7002 0.34668C2.16309 0.577799 1.69434 0.893555 1.29395 1.29395C0.893555 1.69434 0.577799 2.16309 0.34668 2.7002C0.11556 3.2373 0 3.81185 0 4.42383C0 5.0293 0.11556 5.60059 0.34668 6.1377C0.577799 6.6748 0.893555 7.14355 1.29395 7.54395C1.69434 7.94434 2.16309 8.26009 2.7002 8.49121C3.2373 8.72233 3.81185 8.83789 4.42383 8.83789C4.91862 8.83789 5.39062 8.75977 5.83984 8.60352C6.28906 8.44727 6.69922 8.22917 7.07031 7.94922L8.93555 9.81445C8.99414 9.87956 9.0625 9.92676 9.14062 9.95605C9.21875 9.98535 9.29688 10 9.375 10ZM4.42383 7.58789C3.98112 7.58789 3.56771 7.50488 3.18359 7.33887C2.79948 7.17285 2.46419 6.94661 2.17773 6.66016C1.89128 6.3737 1.66504 6.03841 1.49902 5.6543C1.33301 5.27018 1.25 4.86003 1.25 4.42383C1.25 3.98112 1.33301 3.56771 1.49902 3.18359C1.66504 2.79948 1.89128 2.46419 2.17773 2.17773C2.46419 1.89128 2.79948 1.66504 3.18359 1.49902C3.56771 1.33301 3.98112 1.25 4.42383 1.25C4.86003 1.25 5.27018 1.33301 5.6543 1.49902C6.03841 1.66504 6.3737 1.89128 6.66016 2.17773C6.94661 2.46419 7.17285 2.79948 7.33887 3.18359C7.50488 3.56771 7.58789 3.98112 7.58789 4.42383C7.58789 4.86003 7.50488 5.27018 7.33887 5.6543C7.17285 6.03841 6.94661 6.3737 6.66016 6.66016C6.3737 6.94661 6.03841 7.17285 5.6543 7.33887C5.27018 7.50488 4.86003 7.58789 4.42383 7.58789Z"
                  fill="#989898"
                />
              </svg>
            </SearchTabImage>
          </SearchTabContainer>
          <HeaderButtons>Home</HeaderButtons>
          <HeaderButtons>Profile</HeaderButtons>

          <LogoutButton>Logout</LogoutButton>
        </HeaderContentContainer>
      </Header>
    )
  }
}

export default Home
