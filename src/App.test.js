import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((success) => Promise.resolve(
        success({
            coords: {
                latitude: 51.1,
                longitude: 45.3
            }
        }))),
    clearWatch: jest.fn(),
    watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

test('renders the App', () => {
  const { getAllByText } = render(<App />);
  const loading = getAllByText(/Checking gas prices/i);
  expect(loading[0]).toBeInTheDocument();
});
