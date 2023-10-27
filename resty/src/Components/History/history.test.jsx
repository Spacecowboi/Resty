'use strict';

import { render, screen, fireEvent } from '@testing-library/react';
import History from '../index';

test('History renders without breaking and responds to click events', () => {
  const mockOnSelect = jest.fn();
  const mockHistory = [
    { method: 'GET', url: 'https://example.com' },
    { method: 'POST', url: 'https://example.com' },
  ];

  render(<History history={mockHistory} onSelect={mockOnSelect} />);

  const historyTitle = screen.getByText(/History/i);
  expect(historyTitle).toBeInTheDocument();

  mockHistory.forEach(item => {
    const methodElement = screen.getByText(new RegExp(item.method, 'i'));
    const urlElement = screen.getByText(new RegExp(item.url, 'i'));
    expect(methodElement).toBeInTheDocument();
    expect(urlElement).toBeInTheDocument();
  });

  const historyItems = screen.getAllByText(/Method:/i);
  historyItems.forEach((item, index) => {
    fireEvent.click(item);
    expect(mockOnSelect).toHaveBeenCalledWith(mockHistory[index]);
  });
});