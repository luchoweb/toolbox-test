import { renderWithProviders } from '../../utils/test-utils';
import { FooterComponent } from '../../components/Footer';

test('renders Footer component', () => {
  const { getByTestId } = renderWithProviders(<FooterComponent />);
  const footerCopy = 'Made with <3 by Lucho Web';

  expect(getByTestId("footer")).toBeTruthy();
  expect(getByTestId("footer-copy")).toHaveTextContent(footerCopy);
});
