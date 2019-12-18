import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import './Station.css';
import { useTranslation } from 'react-i18next';
import {
    STATION_IMAGE_BASE_URL, STATION_DEFAULT_IMAGE_URL, DIRECTIONS_BASE_URL,
    DIRECTIONS_MODE
} from '../../shared/constants'

// Functional component for the Station card
export default function Station(props) {
    const { t } = useTranslation();
    return (
        <Card className="Station"
              border="secondary">
            <Card.Header as="h5">{props.station.station || t('stationDefaultName')}</Card.Header>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col className="Override NoPadding" xs={4}>
                            <Image
                                fluid
                                alt={props.station.station}
                                src={`${STATION_IMAGE_BASE_URL}/${props.station.station}.com`}
                                onError={(e)=>{e.target.onerror = null; e.target.src=`${STATION_DEFAULT_IMAGE_URL}`}}/>
                        </Col>
                        <Col className="Override NoPaddingRight">
                            <Card.Title><a target="_blank"
                                           rel="noopener noreferrer"
                                           href={`${DIRECTIONS_BASE_URL}`
                                           + `${props.coordinates.latitude},`
                                           + `${props.coordinates.longitude}/`
                                           + `${props.station.lat},`
                                           + `${props.station.lng}/`
                                           + `${DIRECTIONS_MODE}`}>{props.station.address}</a>
                            </Card.Title>
                            <Container
                                className="Override NoPadding"
                                fluid>
                                <Row>
                                    <Col className="PriceLabel" xs={7} sm={4}>{ t('stationPriceRegular') }</Col>
                                    <Col className="Override NoPaddingRight">{props.station.reg_price}</Col>
                                </Row>
                                <Row>
                                    <Col className="PriceLabel" xs={7} sm={4}>{ t('stationPriceMidgrade') }</Col>
                                    <Col className="Override NoPaddingRight">{props.station.mid_price}</Col>
                                </Row>
                                <Row>
                                    <Col className="PriceLabel" xs={7} sm={4}>{ t('stationPricePremium') }</Col>
                                    <Col className="Override NoPaddingRight">{props.station.pre_price}</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}