import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadFiles } from '../redux/actions/filesActions';

export const SearchComponent = () => {
  const dispatch = useDispatch();

  // input value in the component state
  const [inputFileName, setInputFileName] = useState('');

  const handleSearch = () => {
    // if input search value isn't empty -> search file
    if ( inputFileName ) dispatch(loadFiles(inputFileName));
  }

  return (
    <div className="form-group">
      <label htmlFor="search" className="text-light" data-testid="search-label">
        Enter a file name
      </label>

      <div className="d-flex align-items-center gap-2">
        <input
          id="search"
          type="text"
          className="form-control"
          placeholder='test9.csv'
          value={inputFileName}
          onChange={(e) => setInputFileName(e.target.value)}
          data-testid="search-input"
        />

        <button
          className="btn btn-dark"
          onClick={() => handleSearch()}
          data-testid="search-button"
        >
          Search
        </button>
      </div>
    </div>
  )
}
