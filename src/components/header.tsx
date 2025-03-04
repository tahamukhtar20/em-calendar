import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-blue-600 flex justify-between py-2 items-center">
      <div className="w-36 text-white mx-5">
        <p>Virtual Event Mangement</p>
      </div>
      <div className="flex text-white px-2 gap-2">
        <Link to="/calender" className="hover:text-gray-300">
          Calender
        </Link>
        <Link to="/calender" className="hover:text-gray-300">
          Live Chat
        </Link>
        <Link to="/calender" className="hover:text-gray-300">
          Dashboard
        </Link>
      </div>
      <div>
        <button className="bg-white  mx-5 text-blue-300 py-2 px-4">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
