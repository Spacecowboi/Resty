import { test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Form from './index.jsx'

test('Form component without crashing', () => {
    let formData = null;
    const handleApiCall = (data) => { formData = data; };
    const { getByText, getByLabelText } = render(<Form handleApiCall={handleApiCall} />)

    expect(getByLabelText('URL:')).toBeInTheDocument()
    expect(getByText('GO!')).toBeInTheDocument()
    expect(getByText('GET')).toBeInTheDocument()
    expect(getByText('POST')).toBeInTheDocument()
    expect(getByText('PUT')).toBeInTheDocument()
    expect(getByText('DELETE')).toBeInTheDocument()
    fireEvent.click(getByText('GO!'))
  
    expect(formData).not.toBeNull()
  })