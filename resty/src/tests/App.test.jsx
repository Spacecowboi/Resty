import {render, screen} from '@testing-library/react';
import App from '../App';

test('App renders without breaking', async () => {
    render(<App />);
    const requestMethodElement = screen.getByText(/Request Method:/i);
    const urlElements = screen.getAllByText(/URL:/i);
    expect(requestMethodElement).toBeInTheDocument();
    expect(urlElements[0]).toBeInTheDocument();
});