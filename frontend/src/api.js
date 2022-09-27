export const getAllFiles = async () => {
  try {
    const API_URI = 'http://localhost:5000/files/data';
    const data = await fetch(API_URI);
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    return null;
  }
}

export const getFileByName = async ( fileName ) => {
  try {
    const API_URI = `http://localhost:5000/files/data?fileName=${fileName}`;
    const data = await fetch(API_URI);
    const dataJson = await data.json();
   return dataJson;
  } catch (error) {
    return null;
  }
}
