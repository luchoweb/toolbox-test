import { useDispatch } from 'react-redux';

import { loadFiles } from '../redux/actions/filesActions';

export const SearchComponent = () => {
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const fileName = '';
      const API_URI = `http://localhost:5000/files/data?=fileName=${fileName}`;
      const data = await fetch(API_URI);
      const dataJson = await data.json();
      dispatch(loadFiles(dataJson));
    } catch (error) {
      dispatch(
        loadFiles(null)
      );
    }
  }

  return (
    <div className="form-group">
      <input type="text" className="form-control" placeholder='File name' />
      <button
        className="btn btn-dark"
        onClick={() => handleSearch}
      >
        Search
      </button>
    </div>
  )
}
