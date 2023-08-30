import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Stories extends Component {
  state = {
    storyDetails: [],
    isLoading: false,
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getStoryDetails()
  }

  getStoryDetails = async () => {
    this.setState({isLoading: true, apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/insta-share/stories'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.users_stories.map(eachItem => ({
        storyUrl: eachItem.story_url,
        userId: eachItem.user_id,
        userName: eachItem.user_name,
      }))

      this.setState({
        storyDetails: formattedData,
        isLoading: false,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({isLoading: false, apiStatus: apiStatusConstant.failure})
    }
  }

  renderSuccessView = () => {
    const {storyDetails} = this.state
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      dotsClass: 'slick-dots',

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {storyDetails.map(eachLogo => (
            <div className="slick-item" key={eachLogo.userId}>
              <div className="carousel-item">
                <img
                  src={eachLogo.storyUrl}
                  className="story-image"
                  alt="company logo"
                />
                <p className="story-name">{eachLogo.userName}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  renderInProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div>
      <button type="button">Retry</button>
    </div>
  )

  renderOutput = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderInProgressView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderOutput()}</div>
      </div>
    )
  }
}

export default Stories
