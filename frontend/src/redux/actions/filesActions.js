import { getFiles } from '../../utils/api';

export const LOAD_DATA = 'LOAD_DATA';

export const loadFiles = ( fileName = null ) => {
  // Add action in an async/await function
  return async (dispatch) => {
    const files = await getFiles(fileName);
    dispatch({
      type: LOAD_DATA,
      payload: files
    });
  }
}

