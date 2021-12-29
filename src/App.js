//import logo from './logo.svg';
//import './App.css';
import ProfileApp from "./components/social-profile/Profile";
import StatisticApp from "./components/statistics/Statistic";
import FriendListComponent from "./components/friend-list/FriendList";
import TransactionApp from "./components/transaction-history/TransactionHistory";
import {Container} from "./App.styled"
function App() {
  return (
    <Container>
      <ProfileApp />
      <StatisticApp />
      <FriendListComponent />
      <TransactionApp />
    </Container>
  );
}

export default App;
