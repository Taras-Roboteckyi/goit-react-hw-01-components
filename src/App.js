
import ProfileApp from "./components/social-profile/Profilemarkup";
import user from './data/user.json'

import StatisticApp from "./components/statistics/Statisticsmarkup";
import data from './data/data.json'

import FriendListApp from "./components/friend-list/FriendListItem";
import friends from './data/friends.json';
import { ContainerFriends } from './components/friend-list/Friends.styled';

import TransactionApp from "./components/transaction-history/TransactionTableRow";
import transactions from './data/transactions.json';
import { ContainerTransaction } from './components/transaction-history/Transaction.styled';

import {Container} from "./App.styled"



function App() {
  return (
    <Container>
      <ProfileApp
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
          />
      

      <StatisticApp title="Upload stats" stats={data} />
      <StatisticApp stats={data} />

      
      <ContainerFriends>
            <FriendListApp friends={friends} />
      </ContainerFriends>
      
      
       <ContainerTransaction>
        <TransactionApp items={transactions} />
      </ContainerTransaction>
      
    </Container>
  );
}

export default App;
