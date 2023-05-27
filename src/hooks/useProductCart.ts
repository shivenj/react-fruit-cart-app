import { useEffect, useState } from "react";
import { IOptions, IProducts, ProductCart } from "../interfaces";
import { getProducts } from "../services/api";

const useProductCart = () => {
  const [productCart, setProductCart] = useState<ProductCart[]>([]);
  const [productList, setProductList] = useState<IOptions[]>([]);

  useEffect(() => {
    getOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOptions = async () => {
    const products = await getProducts();
    const mappedProducts = products.map(getLabelValues);
    setProductList(mappedProducts);
  };

  const onAddProduct = (options: any) => {
    const option = options[0];
    const idx = productCart.findIndex(
      (product: ProductCart) => product.value === option.value
    );
    if (idx === -1) {
      productCart.push({ ...option, count: 1 });
    } else {
      productCart[idx].count++;
    }
    setProductCart([...productCart]);
  };

  const getLabelValues = (product: IProducts) => {
    return { label: product.name, value: product.id.toString() };
  };

  const onIncrement = (idx: number) => {
    productCart[idx].count++;
    setProductCart([...productCart]);
  };

  const onDecrement = (idx: number) => {
    if (productCart[idx].count === 1) {
      if (window.confirm("Remove this product from cart?")) {
        productCart.splice(idx, 1);
      }
    } else {
      productCart[idx].count--;
    }
    setProductCart([...productCart]);
  };

  return { productList, productCart, onDecrement, onIncrement, onAddProduct };
};

export default useProductCart;
