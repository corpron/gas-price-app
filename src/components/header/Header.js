import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Translation } from 'react-i18next';
import { LOGO_IMAGE_URL } from '../../shared/constants'

// Header component
export default class Header extends React.Component {
    render() {
        return (
            <Translation>
                {
                    t =>
                        <>
                            <link
                                rel="stylesheet"
                                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                                crossOrigin="anonymous"
                            />
                            <Navbar bg="dark" fixed="top">
                                <Navbar.Brand>
                                    <img
                                        src={ LOGO_IMAGE_URL }
                                        className="LogoImage d-inline-block align-top"
                                        alt={ t('appName') }
                                    />
                                    <span className="BrandTitle">{ t('appName') }</span>
                                </Navbar.Brand>
                            </Navbar>
                        </>
                }
            </Translation>
        )
    }
}