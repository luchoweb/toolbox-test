import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { loadFiles } from './redux/actions/filesActions';

import { TableComponent } from './components/Table';
import { HeaderComponent } from './components/Header';
import { FooterComponent } from './components/Footer';

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
    <>
      <HeaderComponent />
      <div className="container pt-5 pb-5">
        <TableComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
