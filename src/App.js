//import logo from './logo.svg';
//import './App.css';
import ProfileApp from "./components/social-profile/Profile";
import StatisticApp from "./components/statistics/Statistic";
import FriendListComponent from "./components/friend-list/FriendList";
import TransactionApp from "./components/transaction-history/TransactionHistory";

function App() {
  return (
    <div>
      <ProfileApp />
      <StatisticApp />
      <FriendListComponent />
      <TransactionApp />
    </div>
  );
}

export default App;
