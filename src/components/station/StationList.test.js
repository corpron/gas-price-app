import React from 'react';
import { render } from '@testing-library/react';
import StationList from './StationList';

const mockProps = {
    coordinates: {
        latitude: '1.02020202',
        longitude: '2.02020202'
    },
    stations: [
        {
            id: 1,
            station: 'Mock Station 1',
            address: '1418 Juliet Avenue',
            reg_price: '1.00',
            mid_price: '2.00',
            pre_price: '3.00',
            lat: '2.0000001',
            lng: '-3.000001'
        },
        {
            id: 2,
            station: 'Mock Station 2',
            address: '1419 Juliet Avenue',
            reg_price: '4.00',
            mid_price: '5.00',
            pre_price: '6.00',
            lat: '2.0000001',
            lng: '-3.000001'
        }
    ]
};

test('renders the StationList component', () => {
    const { getByText } = render(<StationList {...mockProps} />);
    const station1 = getByText('Mock Station 1');
    const station2 = getByText('Mock Station 2');
    expect(station1).toBeInTheDocument();
    expect(station2).toBeInTheDocument();

});