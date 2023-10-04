import { useSelector } from "react-redux";
import ProfileIcon from "../icons/profile";
import "./header.css";
import { selectUser } from "../../../store";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <header className='root'>
      <h1>
        <Link to='/'>
          <span className='shop'>shop</span>cart
        </Link>
      </h1>
      <Link className='profile_block' to={user ? "/profile" : "/login"}>
        <ProfileIcon />
        {user ? <h2>{user.name}</h2> : <h2>Sign In</h2>}
      </Link>
    </header>
  );
};

export default Header;
