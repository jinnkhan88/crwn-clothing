import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen
} from "../../store/cart/cart.selector";
import "./cart-icon.styles.jsx";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
