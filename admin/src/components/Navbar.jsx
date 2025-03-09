import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
const Navbar = ({ setToken }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setToken("");
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <img src={assets.logo} alt="" className="w-[max(10%,80px)]" />
      <button
        onClick={handleClick}
        className="px-5 py-2 text-xs text-white bg-gray-600 rounded-full sm:px-7 sm:py-2 sm:test-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
