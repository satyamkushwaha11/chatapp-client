const ifToken = () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

export default ifToken;
