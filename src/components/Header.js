import { Link } from "react-router-dom";

import { mainLogo } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={mainLogo} />
      </Link>
      <ul className="nav-items">
        <li>
          <Link className="link-tag" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-tag" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link-tag" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link-tag" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
