import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Translation } from 'react-i18next';

// Functional component for the Loading page
export default class LoadingPage extends React.Component {
    render() {
        return (
            <Translation>
                {
                    t =>
                        <div className="NoDataPage">
                            <div>{ t('loadingPageText') }</div>
                            <Spinner animation="grow">
                                <span className="sr-only">{ t('loadingPageText') }</span>
                            </Spinner>
                        </div>
                }
            </Translation>
        );
    }
}