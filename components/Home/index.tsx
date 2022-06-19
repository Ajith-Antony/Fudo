import Contacts from "./Contacts";
import Nav from "./Navigation";
import styles from "./style.module.scss";
import TextBlock from "./TextBlock";
const LandinPage = () => {
  return (
    <div className={styles.root}>
      <Nav />
      <TextBlock />
      <Contacts />
    </div>
  );
};

export default LandinPage;
