import "./index.css";
import PlusIcon from "../../assets/PlusIcon.svg";
import MinusIcon from "../../assets/MinusIcon.svg";
import { ProductCart } from "../../interfaces";
import { DECREMENT, INCREMENT } from "../../constants";

interface Props {
  productDetails: ProductCart;
  onDecrement: (e: number) => void;
  onIncrement: (e: number) => void;
  idx: number;
}

const ProductList = ({
  productDetails,
  onDecrement,
  onIncrement,
  idx,
}: Props) => {
  const { label: name, count } = productDetails;
  const handleClick = (idx: number, type: string) => {
    type === INCREMENT ? onIncrement(idx) : onDecrement(idx);
  };

  return (
    <div className="listWrap">
      <p className="productName">{name}</p>
      <div className="actionWrap">
        <img
          src={MinusIcon}
          alt="minus-icon"
          onClick={() => handleClick(idx, DECREMENT)}
        />
        <span>{count || "1"}</span>
        <img
          src={PlusIcon}
          alt="plus-icon"
          onClick={() => handleClick(idx, INCREMENT)}
        />
      </div>
    </div>
  );
};

export default ProductList;
