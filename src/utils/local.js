export const getLSUser = () => {
  const cUser = localStorage.getItem("currentUser");
  if (cUser) {
    return JSON.parse(cUser);
  }
  return null;
};

export const getLSUserToken = () => {
  const accessToken = localStorage.getItem("currentToken");
  if (accessToken) {
    return JSON.parse(accessToken);
  }
  return null;
};
