import { test } from 'vitest'
import { render } from '@testing-library/react'
import Results from './index.jsx'

test('it renders the results component without crashing', () => {
  const data = {
    results: [
      { name: 'Test Name 1', url: 'Test URL 1' },
      { name: 'Test Name 2', url: 'Test URL 2' },
    ],
  };
  const { getByText } = render(<Results data={data} />)

  expect(getByText('Test Name 1')).toBeInTheDocument()
  expect(getByText('Test URL 1')).toBeInTheDocument()
  expect(getByText('Test Name 2')).toBeInTheDocument()
  expect(getByText('Test URL 2')).toBeInTheDocument()
})