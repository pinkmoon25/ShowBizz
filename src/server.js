const postData = async (data, api) => {
  const req = fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  try {
    await req.reject(new Error(`HTTP - ERROR${(await req).status}`));
  } catch (error) {
    console.error(error); //  eslint-disable-line
  }
};

// get shows from API source function
const getApiData = async (showApiUrl) => {
  const res = await fetch(showApiUrl);
  const result = await res.json();
  return result;
};

export { postData, getApiData };
