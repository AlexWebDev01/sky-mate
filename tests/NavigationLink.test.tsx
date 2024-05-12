import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationLink from '@components/NavigationLink/NavigationLink';

jest.mock('@shared/assets/icons/link-arrow.svg', () => {
  return () => <svg data-testid='mocked-arrow'></svg>;
});

describe('NavigationLink', () => {
  test('renders with direction right', () => {
    render(
      <Router>
        <NavigationLink direction='right' to='/look'>
          View more
        </NavigationLink>
      </Router>
    );

    const navLink = screen.getByText('View more').closest('div');
    expect(navLink).toHaveClass('navigation-link right');
    expect(screen.getByRole('link', { name: 'View more' })).toHaveAttribute(
      'href',
      '/look'
    );
    expect(screen.getByTestId('mocked-arrow')).toBeInTheDocument();
  });

  test('renders with direction left', () => {
    render(
      <Router>
        <NavigationLink direction='left' to='/'>
          Go back
        </NavigationLink>
      </Router>
    );

    const navLink = screen.getByText('Go back').closest('div');
    expect(navLink).toHaveClass('navigation-link left');
    expect(screen.getByRole('link', { name: 'Go back' })).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByTestId('mocked-arrow')).toBeInTheDocument();
  });

  test('navigates to the correct path when clicked', () => {
    render(
      <Router>
        <NavigationLink direction='left' to='/'>
          Go back
        </NavigationLink>
      </Router>
    );

    fireEvent.click(screen.getByRole('link', { name: 'Go back' }));
    expect(window.location.pathname).toBe('/');
  });
});
