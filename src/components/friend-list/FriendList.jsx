import friends from './friends.json';
import FriendList  from './FriendListItem'

export default function FriendListComponent() {
    return (
        <div>
            <FriendList  friends={friends} />
        </div>
        
    )
}


