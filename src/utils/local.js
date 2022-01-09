export const getLSUser = () => {
  const cUser = localStorage.getItem("currentUser");
  if (cUser) {
    return JSON.parse(cUser).user;
  }
  return null;
};

export const getLSUserToken = () => {
  const cUser = localStorage.getItem("currentUser");
  if (cUser) {
    return JSON.parse(cUser).accessToken;
  }
  return null;
};
