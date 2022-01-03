
import ProfileApp from "./components/social-profile/Profilemarkup";
import user from './data/user.json'

import StatisticApp from "./components/statistics/Statistic";
import FriendListComponent from "./components/friend-list/FriendList";
import TransactionApp from "./components/transaction-history/TransactionHistory";
import {Container} from "./App.styled"



function App() {
  return (
    <Container>
      <ProfileApp
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
         likes={user.stats.likes} />
      

      <StatisticApp />
      <FriendListComponent />
      <TransactionApp />
    </Container>
  );
}

export default App;
