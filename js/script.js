{
    const onPlnInput = (plnElement, eurElement, eurRate) => {
        const eurResult = plnElement.value / eurRate;
        eurElement.value = plnElement.value > 0 ? eurResult.toFixed(2) : 0;
    };

    const onEurInput = (plnElement, eurElement, eurRate) => {
        const plnResult = eurElement.value * eurRate;
        plnElement.value = eurElement.value > 0 ? plnResult.toFixed(2) : 0;
    };

    const initRealtime = () => {
        const plnElement = document.querySelector(".js-pln-amount");
        const eurElement = document.querySelector(".js-eur-amount");
        const eurRate = 4.65;

        plnElement.addEventListener("input", () => {
            onPlnInput(plnElement, eurElement, eurRate);
        });

        eurElement.addEventListener("input", () => {
            onEurInput(plnElement, eurElement, eurRate);
        });
    };

    initRealtime();


    const getExchangeRate = (currency, exchangeRateElement) => {
        switch (currency) {
            case "USD":
                exchangeRateElement.innerText = "4.31";
                break;

            case "CHF":
                exchangeRateElement.innerText = "4.50";
                break;
        };
    }

    const calculateResult = (amount, exchangeRate) => {
        return amount / exchangeRate;
    }

    const updateResultText = (result, currency) => {
        const exchangeResultElement = document.querySelector(".js-exchange-value");

        exchangeResultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (stop) => {
        stop.preventDefault();

        const selectedCurrencyElement = document.querySelector(".js-selected-currency");
        const currency = selectedCurrencyElement.value;
        const amountElement = document.querySelector(".js-input-amount");
        const amount = amountElement.value;
        const exchangeRateElement = document.querySelector(".js-exchange-rate");

        getExchangeRate(currency, exchangeRateElement);

        const exchangeRate = Number(exchangeRateElement.innerText);
        const result = calculateResult(amount, exchangeRate);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}


