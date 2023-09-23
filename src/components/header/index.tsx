import ProfileIcon from "../icons/profile";
import "./header.css";

const Header = () => {
  return (
    <header className='root'>
      <h1>
        <span className='shop'>shop</span>cart
      </h1>
      <a className='profile_block' href='/profile'>
        <ProfileIcon />
        <h2>Sign In</h2>
      </a>
    </header>
  );
};

export default Header;
