import logo from "../assets/icons/utensils-solid.svg";
import chartIcon from "../assets/icons/chart.svg";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" />
        <span>Food's Restaurant</span>
      </div>
      <img src={chartIcon} className="chart" alt="chart" />
    </div>
  );
};
export default Header;
