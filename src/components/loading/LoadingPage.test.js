import React from 'react';
import { render } from '@testing-library/react';
import LoadingPage from './LoadingPage';

test('renders the LoadingPage component', () => {
    const { getAllByText } = render(<LoadingPage/>);
    const text = getAllByText('loadingPageText');
    expect(text[0]).toBeInTheDocument();
});