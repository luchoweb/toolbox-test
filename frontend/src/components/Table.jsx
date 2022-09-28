import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

export const TableComponent = () => {
  const fileData = useSelector(state => state.filesReducer.files);
  const tableData = fileData?.length ? fileData?.map(item => (
    item.lines.map((line, index) => (
      <tr key={`f-${item.file}-${index}`}>
        <td className='text-break'>{ item.file }</td>
        <td className='text-break'>{ line.text }</td>
        <td className='text-break'>{ line.number }</td>
        <td className='text-break'>{ line.hex }</td>
      </tr>
    ))
  )) : (
    <tr>
      <td colSpan={4}>
        No data to show.
      </td>
    </tr>
  );

  const [errorLoading, setErrorLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ( !fileData ) setErrorLoading(true);
    if ( fileData.length ) setIsLoading(false);
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
        { isLoading ? (
          <tr>
            <td colSpan={4}>
              Loading data, please wait...
            </td>
          </tr>
        ) : (
          errorLoading ? (
            <tr>
              <td colSpan={4}>
                ERROR. Check the API service and refresh the page.
              </td>
            </tr>
          ) : (
            tableData
          )
        )}
      </tbody>
    </Table>
  )
}
