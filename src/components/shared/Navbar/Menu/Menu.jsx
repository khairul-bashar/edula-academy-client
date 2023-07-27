import React from 'react';

import { Link } from 'react-router-dom';
import { menuArray } from './menuData';

const Menu = () => {
    return (
      <>
        {menuArray.map((item) => (
          <Link to={item.route}>{item.menuName}</Link>
        ))}
      </>
    );
};

export default Menu;