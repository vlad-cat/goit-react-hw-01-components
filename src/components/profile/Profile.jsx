import React from 'react';
import PropTypes from 'prop-types';
import profileStyle from './Profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={profileStyle.profile}>
      <div className={profileStyle.description}>
        <img src={avatar} alt={username} className={profileStyle.avatar} />
        <p className={profileStyle.name}>{username}</p>
        <p className={profileStyle.tag}>@{tag}</p>
        <p className={profileStyle.location}>{location}</p>
      </div>

      <ul className={profileStyle.stats}>
        <li className={profileStyle.stats_item}>
          <span className={profileStyle.label}>Followers</span>
          <span className={profileStyle.quantity}>{stats.followers}</span>
        </li>
        <li className={profileStyle.stats_item}>
          <span className={profileStyle.label}>Views</span>
          <span className={profileStyle.quantity}>{stats.views}</span>
        </li>
        <li className={profileStyle.stats_item}>
          <span className={profileStyle.label}>Likes</span>
          <span className={profileStyle.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
