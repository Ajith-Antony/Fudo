import axios from "axios";
import { GET_CATEGORY_DATA, GET_CONTACT_DATA } from "./types";

export const getContacts = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CONTACT_DATA,
      payload: { data: [], loading: true },
    });
    const resp = await axios.get("http://54.169.31.224:3000/contact");
    dispatch({
      type: GET_CONTACT_DATA,
      payload: { data: resp?.data?.data, loading: false },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CATEGORY_DATA,
      payload: { data: [], loading: true },
    });
    const resp = await axios.get("http://54.169.31.224:3000/category");
    dispatch({
      type: GET_CATEGORY_DATA,
      payload: { data: resp?.data?.data, loading: false },
    });
  } catch (error) {
    console.log(error);
  }
};
