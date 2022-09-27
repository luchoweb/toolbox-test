import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

export const TableComponent = () => {
  const fileData = useSelector(state => state.filesReducer.files);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    if ( !fileData ) setErrorLoading(true);
  }, [fileData]);

  return (
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
        {fileData?.length ? (
          fileData.map(item => (
            item.lines.map((line, index) => (
              <tr key={`f-${item.file}-${index}`}>
                <td className='text-break'>{ item.file }</td>
                <td className='text-break'>{ line.text }</td>
                <td className='text-break'>{ line.number }</td>
                <td className='text-break'>{ line.hex }</td>
              </tr>
            ))
          ))
        ) : (
          <tr>
            <td colSpan={4}>
              { !errorLoading ? 'Loading data, please wait...' : 'An error has occurred, please refresh the page.'}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}
