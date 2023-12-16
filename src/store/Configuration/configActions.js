import { toast } from "react-toastify";
import {
  createAdmin,
  createCategory,
  deleteAdmin,
  fetchAdmin,
  fetchAdminConfig,
  fetchAllAdmin,
  fetchUserCategoryList,
  fetchUserCountryList,
  fetchUserNoteTypeList,
  updateAdmin,
  updateCategory,
  updateAdminConfig,
  deleteCategory,
  fetchCategory,
  fetchAllCategory,
} from "../../services/config.service";
import {
  CONFIG_REQUEST,
  CONFIG_FAILURE,
  USER_GET_COUNTRY_SUCCESS,
  USER_GET_CATEGORY_SUCCESS,
  USER_GET_NOTE_TYPE_SUCCESS,
  ADMIN_GET_CONFIG_SUCCESS,
  ADMIN_UPDATE_CONFIG_SUCCESS,
  ADMIN_CREATE_ADMIN_SUCCESS,
  ADMIN_GET_ADMINS_SUCCESS,
  ADMIN_GET_ADMIN_SUCCESS,
  ADMIN_UPDATE_ADMIN_SUCCESS,
  ADMIN_DELETE_ADMIN_SUCCESS,
  ADMIN_CREATE_CATEGORY_SUCCESS,
  ADMIN_UPDATE_CATEGORY_SUCCESS,
  ADMIN_DELETE_CATEGORY_SUCCESS,
  ADMIN_GET_CATEGORIES_SUCCESS,
  ADMIN_GET_CATEGORY_SUCCESS,
} from "./configActionTypes";

const request = () => ({ type: CONFIG_REQUEST });

const failure = () => ({ type: CONFIG_FAILURE });

const success = (type, data) => ({ type: type, payload: data });

export function getUserCountryListAction() {
  return (dispatch) => {
    dispatch(request());
    fetchUserCountryList().then(
      (response) => {
        dispatch(success(USER_GET_COUNTRY_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getUserCategoryListAction() {
  return (dispatch) => {
    dispatch(request());
    fetchUserCategoryList().then(
      (response) => {
        dispatch(success(USER_GET_CATEGORY_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getUserNoteTypeListAction() {
  return (dispatch) => {
    dispatch(request());
    fetchUserNoteTypeList().then(
      (response) => {
        dispatch(success(USER_GET_NOTE_TYPE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getAdminConfigAction() {
  return (dispatch) => {
    dispatch(request());
    fetchAdminConfig().then(
      (response) => {
        dispatch(success(ADMIN_GET_CONFIG_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateAdminConfigAction(value) {
  return (dispatch) => {
    dispatch(request());
    updateAdminConfig(value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(ADMIN_UPDATE_CONFIG_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function createAdminAction(value) {
  return (dispatch) => {
    dispatch(request());
    createAdmin(value).then(
      (response) => {
        toast.success("Successfully added!");
        dispatch(success(ADMIN_CREATE_ADMIN_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateAdminAction(id, value) {
  return (dispatch) => {
    dispatch(request());
    updateAdmin(id, value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(ADMIN_UPDATE_ADMIN_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function deleteAdminAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteAdmin(id).then(
      (response) => {
        toast.success("Successfully in active!");
        dispatch(success(ADMIN_DELETE_ADMIN_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getAdminsAction(search) {
  return (dispatch) => {
    dispatch(request());
    fetchAllAdmin(search).then(
      (response) => {
        dispatch(success(ADMIN_GET_ADMINS_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getAdminAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchAdmin(id).then(
      (response) => {
        dispatch(success(ADMIN_GET_ADMIN_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function createCategoryAction(value) {
  return (dispatch) => {
    dispatch(request());
    createCategory(value).then(
      (response) => {
        toast.success("Successfully added!");
        dispatch(success(ADMIN_CREATE_CATEGORY_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateCategoryAction(id, value) {
  return (dispatch) => {
    dispatch(request());
    updateCategory(id, value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(ADMIN_UPDATE_CATEGORY_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function deleteCategoryAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteCategory(id).then(
      (response) => {
        toast.success("Successfully in active!");
        dispatch(success(ADMIN_DELETE_CATEGORY_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getCategoriesAction(search) {
  return (dispatch) => {
    dispatch(request());
    fetchAllCategory(search).then(
      (response) => {
        dispatch(success(ADMIN_GET_CATEGORIES_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getCategoryAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchCategory(id).then(
      (response) => {
        dispatch(success(ADMIN_GET_CATEGORY_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
