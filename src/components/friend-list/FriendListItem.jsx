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
          {friends.map(({isOnline, avatar, name,id})=> {
           // console.log(friend);
            return <FriendListItem key={id} friend={{ isOnline, avatar, name }} />
          })}
    </FriendListStyle>
)
    
}


const FriendListItem = (props) => {
    const {isOnline, avatar, name} = props.friend
    return ( 
   
            <Item>
            <Status>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
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