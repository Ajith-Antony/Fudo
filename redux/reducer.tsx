import { GET_CONTACT_DATA } from "./types";
const initialState = {
  contacts: { data: [], loading: false },
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
    default:
      return state;
  }
}
