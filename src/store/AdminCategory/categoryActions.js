import { toast } from "react-toastify";

import { fetchCategories, addCategory, getCategory } from "../../services/admin.service";
import {
  ALL_CATEGORIES_FAILURE,
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
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

export function addCategoryAction(categoryDetails) {
  return (dispatch) => {
    dispatch(request());
    addCategory(categoryDetails).then(
      (data) => {
        dispatch(success(data));
        toast.success("Category Added Successfully!");
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function request() {
    return { type: ADD_CATEGORY_REQUEST };
  }
  function success(category) {
    return { type: ADD_CATEGORY_SUCCESS, category };
  }
  function failure() {
    return { type: ADD_CATEGORY_FAILURE };
  }
}

export function getCategoryAction(id) {
  return (dispatch) => {
    dispatch(request());
    getCategory(id).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function request() {
    return { type: GET_CATEGORY_REQUEST };
  }
  function success(category) {
    return { type: GET_CATEGORY_SUCCESS, category };
  }
  function failure() {
    return { type: GET_CATEGORY_FAILURE };
  }
}
