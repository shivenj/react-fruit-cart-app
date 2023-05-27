import "./index.css";
import Compass from "../../assets/Compass.svg";

const EmptyCard = () => {
  return (
    <div className="emptyCard">
      <img src={Compass} alt="compass-icon" />
      <p>No products have been added.</p>
    </div>
  );
};

export default EmptyCard;
