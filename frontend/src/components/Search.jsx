import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadFiles } from '../redux/actions/filesActions';

export const SearchComponent = () => {
  const dispatch = useDispatch();

  const [inputFileName, setInputFileName] = useState('');

  const handleSearch = () => {
    if ( inputFileName ) dispatch(loadFiles(inputFileName));
  }

  return (
    <div className="form-group">
      <label htmlFor="" className='text-light'>Enter a file name</label>

      <div className='d-flex align-items-center gap-2'>
        <input
          type="text"
          className="form-control"
          placeholder='test9.csv'
          value={inputFileName}
          onChange={(e) => setInputFileName(e.target.value)}
        />

        <button
          className="btn btn-dark"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
    </div>
  )
}
