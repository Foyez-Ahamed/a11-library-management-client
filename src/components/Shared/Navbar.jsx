import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Navbar = () => {


    const navItems = (
        <>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] ml-4 font-medium ">Home</li>
          </NavLink>
    
          <NavLink
            to="/addBook"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium ml-4">Add Book</li>
          </NavLink>
    
          <NavLink
            to="/allBooks"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium  ml-4">All Books</li>
          </NavLink>
    
          <NavLink
            to="/borrowedBooks"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium ml-4">Borrowed Books</li>
          </NavLink>
        </>
      );


    return (
        <div>
        <div className="navbar shadow-lg rounded-md">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4 font-medium"
              >
                {navItems}
              </ul>
            </div>
  
            <Link to="/">
              <a className="cursor-pointer">
                {" "}
                <img
                  className="w-[60px] lg:w-[100px] rounded-md lg:ml-[-12px] lg:pt-2"
                  src={logo}
                  alt="logo image"
                />{" "}
              </a>
            </Link>

          </div>
  
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
  
          <div className="navbar-end">
            <button className="text-[16px] font-medium bg-[#0087EB] hover:bg-gray-700  text-white px-4 py-1 lg:py-2 rounded-md">Login</button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;