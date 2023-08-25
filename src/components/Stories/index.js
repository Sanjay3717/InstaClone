import {Component} from 'react'
import Cookies from 'js-cookie'

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
      console.log(data)
    }
  }

  render() {
    return (
      <div>
        <p>Stories</p>
      </div>
    )
  }
}

export default Stories
