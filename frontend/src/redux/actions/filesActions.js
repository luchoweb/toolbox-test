export const LOAD_DATA = 'LOAD_DATA';

export const loadFiles = ( files ) => {
  return {
    type: LOAD_DATA,
    payload: files
  }
}
