import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = (handleClick) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        to={link.to}
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="mr-2 h-8 w-8" />
        {link.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img alt="logo" src={logo} />

        <NavLinks />
      </div>

      <div className="md:hidden block absolute top-6 right-3 w-10">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="h-8 w-8 mr-2 text-white"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          />
        ) : (
          <HiOutlineMenu
            className="h-8 w-8 mr-2 text-white"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          />
        )}
      </div>
      <div
        className={`md:hidden absolute from-white/10 to-[#483d8b] h-screen w-2/3 top-0 z-10 p-6 bg-gradient-to-tl backdrop-blur-lg smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img alt="logo" src={logo} />

        <NavLinks
          handleClick={() => {
            setMobileMenuOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default Sidebar;
