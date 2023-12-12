import { fetchUserCategoryList, fetchUserCountryList, fetchUserNoteTypeList } from "../../services/config.service";
import {
  CONFIG_REQUEST,
  CONFIG_FAILURE,
  USER_GET_COUNTRY_SUCCESS,
  USER_GET_CATEGORY_SUCCESS,
  USER_GET_NOTE_TYPE_SUCCESS,
} from "./configActionTypes";

const request = () => {
  return { type: CONFIG_REQUEST };
};

const failure = () => {
  return { type: CONFIG_FAILURE };
};

export function getUserCountryListAction() {
  return (dispatch) => {
    dispatch(request());
    fetchUserCountryList().then(
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

export function getUserCategoryListAction() {
  return (dispatch) => {
    dispatch(request());
    fetchUserCategoryList().then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: USER_GET_CATEGORY_SUCCESS, payload: data };
  }
}

export function getUserNoteTypeListAction() {
  return (dispatch) => {
    dispatch(request());
    fetchUserNoteTypeList().then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: USER_GET_NOTE_TYPE_SUCCESS, payload: data };
  }
}
