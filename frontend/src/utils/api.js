export const getFiles = async ( fileName ) => {
  const BASE_API_URL = 'http://localhost:5000/files/data';

  // If fileName !== null add a query param in the url
  const API_URI = !fileName 
    ? BASE_API_URL 
    : `${BASE_API_URL}?fileName=${fileName}`;

  try {
    // Get data from API
    const data = await getDataFromAPI(API_URI);

    // If fileName != null add output in array
    const output = !fileName 
    ? data 
    : (data.error ? [] : [data]);

    return output;
  } catch (error) {
    return null;
  }
}

// Get data from the API
const getDataFromAPI = async (url) => {
  try {
    const data = await fetch(url);
    const dataJson = await data.json();

    return dataJson;
  } catch (error) {
    return null;
  }
}
