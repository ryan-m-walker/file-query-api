const serialize = (obj) => {
  let params = '?';
  let temp = { ...obj };

  for (let key in temp) {
    params += `${key}=${temp[key]}`;
    delete temp[key];

    // If there are still more params append an appersand
    if (Object.keys(temp).length) {
      params += '&';
    }
  }

  return params;
};

export default serialize;
