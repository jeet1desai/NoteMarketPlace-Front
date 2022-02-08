import { toast } from "react-toastify";

import { fetchCategories } from "../../services/admin.service";
import {
  ALL_CATEGORIES_FAILURE,
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
} from "./categoryActionTypes";

export function fetchAllCategoriesAction() {
  return (dispatch) => {
    dispatch(request());
    fetchCategories().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function request() {
    return { type: ALL_CATEGORIES_REQUEST };
  }
  function success(categories) {
    return { type: ALL_CATEGORIES_SUCCESS, categories };
  }
  function failure() {
    return { type: ALL_CATEGORIES_FAILURE };
  }
}
