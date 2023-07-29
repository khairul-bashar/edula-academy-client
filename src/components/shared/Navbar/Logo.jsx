import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/Images/mortarboard.png';

const Logo = () => {
    return (
        <Link className='flex items-center' to="/">
            <img className='bg-primary p-4 rounded-full' src={logoImg} alt="Logo" width={70} height={70} /> 
            <h1 className='text-3xl font-semibold ms-3'>EduLa</h1>
        </Link>
    );
};

export default Logo;