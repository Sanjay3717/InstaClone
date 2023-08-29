import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import StoryItem from '../StoryItem'

import './index.css'

class Stories extends Component {
  state = {
    storyDetails: [],
  }

  componentDidMount() {
    this.getStoryDetails()
  }

  getStoryDetails = async () => {
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

      this.setState({storyDetails: formattedData})
    }
  }

  renderSlider = () => {
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

  render() {
    const {storyDetails} = this.state
    const {storyUrl, userId, userName} = storyDetails
    console.log(storyDetails)

    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default Stories
