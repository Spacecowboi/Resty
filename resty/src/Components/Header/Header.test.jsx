import { test } from 'vitest'
import { render } from '@testing-library/react'
import Header from './index.jsx'

test('renders Header component without crashing', () => {
  const { getByText } = render(<Header />)
  expect(getByText('RESTY')).toBeInTheDocument()
})