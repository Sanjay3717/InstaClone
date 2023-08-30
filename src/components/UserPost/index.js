import {Component} from 'react'
import Cookies from 'js-cookie'
import UserPostItem from '../UserPostItem'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class UserPost extends Component {
  state = {
    userPostDetails: [],
    isLoading: false,
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getUserPostDetails()
  }

  getUserPostDetails = async () => {
    this.setState({isLoading: true, apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/insta-share/posts'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const formattedData = data.posts.map(eachItem => ({
        comments: eachItem.comments,
        createdAt: eachItem.created_at,
        likesCount: eachItem.likes_count,
        caption: eachItem.post_details.caption,
        imageUrl: eachItem.post_details.image_url,
        postId: eachItem.post_id,
        profilePic: eachItem.profile_pic,
        userId: eachItem.user_id,
        userName: eachItem.user_name,
      }))
      this.setState({
        userPostDetails: formattedData,
        isLoading: false,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({isLoading: false, apiStatus: apiStatusConstant.failure})
    }
  }

  renderSuccessView = () => {
    const {userPostDetails} = this.state
    return (
      <>
        {userPostDetails.map(eachPost => (
          <UserPostItem key={eachPost.postId} postDetails={eachPost} />
        ))}
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>{this.renderSuccessView()}</h1>
      </div>
    )
  }
}
export default UserPost
