import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Translation } from 'react-i18next';
import { LOGO_IMAGE_URL, TOGGLE_NAMES, TOGGLE_STATE } from '../../shared/constants';
import { FeatureToggleProvider, FeatureToggle } from 'react-feature-toggles';

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
                            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
                                <Navbar.Brand>
                                    <img
                                        src={ LOGO_IMAGE_URL }
                                        className="LogoImage d-inline-block align-top"
                                        alt={ t('appName') }
                                    />
                                    <span className="BrandTitle">{ t('appName') }</span>
                                </Navbar.Brand>
                                <FeatureToggleProvider featureToggleList={TOGGLE_STATE}>
                                    <FeatureToggle featureName={TOGGLE_NAMES.SHOW_SORTING || TOGGLE_NAMES.SHOW_RADIUS}>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    </FeatureToggle>
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="mr-auto">
                                            <FeatureToggle featureName={TOGGLE_NAMES.SHOW_SORTING}>
                                                <NavDropdown title={t('sortBy')}
                                                             id="sort-dropdown">
                                                    <NavDropdown.Item onSelect={this.props.onSortChange}
                                                                      active={this.props.sortBy === 'distance'}
                                                                      eventKey="distance">{t('sortByDistance')}</NavDropdown.Item>
                                                    <NavDropdown.Item onSelect={this.props.onSortChange}
                                                                      active={this.props.sortBy === 'price'}
                                                                      eventKey="price">{t('sortByPrice')}</NavDropdown.Item>
                                                </NavDropdown>
                                            </FeatureToggle>
                                            <FeatureToggle featureName={TOGGLE_NAMES.SHOW_RADIUS}>
                                                <NavDropdown title={t('within')}
                                                             id="radius-dropdown">
                                                    <NavDropdown.Item onSelect={this.props.onRadiusChange}
                                                                      active={this.props.radius === '1'}
                                                                      eventKey="1">1</NavDropdown.Item>
                                                    <NavDropdown.Item onSelect={this.props.onRadiusChange}
                                                                      active={this.props.radius === '2'}
                                                                      eventKey="2">2</NavDropdown.Item>
                                                    <NavDropdown.Item onSelect={this.props.onRadiusChange}
                                                                      active={this.props.radius === '5'}
                                                                      eventKey="5">5</NavDropdown.Item>
                                                    <NavDropdown.Item onSelect={this.props.onRadiusChange}
                                                                      active={this.props.radius === '10'}
                                                                      eventKey="10">10</NavDropdown.Item>
                                                </NavDropdown>
                                            </FeatureToggle>
                                        </Nav>
                                    </Navbar.Collapse>
                                </FeatureToggleProvider>
                            </Navbar>
                        </>
                }
            </Translation>
        )
    }
}