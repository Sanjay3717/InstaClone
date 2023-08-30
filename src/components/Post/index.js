import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const StoryItem = props => {
  const {storyInformation} = props
  const {userName} = storyInformation
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div>
      <h1>Stories</h1>
      <Slider {...settings}>
        {storyInformation.map(eachLogo => {
          const {userId, storyUrl} = eachLogo
          return (
            <div className="slick-item" key={userId}>
              <img className="logo-image" src={storyUrl} alt="company logo" />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default StoryItem
