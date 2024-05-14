import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from '@components/Logo/Logo';

jest.mock('@shared/assets/icons/logo.svg', () => (props: any) => (
  <svg {...props} data-testid='logo-svg' />
));

describe('Logo', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    expect(getByTestId('logo-svg')).toBeInTheDocument();
  });

  it('should contain a link to the home page', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    const linkElement = getByTestId('logo-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
