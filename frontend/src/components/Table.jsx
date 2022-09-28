import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

export const TableComponent = () => {
  // Get files from state
  const fileData = useSelector(state => state.filesReducer.files);

  // Build the <tr> with the data or empty
  const tableData = fileData?.length ? fileData?.map(item => (
    item.lines.map((line, index) => (
      <tr
        key={`f-${item.file}-${index}`}
        data-testid={`table-data`}
      >
        <td className='text-break'>{ item.file }</td>
        <td className='text-break'>{ line.text }</td>
        <td className='text-break'>{ line.number }</td>
        <td className='text-break'>{ line.hex }</td>
      </tr>
    ))
  )) : (
    <tr data-testid="table-nodata">
      <td colSpan={4}>
        No data to show.
      </td>
    </tr>
  );

  // errorLoading show an error message if API connection fails
  const [errorLoading, setErrorLoading] = useState(false);

  // isLoading show a loading message when data is fetching from API
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fileData === null -> show an API error message
    if ( !fileData ) setErrorLoading(true);

    // fileData has items -> hide loading message
    if ( fileData?.length ) setIsLoading(false);
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
        { isLoading && !errorLoading ? (
          <tr data-testid="table-loading">
            <td colSpan={4}>
              Loading data, please wait...
            </td>
          </tr>
        ) : (
          errorLoading ? (
            <tr data-testid="table-error">
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
