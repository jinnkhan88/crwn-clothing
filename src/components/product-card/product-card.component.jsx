import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  Price,
  ProductCartContainer,
  ProductImage,
  Name
} from "./product-card.styles";
import "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCard = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`$name`} />
      <Footer>
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        ADD TO CART
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
