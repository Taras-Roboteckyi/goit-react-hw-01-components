import PropTypes from 'prop-types';
import {
  ContainerProfile,
  Description,
  Avatar,
  Name,
  Text,
  ProfileList,
  Label
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
    <Name>{username}</Name>
    <Text>{tag}</Text>
    <Text>{location}</Text>
  </Description>

  <ProfileList>
    <Label>
      <span>Followers</span>
      <span>{followers}</span>
    </Label>
    <Label>
      <span>Views</span>
      <span>{views}</span>
    </Label>
    <Label>
      <span>Likes</span>
      <span>{likes}</span>
    </Label>
  </ProfileList>
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