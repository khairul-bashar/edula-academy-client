
import Headroom from "react-headroom";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu/Menu";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Headroom>
          <Container>
            <div className="flex flex-row items-center justify-between gpa-3 md:gap-0">
              <Logo />
              <Menu />
              <MenuDropdown />
            </div>
          </Container>
        </Headroom>
      </div>
    </div>
  );
};

export default Navbar;
