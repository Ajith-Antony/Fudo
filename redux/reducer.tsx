import {
  GET_CATEGORY_DATA,
  GET_CATEGORY_DATAS,
  GET_CONTACT_DATA,
  SET_CATEGORY,
} from "./types";
const initialState = {
  contacts: { data: [], loading: false },
  categories: { data: [], loading: false },
  category: "pizza",
  categoryData: { data: [], loading: false },
};

export default function (
  state = initialState,
  action: { type: string; payload: unknown }
) {
  switch (action.type) {
    case GET_CONTACT_DATA:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CATEGORY_DATA:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case GET_CATEGORY_DATAS:
      return {
        ...state,
        categoryData: action.payload,
      };
    default:
      return state;
  }
}
