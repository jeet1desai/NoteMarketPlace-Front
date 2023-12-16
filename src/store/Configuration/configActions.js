import { toast } from "react-toastify";
import {
  createAdmin,
  deleteAdmin,
  fetchAdmin,
  fetchAdminConfig,
  fetchAllAdmin,
  fetchUserCategoryList,
  fetchUserCountryList,
  fetchUserNoteTypeList,
  updateAdmin,
  updateAdminConfig,
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

export function getAdminConfigAction() {
  return (dispatch) => {
    dispatch(request());
    fetchAdminConfig().then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: ADMIN_GET_CONFIG_SUCCESS, payload: data };
  }
}

export function updateAdminConfigAction(value) {
  return (dispatch) => {
    dispatch(request());
    updateAdminConfig(value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: ADMIN_UPDATE_CONFIG_SUCCESS, payload: data };
  }
}

export function createAdminAction(value) {
  return (dispatch) => {
    dispatch(request());
    createAdmin(value).then(
      (response) => {
        toast.success("Successfully added!");
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: ADMIN_CREATE_ADMIN_SUCCESS, payload: data };
  }
}

export function updateAdminAction(id, value) {
  return (dispatch) => {
    dispatch(request());
    updateAdmin(id, value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: ADMIN_UPDATE_ADMIN_SUCCESS, payload: data };
  }
}

export function deleteAdminAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteAdmin(id).then(
      (response) => {
        toast.success("Successfully in active!");
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: ADMIN_DELETE_ADMIN_SUCCESS, payload: data };
  }
}

export function getAdminsAction(search) {
  return (dispatch) => {
    dispatch(request());
    fetchAllAdmin(search).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: ADMIN_GET_ADMINS_SUCCESS, payload: data };
  }
}

export function getAdminAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchAdmin(id).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(data) {
    return { type: ADMIN_GET_ADMIN_SUCCESS, payload: data };
  }
}
