import Container from './components/UI/Container/Container';

import Profile from 'components/Profile/Profile';
import user from './Jsons/user.json'
import Statistics from 'components/Statistics/Statistics';
import data from './Jsons/data.json';
import FriendList from 'components/FriendList/FriendList'
import friends from './Jsons/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from './Jsons/transactions.json';

export const App = () => {
  
  return (
    <>
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        />
      </Container>

       <Container>
        <Statistics title="UPLOAD STATS" stats={data} />
      </Container>

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory items={transactions} />
        </Container>
      </>
  );
};
