import PropTypes from 'prop-types';

export default function FriendList(props) {
    const friends = props.friends

      return (
    <ul class="friend-list">
       {friends.map(friend => (
           
           <FriendListItem key={friend.id} friend={friend} />
       ))}
    </ul>
)
    
}


const FriendListItem = (props) => {
    const friend = props.friend
    return ( 
   
            <li class="item">
            <span class="status">{friend.isOnline? "Online" : "Offline"}</span>
            <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p class="name">{friend.name}</p>
            </li >
        
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