import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// i18n settings. You can add translations for other languages below as needed.

const resources = {
    en: {
        translation: {
            'appName': 'Local Gas Prices',
            'errorPageUnavailable': 'Gas prices are unavailable now',
            'errorPageTryAgain': 'Please try again later or click below',
            'errorPageRefresh': 'Get gas prices',
            'loadingPageText': 'Checking gas prices',
            'stationDefaultName': 'Gas Station',
            'stationPriceRegular': 'Regular',
            'stationPriceMidgrade': 'Midgrade',
            'stationPricePremium': 'Premium',
            'sortBy': 'Sort By',
            'sortByDistance': 'Distance',
            'sortByPrice': 'Price',
            'within': 'Within (miles)'
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;