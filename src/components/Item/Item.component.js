import styles from "./Item.module.css";

const Item = ({
  data: { name, a, component },
  setCurrentComponent,
  active,
  setActive
}) => {
  const handleClick = () => {
    setCurrentComponent(component);
    setActive();
  };

  return (
    <div
      onClick={handleClick}
      className={`${active ? styles.active : ""} ${styles.container}`}
    >
      <p>{name}</p>
    </div>
  );
};

export default Item;
