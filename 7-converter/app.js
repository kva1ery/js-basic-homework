function usdConverter(targetCurrency, value) {
    const RUB_RATE = 81.5;
    const EUR_RATE = 0.85;

    switch(targetCurrency) {
        case 'rub':
            return value * RUB_RATE;
        case 'eur':
            return value * EUR_RATE;
        default:
            return null;
    }
}

function eurConverter(targetCurrency, value) {
    const RUB_RATE = 95
    const USD_RATE = 1.17;

    switch(targetCurrency) {
        case 'rub':
            return value * RUB_RATE;
        case 'usd':
            return value * USD_RATE;
        default:
            return null;
    }
}

function rubConverter(targetCurrency, value) {
    const USD_RATE = 0.012;
    const EUR_RATE = 0.010;
    
    switch(targetCurrency) {
        case 'usd':
            return value * USD_RATE;
        case 'eur':
            return value * EUR_RATE;
        default:
            return null;
    }
}

function currencyConverter(sourceCurrency, targetCurrency, value) {
    switch(sourceCurrency) {
        case 'usd':
            return usdConverter(targetCurrency, value);
        case 'eur':
            return eurConverter(targetCurrency, value);
        case 'rub':
            return rubConverter(targetCurrency, value);
        default:
            return null;
    }
}