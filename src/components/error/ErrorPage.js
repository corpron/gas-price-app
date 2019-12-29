import React from 'react';
import Button from 'react-bootstrap/Button';
import './ErrorPage.css';
import { useTranslation } from 'react-i18next';

// Functional component for the error page
export default function ErrorPage(props) {
    const { t } = useTranslation();

    return (
        <div className="NoDataPage">
            <div>{ t('errorPageUnavailable') }</div>
            <div>{ t('errorPageTryAgain') }</div>
            <Button variant="light" className="RefreshButton" onClick={props.onRefresh}>{ t('errorPageRefresh')}</Button>
        </div>
    );
}