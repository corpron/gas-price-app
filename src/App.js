import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n/i18n';

import Header from './components/header/Header'
import StationList from './components/station/StationList'
import LoadingPage from './components/loading/LoadingPage';
import ErrorPage from './components/error/ErrorPage';
import { MAX_RETRY_ATTEMPTS, STATIONS_BASE_URL,
    RADIUS_DEFAULT, FUEL_TYPE_DEFAULT, SORT_BY_DEFAULT } from './shared/constants'

// Main App component

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            coordinates: null,
            radius: RADIUS_DEFAULT,
            fuelType: FUEL_TYPE_DEFAULT,
            sortBy: SORT_BY_DEFAULT
        };
    }

    // callback function to reset the coordinates if they change
    getLocationInfo = (position) => {
        this.setState({
            coordinates: position.coords
        });
        this.fetchStations();
    };

    // fetch the stations with the correct coordinates, radius, fuel type, and sorting
    async fetchStations(){
        if(this.state.coordinates) {
            try {
                const stations =
                    await this.fetchStationsRetry(
                        `${STATIONS_BASE_URL}/${this.state.coordinates.latitude}/${this.state.coordinates.longitude}/` +
                        `${this.state.radius}/${this.state.fuelType}/${this.state.sortBy}`,
                        MAX_RETRY_ATTEMPTS);
                this.setState({
                    isLoaded: true,
                    items: stations
                });
            } catch(error) {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        }
    };

    // utility function to handle frequent errors returned by the dev endpoint
    fetchStationsRetry = async (url, attempts) => {
        try {
            const response =  await fetch(url);
            const items = await response.json();
            return items.stations;
        } catch(error) {
            if (attempts === 1) {
                throw error;
            }
            return await this.fetchStationsRetry(url, attempts - 1);
        }
    };

    // setup the geolocation.watchPosition to call getLocationInfo when the coordinates change
    componentDidMount() {
        this.watch = navigator.geolocation.watchPosition(this.getLocationInfo);
    };

    // refresh will re-fetch the stations
    refresh = () => {
        this.setState(
            {
                isLoaded: false,
                error: null
            }
        );
        this.fetchStations();
    };

    // stop watching geolocation on tear down
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watch);
    }

    // render the header and error page, loading page or station list, depending on state
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <>
                    <Header/>
                    <ErrorPage onRefresh={this.refresh}/>
                </>
            );
        } else if (!isLoaded) {
            return (
                    <>
                        <Header/>
                        <LoadingPage/>
                    </>
            );
        } else {
            return (
                <>
                    <Header/>
                    <StationList stations={items} coordinates={this.state.coordinates}/>
                </>
            );
        }
    };
}

