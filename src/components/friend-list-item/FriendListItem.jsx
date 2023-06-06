import React from 'react';
import PropTypes from 'prop-types';
import friendListItemStyle from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={friendListItemStyle.item}>
      <span
        className={`${friendListItemStyle.status} ${
          isOnline ? friendListItemStyle.online : ''
        }`}
      >
        {isOnline}
      </span>
      <img
        className={friendListItemStyle.avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={friendListItemStyle.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
