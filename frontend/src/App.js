import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

function App() {
  const [fileData, setFileData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('http://localhost:5000/files/data');
        const dataJson = await data.json();
        console.log(dataJson);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <div className="container mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? 
            fileData.length ? (
              fileData.map(item => (
                <tr key={`name-${item.file}`}>
                  <td>{ item.file }</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  No data to show. Please refresh the page.
                </td>
              </tr>
            )
          : (
            <tr>
              <td colSpan={4}>
                Loading data, please wait...
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
