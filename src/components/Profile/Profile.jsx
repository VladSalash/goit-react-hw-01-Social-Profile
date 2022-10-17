import PropTypes from 'prop-types';
import { ProfileContainer ,DescriptionContainer, AvatarImg, Name, Tag, Location, ListStats, ItemStats, Label, Quantity } from './Profile.styled'

const Profile = ({
  username,
  tag,
  location,
  avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <AvatarImg
          src={ avatar }
          alt={ username }

        />
        <Name>{ username }</Name>
        <Tag>@{ tag }</Tag>
        <Location>{ location }</Location>
      </DescriptionContainer>

      <ListStats>
        <ItemStats>
          <Label>Followers:</Label>
          <Quantity>{ followers }</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Views:</Label>
          <Quantity>{ views }</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Likes:</Label>
          <Quantity>{ likes }</Quantity>
        </ItemStats>
      </ListStats>
    </ProfileContainer>
  );
}

console.log(Profile)

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  })

};

export default Profile;
