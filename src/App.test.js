import React from 'react';
import { render, getByTitle } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Hello world/i);
  expect(textElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/what!/i);
  expect(textElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  const { getByTitle } = render(<App />);
  const title = getByTitle(/what!/i);
  expect(title).toBeInTheDocument();
});
