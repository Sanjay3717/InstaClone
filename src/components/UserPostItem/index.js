import './index.css'

const UserPostItem = props => {
  const {postDetails} = props
  const {comments} = postDetails
  const updatedComments = comments.map(eachComment => ({
    userId: eachComment.user_id,
    userName: eachComment.user_name,
    comment: eachComment.comment,
  }))
  console.log(updatedComments)
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
    </div>
  )
}
export default UserPostItem
