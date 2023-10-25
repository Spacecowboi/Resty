import { test } from 'vitest'
import { render } from '@testing-library/react'
import Footer from './index.jsx';

test('it renders the footer component without breaking anything', () => {
    const {getByText} = render(<Footer />)
    expect(getByText('© 2018')).toBeInTheDocument()
})