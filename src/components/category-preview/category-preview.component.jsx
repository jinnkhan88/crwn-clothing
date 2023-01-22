import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.jsx";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  CategoryPreviewGrid
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={`${title}`}>
          <span className="title">{title.toUpperCase()}</span>
        </CategoryTitle>
      </h2>
      <CategoryPreviewGrid>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryPreviewGrid>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
