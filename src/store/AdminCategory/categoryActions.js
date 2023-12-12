import { toast } from "react-toastify";

import { fetchCategories, addCategory, getCategory, editCategory, deleteCategory, searchCategory } from "../../services/admin.service";

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
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  SEARCHED_CATEGORY_REQUEST,
  SEARCHED_CATEGORY_SUCCESS,
  SEARCHED_CATEGORY_FAILURE,
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

export function editCategoryAction(id, categoryDetails) {
  return (dispatch) => {
    dispatch(request());
    editCategory(id, categoryDetails).then(
      (data) => {
        dispatch(success(data));
        toast.success("Category Edited Successfully!");
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function request() {
    return { type: EDIT_CATEGORY_REQUEST };
  }
  function success(category) {
    return { type: EDIT_CATEGORY_SUCCESS, category };
  }
  function failure() {
    return { type: EDIT_CATEGORY_FAILURE };
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

export function deleteCategoryAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteCategory(id).then(
      (data) => {
        dispatch(success(data));
        toast.success("Category Deleted Successfully!");
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function request() {
    return { type: DELETE_CATEGORY_REQUEST };
  }
  function success(category) {
    return { type: DELETE_CATEGORY_SUCCESS, category };
  }
  function failure() {
    return { type: DELETE_CATEGORY_FAILURE };
  }
}

export function searchCategoriesAction(search) {
  return (dispatch) => {
    dispatch(request());
    searchCategory(search).then(
      (data) => dispatch(success(data)),
      (error) => dispatch(failure())
    );
  };
  function request() {
    return { type: SEARCHED_CATEGORY_REQUEST };
  }
  function success(categories) {
    return { type: SEARCHED_CATEGORY_SUCCESS, categories };
  }
  function failure() {
    return { type: SEARCHED_CATEGORY_FAILURE };
  }
}
