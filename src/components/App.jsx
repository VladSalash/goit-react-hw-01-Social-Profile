import {Cont} from '../Container/Container.styled';


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
    <Cont>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        />
      </Cont>

       <Cont>
        <Statistics title="UPLOAD STATS" stats={data} />
      </Cont>

      <Cont>
        <FriendList friends={friends} />
      </Cont>

      <Cont>
        <TransactionHistory items={transactions} />
        </Cont>
      </>
  );
};
