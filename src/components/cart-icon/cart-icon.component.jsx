import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.jsx";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
