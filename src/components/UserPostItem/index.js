import {Component} from 'react'
import {AiOutlineHeart, AiOutlineShareAlt} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import './index.css'

class UserPostItem extends Component {
  state = {
    allComments: [],
    postDetails: [],
  }

  componentDidMount() {
    this.getCommentDetails()
  }

  getCommentDetails = () => {
    const {postDetails} = this.props
    const {comments} = postDetails
    console.log(comments)
    const updatedComments = comments.map(eachComment => ({
      userId: eachComment.user_id,
      userName: eachComment.user_name,
      comment: eachComment.comment,
    }))
    this.setState({postDetails, allComments: updatedComments})
  }

  render() {
    const {postDetails, allComments} = this.state
    console.log(postDetails)

    return (
      <div className="post-container">
        <div className="user-details-container">
          <img
            src={postDetails.profilePic}
            className="post-profile-picture"
            alt="post profile"
          />
          <p className="profile-name">{postDetails.userName}</p>
        </div>

        <img src={postDetails.imageUrl} className="post-image" alt="post" />
        <div className="post-bottom-container">
          <div className="reactions-container">
            <AiOutlineHeart className="reaction-button" />
            <FaRegComment className="reaction-button" />
            <AiOutlineShareAlt className="reaction-button" />
          </div>
          <p className="likes-count">{postDetails.likesCount} likes</p>
          <p className="post-caption">{postDetails.caption}</p>
          <ul className="comments-list">
            {allComments.map(eachItem => {
              const {userName, comment} = eachItem
              return (
                <li className="comment-list-item">
                  <span className="comment-user-name">{userName}</span> {'\t\t'}
                  {comment}
                </li>
              )
            })}
          </ul>
          <p className="creation-time">{postDetails.createdAt}</p>
        </div>
      </div>
    )
  }
}
export default UserPostItem
