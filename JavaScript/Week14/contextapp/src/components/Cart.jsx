import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      <h5>Total Bill: ${total}</h5>
    </div>
  );
};
export default Cart;
