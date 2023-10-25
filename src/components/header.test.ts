import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header ', () => {
  describe('When we render in header', () => {
    document.body.innerHTML = '<div></div>';
    const header = new Header('div');
    test('Then it should be instance of Header', () => {
      expect(header).toBeInstanceOf(Header);
    });

    test('The text should be', () => {
      const element = screen.getByText(/Pets/i);
      expect(element).toBeInTheDocument();
    });
  });
});
