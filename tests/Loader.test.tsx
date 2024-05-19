import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loader from '@components/Loader/Loader';

jest.mock('@components/Notification/Notification', () => {
  return () => <div data-testid='notification-mock'>Notification</div>;
});

describe('Loader', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Loader />);

    const loaderContainer = getByTestId('loader-container');
    expect(loaderContainer).toBeInTheDocument();
    const sunLoader = getByTestId('sun-loader');
    expect(sunLoader).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
