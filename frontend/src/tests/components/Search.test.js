import { renderWithProviders } from '../../utils/test-utils';
import { SearchComponent } from '../../components/Search';

test('renders Search component', () => {
  const { getByTestId } = renderWithProviders(<SearchComponent />);

  const searchLabel = 'Enter a file name';
  expect(getByTestId("search-label")).toHaveTextContent(searchLabel);

  expect(getByTestId("search-input")).toBeTruthy();
  expect(getByTestId("search-button")).toBeTruthy();
});
