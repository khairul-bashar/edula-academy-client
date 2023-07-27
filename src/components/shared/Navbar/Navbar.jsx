import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Menu from './Menu/Menu';

const Navbar = () => {
    return (
      <div className="fixed w-full bg-white z-10 shadow-s">
        <div className="py-3 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gpa-3 md:gap-0">
                        <Logo />
                        <Menu/>
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Navbar;