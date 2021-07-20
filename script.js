const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=5ec4832433ec9ea3a63432a7a363f4f6';
const selectOne = document.querySelector('.select-one');
const selectTwo = document.querySelector('.select-two');
const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

const convert = async () => {
    const currency_one = selectOne.value;
    const currency_two = selectTwo.value;
    const resp = await fetch(url);
    const data = await resp.json();
    const currentRate = data.rates[currency_two];
    rate.innerText = `1 ${currency_one} = ${currentRate} ${currency_two}`;
    inputTwo.value = (inputOne.value * currentRate).toFixed(2);

    console.log(currentRate)
};



swap.addEventListener("click", () => {
    const storedValue = selectOne.value;
    selectOne.value = selectTwo.value;
    selectTwo.value = storedValue;
    convert();
});

inputOne.addEventListener('input', convert);
inputTwo.addEventListener('input', convert);
selectOne.addEventListener('change', convert);
selectTwo.addEventListener('change', convert);

convert();