import styles from "./style.module.scss";
const Contacts = () => {
  const Icons = {
    "working-hours": "/images/Calendar.png",
    "store-location": "/images/Location.png",
    "contact-number": "/images/Call.png",
  };
  const getCard = () => (
    <div className={styles.contactCard}>
      <img src={Icons["working-hours"]} />
      <h3>Trails End Road Ft United States</h3>
      <h4>Store Location</h4>
    </div>
  );
  return (
    <div className={styles.contactSection}>
      {getCard()}
      {getCard()}
      {getCard()}
    </div>
  );
};

export default Contacts;
