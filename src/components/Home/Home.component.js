import { useState } from "react";
import styles from "./Home.module.css";

// svg
import expandIcon from "../../assets/svg/expand.svg";
import minusIcon from "../../assets/svg/minus.svg";

// modules
import Item from "../Item/Item.component.js";

// data
import components from "../../data/components";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState(
    "No component selected."
  );
  const [activeElement, setActiveElement] = useState();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleIconClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.screen1}>
        {components.map((el, idx) => (
          <Item
            key={idx}
            data={el}
            setCurrentComponent={setCurrentComponent}
            setActive={() => setActiveElement(el)}
            active={activeElement === el}
          />
        ))}
      </div>

      {/* Fixed screen on the bottom */}
      <div
        className={`${
          isExpanded ? styles.expandedScreen : styles.collapsedScreen
        } ${styles.screen2}`}
      >
        <img
          className={styles.icon}
          onClick={handleIconClick}
          src={isExpanded ? minusIcon : expandIcon}
          alt={isExpanded ? "Minus icon" : "Expand icon"}
        />
        {isExpanded && <p>{currentComponent}</p>}
      </div>
    </div>
  );
};

export default Home;
