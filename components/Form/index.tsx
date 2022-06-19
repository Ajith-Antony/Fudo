import styles from "./styles.module.scss";
const FormBlock = () => {
  return (
    <div className={styles.formBlock}>
      <div className={styles.headingSection}>
        <h3>Receive payments quickly from anywhere</h3>
        <h4>
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.
        </h4>
      </div>
      <form>
        <div className={styles.form}>
          <h4>Get Started for Free</h4>
          <div className={styles.formInput}>
            <label>Name</label>
            <input placeholder="Name" />
          </div>
          <div className={styles.formInput}>
            <label>Email Address</label>
            <input placeholder="Email Address" />
          </div>
          <div className={styles.formInput}>
            <label>Password</label>
            <input placeholder="Password" />
          </div>
          <button>GET STARTED</button>
        </div>
      </form>
    </div>
  );
};

export default FormBlock;
