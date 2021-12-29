import user from './user.json'
import Profile from './Profilemarkup'



export default function ProfileApp() {
    return (
      <>
          <Profile
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
         />
         </>
    )
}
