import friends from './friends.json';
import FriendList  from './FriendListItem'
import { ContainerFriends } from './Friends.styled'


export default function FriendListComponent() {
    return (
        <ContainerFriends>
            <FriendList  friends={friends} />
        </ContainerFriends>
        
    )
}


