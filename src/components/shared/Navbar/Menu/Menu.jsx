import React from 'react';

import { NavLink } from 'react-router-dom';
import { menuArray } from './menuData';

const Menu = () => {
    return (
      <div className='hidden md:flex items-center gap-3 text-base font-medium'>
        {menuArray.map((item) => (
          <NavLink key={item.menuName} to={item.route}>{item.menuName}</NavLink>
        ))}
      </div>
    );
};

export default Menu;