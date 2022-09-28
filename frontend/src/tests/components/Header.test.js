import { renderWithProviders } from '../../utils/test-utils';
import { HeaderComponent } from '../../components/Header';

test('renders Header component', () => {
  const { getByTestId } = renderWithProviders(<HeaderComponent />);
  const headerTitle = 'Full-Stack Challenge';

  expect(getByTestId("header")).toBeTruthy();
  expect(getByTestId("header-title")).toHaveTextContent(headerTitle);
});
