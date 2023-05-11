import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul className="fixed top-0 left-0 w-full justify-center flex bg-[#bd0000] h-20 text-xl items-center ">
        <li>
          <Link to="/" className="mr-auto pl-4">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Menu" className="mx-10">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" className="pr-4">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
