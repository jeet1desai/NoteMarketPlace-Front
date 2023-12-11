import { fetchCountryList } from "../../services/config.service";
import { CONFIG_REQUEST, CONFIG_FAILURE, USER_GET_COUNTRY_SUCCESS } from "./configActionTypes";

const request = () => {
  return { type: CONFIG_REQUEST };
};

const failure = () => {
  return { type: CONFIG_FAILURE };
};

export function getCountryListAction() {
  return (dispatch) => {
    dispatch(request());
    fetchCountryList().then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: USER_GET_COUNTRY_SUCCESS, payload: data };
  }
}
