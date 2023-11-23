import { NavLink as NavLinkMui, NavLinkProps } from 'react-router-dom';

export type NavLinkItem = {
  label: string;
  path: string;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <NavLinkMui
      {...props}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: 'white',
          backgroundColor: isActive ? '#2E308D' : 'transparent',
          padding: '0.5rem 1rem',
          width: '100%',
          textDecoration: 'none',
          transition: 'all ease 200ms'
        };
      }}
    />
  );
};
export default NavLink;
