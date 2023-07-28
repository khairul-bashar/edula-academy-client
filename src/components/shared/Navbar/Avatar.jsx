import React, { useContext } from 'react';
import avatarImg from "../../../../src/assets/Images/placeholder.jpg";
import { AuthContext } from '../../../Providers/AuthProvider';

const Avatar = () => {
  const { user } = useContext(AuthContext)
    return (
      <img
        className="rounded-full"
        src={user && user.photoURL ? user.photoURL : avatarImg}
        alt="profile"
        height="30"
        width="30"
      />
    );
};

export default Avatar;