import { Link } from "react-router-dom";
import { DandruffIcon } from "../icons";
import { DeliveryIcon } from "../icons";
import "./search.css";

const SearchBar = () => {
  return (
    <section>
      <Link to='/about/delivery' className='delivery'>
        <DeliveryIcon />
        Delivery all around Ukraine!
      </Link>
      <div>
        <input placeholder='Пошук' />
        <DandruffIcon />
      </div>
    </section>
  );
};

export default SearchBar;
