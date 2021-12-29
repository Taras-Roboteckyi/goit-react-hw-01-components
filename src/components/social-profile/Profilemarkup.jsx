import PropTypes from 'prop-types';
import {
  ContainerProfile,
  Description,
  Avatar
} from './Profile.styled';

const Profilemarkup = (props) => {
  const {username, tag, location, avatar, followers, views, likes} = props
    return (
     <ContainerProfile >
        <Description>
        <Avatar
      src={avatar}
      alt="User avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </Description>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
</ContainerProfile>
    )
}

export default Profilemarkup

Profilemarkup.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}