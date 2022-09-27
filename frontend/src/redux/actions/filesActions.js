import { getAllFiles, getFileByName } from '../../api';

export const LOAD_DATA = 'LOAD_DATA';

export const loadFiles = () => {
  return async (dispatch) => {
    const files = await getAllFiles();

    dispatch({
      type: LOAD_DATA,
      payload: files
    });
  }
}

export const searchFile = ( fileName ) => {
  return async (dispatch) => {
    const file = await getFileByName(fileName);

    dispatch({
      type: LOAD_DATA,
      payload: file
    });
  }
}
