import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '@components/NavBar/NavBar';

jest.mock('@components/SearchBar/SearchBar', () => () => <div>SearchBar</div>);
jest.mock('@components/Logo/Logo', () => () => <div>Logo</div>);

describe('NavBar', () => {
  test('renders without crashing', () => {
    render(<NavBar />);
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
  });
});
