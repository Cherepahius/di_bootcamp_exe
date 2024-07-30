const apiKey = 'd3331fc4749ca93a3fa0adc3';
const supportedCurrenciesUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
const conversionRateUrl = 'https://api.exchangerate-api.com/v4/latest/';
async function fetchSupportedCurrencies() {
    try {
        const response = await fetch(supportedCurrenciesUrl);
        const data = await response.json();
        return Object.keys(data.rates);
    } catch (error) {
        console.error('Error fetching supported currencies:', error);
    }
}

async function fetchConversionRate(fromCurrency, toCurrency) {
    try {
        const response = await fetch(`${conversionRateUrl}${fromCurrency}`);
        const data = await response.json();
        return data.rates[toCurrency];
    } catch (error) {
        console.error('Error fetching conversion rate:', error);
    }
}

async function populateCurrencyOptions() {
    const currencies = await fetchSupportedCurrencies();
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');

    currencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromSelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        toSelect.appendChild(optionTo);
    });
}

async function convertCurrency() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (fromCurrency && toCurrency && amount) {
        const rate = await fetchConversionRate(fromCurrency, toCurrency);
        const result = amount * rate;
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').textContent = 'Please fill out all fields.';
    }
}

function switchCurrencies() {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convertCurrency();
}


populateCurrencyOptions();
