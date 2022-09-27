import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { loadFiles } from './redux/actions/filesActions';

import { TableComponent } from './components/Table';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URI = 'http://localhost:5000/files/data';
        const data = await fetch(API_URI);
        const dataJson = await data.json();
        dispatch(loadFiles(dataJson));
      } catch (error) {
        dispatch(
          loadFiles(null)
        );
      }
    }

    fetchData();
  });
  
  return (
    <div className="container mt-3">
      <TableComponent />
    </div>
  );
}

export default App;
