import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="menu">
      <div className="menu-main">
        <h1>Welcome to Food's Kichen</h1>
        <Link to="/menu">
          <button>Go to Menu</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
