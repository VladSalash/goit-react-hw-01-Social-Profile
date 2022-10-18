import PropTypes from 'prop-types'
import { Item, Status, AvatarImg, Name } from './FriendList.style'

const FriendItem = ({ isOnline, avatar, name }) =>{
  return (
    <Item>
       <Status style={{backgroundColor: isOnline ? 'green' : 'red'}}>{isOnline}</Status>
      <AvatarImg src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Item>
  )
};



FriendItem.propTypes = {
   isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
};


export default FriendItem;
