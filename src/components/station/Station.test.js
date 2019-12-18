import React from 'react';
import { render } from '@testing-library/react';
import Station from './Station';

const mockStation = {
    station: {
        station: 'Mock Station',
        address: '1418 Juliet Avenue',
        reg_price: '1.00',
        mid_price: '2.00',
        pre_price: '3.00',
        lat: '2.0000001',
        lng: '-3.000001'
    },
    coordinates: {
        latitude: '1.02020202',
        longitude: '2.02020202'
    }
};

test('renders the Station component', () => {
    const { getByText } = render(<Station {...mockStation} />);
    const station = getByText(mockStation.station.station);
    const address = getByText(mockStation.station.address);
    const reg_price = getByText(mockStation.station.reg_price);
    const mid_price = getByText(mockStation.station.mid_price);
    const pre_price = getByText(mockStation.station.pre_price);
    expect(station).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(reg_price).toBeInTheDocument();
    expect(mid_price).toBeInTheDocument();
    expect(pre_price).toBeInTheDocument();
});