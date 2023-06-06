import Profile from 'components/profile';
import Statistics from 'components/statistics';
import FriendList from 'components/friend-list';
import TransactionHistory from 'components/transaction-history';
import transactionsData from 'data/transactions.json';
import statisticsData from 'data/data.json';
import friendsData from 'data/friends.json';
import user from 'data/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
      <FriendList friends={friendsData} />;
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
