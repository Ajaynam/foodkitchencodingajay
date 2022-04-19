import { useEffect, useState } from "react";
import { Row } from "reactstrap";

import { Link, Outlet, useNavigate } from "react-router-dom";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch("./data/feeds.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  };
  //arr[0]
  const handleAddOrder = (obj) => {
    let arr = [...data];
    arr[obj.id].total = obj.total;
    setData([...arr]);
    console.log(arr[obj.id], 33);
  };

  return (
    <div>
      <div>
        {data ? (
          <Row>
            {data.map((obj, i) => (
              <MenuCard data={obj} id={i} handleAddOrder={handleAddOrder} />
            ))}
          </Row>
        ) : (
          <p>...loading</p>
        )}
      </div>
      <div className=" Checkout">
        <Link to="/Checkout">
          <button>CHECKOUT</button>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
