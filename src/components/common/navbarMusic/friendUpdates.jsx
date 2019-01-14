import React from 'react';
import FriendMusicUpdates from './frUpdFriend';
import "./css/friendUpdates.css";

const FriendUpdates = () => {
  return (
    <div id="friendUpdates" className="grid-item_friend_updates tabItem">
      <FriendMusicUpdates />
    </div>
  );
}
 
export default FriendUpdates;