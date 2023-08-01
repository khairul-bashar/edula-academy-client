import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/Images/camera.png';

const Logo = () => {
    return (
      <Link className="flex items-center " to="/">
        <div className="bg-primary p-4 rounded-full w-20 h-20">
          <img className="" src={logoImg} alt="Logo" width={70} height={70} />
        </div>
        <h1 className="text-3xl font-semibold ms-3">EduLa</h1>
      </Link>
    );
};

export default Logo;