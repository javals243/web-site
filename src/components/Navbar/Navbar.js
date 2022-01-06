import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavIcon,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./Navbar.element";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
const  Navbar=()=> {
  const [click, setClick] = useState();
   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = ()=>{
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
      setButton(true)
    }
  }
  const closeMobileMenu = ()=>setClick(false)
  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize',showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu} >
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} >
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {
                  button ? (
                    <NavBtnLink to="/sign-up">
                      <Button primary>
                        SIGN UP 
                      </Button>
                    </NavBtnLink>
                  ):(
                    <NavBtnLink to="/sign-up">
                      <Button primary fontBig >
                        SIGN UP 
                      </Button>
                    </NavBtnLink>
                  )
                }
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
