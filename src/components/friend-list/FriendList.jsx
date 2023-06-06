import PropTypes from 'prop-types';
import FriendListItem from 'components/friend-list-item';
import React from 'react';
import friendListStyle from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={friendListStyle.friend__list}>
      {friends.map(({ avatar, name, isOnline }) => (
        <FriendListItem
          key={avatar}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
