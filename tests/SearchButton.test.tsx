import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { SearchButton } from '@components/SearchBar/components/SearchButton';

describe('SearchButton', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <SearchButton color='' onClick={() => {}} />
    );
    expect(getByTestId('search-button')).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <SearchButton color='' onClick={handleClick} />
    );

    fireEvent.click(getByTestId('search-button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<SearchButton color='' onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
