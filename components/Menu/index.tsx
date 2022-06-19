import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { SET_CATEGORY } from "../../redux/types";
import { Icons } from "../Home/Contacts";
import styles from "./styles.module.scss";
const Menu = () => {
  const reducer = useSelector((state) => state) as any;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories() as any);
  }, []);
  const onCategoryChange = (category: "string") => {
    dispatch({ type: SET_CATEGORY, payload: category });
  };
  return (
    <div className={styles.menuCover}>
      <div className={styles.headings}>
        <h3>Our Popular Menu</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet
          tempus dolor sed auctor. Volutpat facilisi in imperdiet quam penatibus
          ut.
        </h4>
      </div>
      <div className={styles.menuList}>
        {reducer?.rootReducer?.categories?.data?.map((item: any) => (
          <span
            onClick={() => onCategoryChange(item?.slug)}
            className={
              reducer?.rootReducer?.category === item?.slug
                ? styles.active
                : styles.inactive
            }
          >
            <img src={Icons(item?.slug)} />
            <p>{item?.name}</p>
          </span>
        ))}
      </div>
      <div className={styles.listItems}></div>
    </div>
  );
};

export default Menu;
