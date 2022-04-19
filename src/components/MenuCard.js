import { Col } from "reactstrap";
const MenuCard = (props) => {
  const { name, price, image } = props.data;
  let total = props.data.total || 0;
  let url = `../assets/${image}`;

  const handleOrder = (key) => {
    let obj = {};
    let totalcount = key == "add" ? 1 + total : total - 1;
    if (totalcount < 0) totalcount = 0;
    obj.total = totalcount;
    obj.id = props.id;
    props.handleAddOrder(obj);
  };
  return (
    <Col md="4" sm="6">
      <div className="imageCard">
        <img src={`${url}`} />
        <div className="price">
          <h2>{name}</h2>
          <span>Price: {price}</span>
          {total ? (
            <>
              <span>Total.: {total}</span>
              <span>Cost(INR): {total * price}</span>
            </>
          ) : null}
        </div>
        <div className="cardButton">
          <button className="primaryColor" onClick={() => handleOrder("add")}>
            +
          </button>
          <button className="danger" onClick={() => handleOrder("remove")}>
            -
          </button>
        </div>
      </div>
    </Col>
  );
};
export default MenuCard;
