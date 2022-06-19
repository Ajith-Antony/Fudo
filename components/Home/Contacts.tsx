import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/actions";
import styles from "./style.module.scss";
const Contacts = () => {
  const reducer = useSelector((state) => state) as any;
  const dispatch = useDispatch();
  const Icons = (type: any) => {
    switch (type) {
      case "working-hours":
        return "/images/Calendar.png";
      case "store-location":
        return "/images/Location.png";
      case "contact-number":
        return "/images/Call.png";
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(getContacts() as any);
  }, []);
  const getCard = (item: any) => {
    const src = Icons(item?.slug);
    return (
      <div className={styles.contactCard}>
        <img src={src} />
        <h3>{item?.description}</h3>
        <h4>{item?.title}</h4>
      </div>
    );
  };
  return (
    <div className={styles.contactSection}>
      {reducer?.rootReducer?.contacts?.data?.map((item: any) => getCard(item))}
    </div>
  );
};

export default Contacts;
