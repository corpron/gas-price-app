import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorPage from './ErrorPage';

const params = {
    onRefresh: jest.fn()
};

test('renders the ErrorPage component', () => {
    const { getByText } = render(<ErrorPage onRefresh={params.callback}/>);
    const refreshButton = getByText('errorPageRefresh');
    expect(refreshButton).toBeInTheDocument();
});

test('calls the refresh callback', () => {
    const { getByText } = render(<ErrorPage {...params}/>);
    fireEvent.click(getByText('errorPageRefresh'));
    expect(params.onRefresh).toHaveBeenCalledTimes(1);
});