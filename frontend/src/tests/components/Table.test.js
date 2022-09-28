import { renderWithProviders } from '../../utils/test-utils';
import { filesMockAPI } from '../mocks/files.mock';
import { TableComponent } from '../../components/Table';

test('renders Table component when is loading', () => {
  const { getByTestId } = renderWithProviders(<TableComponent />, {
    preloadedState: {
      filesReducer: {
        files: []
      }
    }
  });

  const loadingMessage = 'Loading data, please wait...';
  expect(getByTestId("table-loading")).toHaveTextContent(loadingMessage);
});

test('renders Table component when API error message', () => {
  const { getByTestId } = renderWithProviders(<TableComponent />, {
    preloadedState: {
      filesReducer: {
        files: null
      }
    }
  });

  const errorMessage = 'ERROR. Check the API service and refresh the page.';
  expect(getByTestId("table-error")).toHaveTextContent(errorMessage);
});

test('renders Table component when Data loaded', () => {
  const { getAllByTestId } = renderWithProviders(<TableComponent />, {
    preloadedState: {
      filesReducer: {
        files: filesMockAPI
      }
    }
  });

  expect(getAllByTestId("table-data")).toBeTruthy();
});