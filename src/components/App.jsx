import {Container} from '../Container/Container.styled';


import Profile from 'components/Profile/Profile'
import user from './jsons/user.json';

import Statistics from 'components/Statistics/Statistics'
import data from './jsons/data.json';

import FriendList from 'components/FriendList/FriendList'
import friends from './jsons/friends.json';

import TransactionHistory from 'components/TransactionHistory/TransactionHistory'
import transactions from './jsons/transactions.json';


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
