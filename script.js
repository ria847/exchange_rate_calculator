let currencyElement1 = document.getElementById('currency-one');
let amount_1 = document.getElementById('amount-one');
let currencyElement2 = document.getElementById('currency-two');
let amount_2 = document.getElementById('amount-two');

let swap = document.getElementById('swap');
let rateEl = document.getElementById('rate');

function calculate() {
    const currency1 = currencyElement1.value;
    const currency2 = currencyElement2.value;


    fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates[currency2];
            rateEl.innerText = (`1 ${currency1} = ${rate} ${currency2}`);

            amount_2.value = (rate * amount_1.value).toFixed(3);
        })
        .catch(err => document.body.innerText = ` ERROR : ${err}`)
}



currencyElement1.addEventListener('change', calculate);
amount_1.addEventListener('input', calculate);
currencyElement2.addEventListener('change', calculate);
amount_2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    let temp = currencyElement1.value;
    currencyElement1.value = currencyElement2.value;
    currencyElement2.value = temp;
    calculate();
}
)

