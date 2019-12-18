import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the Header component', () => {
    const { getByText } = render(<Header/>);
    const title = getByText('appName');
    expect(title).toBeInTheDocument();
});