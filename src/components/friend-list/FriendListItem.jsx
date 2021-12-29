import PropTypes from 'prop-types';
import {
  FriendListStyle,
  Item,
  Status,
  Avatar,
Name} from './Friends.styled'

export default function FriendList(props) {
    const friends = props.friends

      return (
    <FriendListStyle>
       {friends.map(friend => (
           
           <FriendListItem key={friend.id} friend={friend} />
       ))}
    </FriendListStyle>
)
    
}


const FriendListItem = (props) => {
    const friend = props.friend
    return ( 
   
            <Item>
            <Status>{friend.isOnline}</Status>
            <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
            </Item >
        
    )
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
  })),
  
}