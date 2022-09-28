import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { loadFiles } from './redux/actions/filesActions';

import { TableComponent } from './components/Table';
import { HeaderComponent } from './components/Header';
import { FooterComponent } from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial data load
    dispatch(loadFiles());
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
