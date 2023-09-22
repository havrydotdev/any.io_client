import ProfileIcon from "../icons/profile";
import "./header.css";

const Header = () => {
  return (
    <header className="root">
      <h1>
        <span className="shop">shop</span>cart
      </h1>
      <div className="profile_block">
        <ProfileIcon />
        <h2>Sign In</h2>
      </div>
    </header>
  );
};

export default Header;
