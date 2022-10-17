import FriendItem from './FriendItem';
import PropTypes from 'prop-types'
import { FrList } from './FriendList.style'


const FriendList = ({ friends }) => {
  return (
    <FrList>
      {friends.map(({id, avatar, name, isOnline }) => (
        <FriendItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
        />

      ))}
    </FrList>
  );
};






FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
    ),
};

export default FriendList;
