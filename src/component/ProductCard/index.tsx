import EmptyCard from "../EmptyCard";
import InputTypeahead from "../InputTypeahead";
import ProductList from "../ProductList";
import "./index.css";
import { ProductCart } from "../../interfaces";
import useProductCart from "../../hooks/useProductCart";

const ProductCartComponent = () => {
  const { productCart, productList, onAddProduct, onDecrement, onIncrement } =
    useProductCart();

  return (
    <div className="productCard">
      <h1 className="productTitle">Add Products</h1>
      <InputTypeahead onAdd={onAddProduct} options={productList} />
      {productCart?.length ? (
        productCart?.map((product: ProductCart, index: number) => (
          <ProductList
            key={product.value}
            productDetails={product}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            idx={index}
          />
        ))
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default ProductCartComponent;
