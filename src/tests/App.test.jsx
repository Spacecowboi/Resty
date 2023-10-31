import { render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';

test('App renders without breaking', async () => {
  render(<App />);
  
  const requestMethodElement = screen.getByText(/Request Method:/i);
  const urlElement = screen.getByText(/URL:/i);
  expect(requestMethodElement).toBeInTheDocument();
  expect(urlElement).toBeInTheDocument();

  let loadingElement, historyElement, resultsElement;
  await act(async () => {
    loadingElement = screen.queryByText(/Loading.../i);
    historyElement = screen.getByText(/History/i);
    resultsElement = screen.getByText(/Results/i);
  });

  expect(loadingElement).toBeNull();
  expect(historyElement).toBeInTheDocument();
  expect(resultsElement).toBeInTheDocument();
});