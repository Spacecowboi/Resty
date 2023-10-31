import { test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Form from './index.jsx'

test('Form component without crashing', () => {
    let formData = null;
    const handleApiCall = (data) => { formData = data; };
    const { getByText, getByLabelText } = render(<Form handleApiCall={handleApiCall} />)

    expect(getByLabelText('URL:')).toBeInTheDocument()
    expect(getByLabelText('Body:')).toBeInTheDocument() // New test for Body input
    expect(getByText('GO!')).toBeInTheDocument()
    expect(getByText('GET')).toBeInTheDocument()
    expect(getByText('POST')).toBeInTheDocument()
    expect(getByText('PUT')).toBeInTheDocument()
    expect(getByText('DELETE')).toBeInTheDocument()

    fireEvent.change(getByLabelText('URL:'), { target: { value: 'https://test.com' } })
    fireEvent.change(getByLabelText('Body:'), { target: { value: 'Test body' } }) // New test for Body input
    fireEvent.click(getByText('GO!'))

    expect(formData).toEqual({
        method: 'GET',
        url: 'https://test.com',
        body: 'Test body',
    })
})