export const getFiles = async ( fileName ) => {
  const BASE_API_URL = 'http://localhost:5000/files/data';
  const API_URI = !fileName ? BASE_API_URL : `${BASE_API_URL}?fileName=${fileName}`;

  try {
    const data = await getDataFromAPI(API_URI);
    const output = !fileName ? data : (data.error ? [] : [data]);
    return output;
  } catch (error) {
    return null;
  }
}

const getDataFromAPI = async (url) => {
  try {
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    return null;
  }
}
