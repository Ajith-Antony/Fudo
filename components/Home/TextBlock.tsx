import styles from "./style.module.scss";
const TextBlock = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.heading}>
        <h3>Different Spice For A Different Taste</h3>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim
          posuere quis consequat.
        </h4>
        <button>GET STARTED</button>
      </div>
      <img src="/images/homeImg.png" />
    </div>
  );
};

export default TextBlock;
