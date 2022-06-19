import styles from "./style.module.scss";
const Nav = () => {
  return (
    <div className={styles.nav}>
      <img src="/images/Logo.png" />
      <div className={styles.navItems}>
        <a>Home</a>
        <a>Form</a>
        <a>Menu</a>
      </div>
      <div className={styles.loginBlock}>
        <img src="/images/cart.png" />
        <p>2</p>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Nav;
