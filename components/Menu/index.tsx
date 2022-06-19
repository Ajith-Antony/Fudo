import { useEffect } from "react";
import { Audio, Bars, Grid } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategoryData } from "../../redux/actions";
import { SET_CATEGORY } from "../../redux/types";
import { Icons } from "../Home/Contacts";
import styles from "./styles.module.scss";
const Menu = () => {
  const reducer = useSelector((state) => state) as any;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories() as any);
  }, []);
  useEffect(() => {
    dispatch(getCategoryData(reducer?.rootReducer?.category) as any);
  }, [reducer?.rootReducer?.category]);
  const onCategoryChange = (category: "string") => {
    dispatch({ type: SET_CATEGORY, payload: category });
  };
  const getCard = (item: any) => {
    debugger;
    const src = Icons(reducer?.rootReducer?.category);
    return (
      <div className={styles.itemCard}>
        <img src={src} />
        <h3>{item?.title}</h3>
        <h4>{`${item?.currency} ${item?.price}`}</h4>
        <span>
          <h3>Add to cart</h3>
          <img src="/images/cart.png" />
        </span>
      </div>
    );
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
      <div className={styles.listItems}>
        {reducer?.rootReducer?.categoryData?.loading ? (
          <div className={styles.loader}>
            <Bars color="#666666" height={80} width={80} />
          </div>
        ) : (
          reducer?.rootReducer?.categoryData?.data
            ?.slice(0, 4)
            .map((item: any) => getCard(item))
        )}
      </div>
    </div>
  );
};

export default Menu;
